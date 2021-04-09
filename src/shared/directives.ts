function fallbackImg(el: any, binding: any) {
  try {
    const { value } = binding;
    const loader = "../static/images/loading.gif";
    const fallBackImage = "../../static/images/fallback.png";
    const img = new Image();
    let loading = loader;
    let error = fallBackImage;
    let original = el.src;
    if (typeof value === "string") {
      loading = value;
      error = value;
    }
    if (value instanceof Object) {
      loading = value.imageLoader || loader;
      error = value.fallBackImage || fallBackImage;
    }
    img.src = original;
    el.src = loading;
    img.onload = () => {
      el.src = original;
    };
    img.onerror = () => {
      el.src = error;
    };
  } catch (e) {
    console.log(e);
  }
}

export { fallbackImg };
