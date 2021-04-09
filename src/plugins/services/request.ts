import axios from "axios";

let source: any;
const get = async (uri: string, params: { [key: string]: string }) => {
  // TODO: CHECK IF THIS IS THE CORRECT WAY TO DO THIS

  if (source) {
    source.cancel("Previous call cancelled if it hasn't finished..I think");
  }

  const $axios = axios.create({
    baseURL: "https://fmmacc.mazda.de/api/",
    timeout: 10000,
  });
  source = axios.CancelToken.source();

  try {
    const requestUrl = uri.replace(
      /{\s*(\w+?)\s*}/g,
      (_, token) => params[token] || ""
    );

    const { status, data } = await $axios.get(requestUrl);

    if (status < 200 || status > 299) {
      throw new Error("API request failed with status " + status);
    }

    return data;
  } catch (error) {
    if (axios.isCancel(error)) {
      source.cancel("request - fetch was canceled");
      // eslint-disable-next-line no-console
      console.log(error);
    }
    // TODO SET UP PROPER ERROR HANDLER
    throw new Error("API request failed with status " + error);
  }
};

const post = async (uri: string, data: any, context: any) => {
  // TODO: CHECK IF THIS IS THE CORRECT WAY TO DO THIS

  if (source) {
    source.cancel("Previous call cancelled if it hasn't finished..I think");
  }

  const $axios = axios.create({
    baseURL: import.meta.env.VITE_API_URL_CONTACT_FORMS,
    timeout: 10000,
  });

  source = $axios.CancelToken?.source() ?? undefined;

  try {
    const { status } = await $axios.post(uri, data).then((res) => {
      console.log(res);

      return { status: res.status };
    });

    if (status < 200 || status > 299) {
      throw new Error("API request failed with status " + status);
    }

    return status;
  } catch (error) {
    if (axios.isCancel(error)) {
      source.cancel("request - fetch was canceled");
      // eslint-disable-next-line no-console
      console.log(error);
    }
    // TODO SET UP PROPER ERROR HANDLER
    throw new Error("API request failed with status " + error);
  }
};

export { get, post };
