import { MutationTree, ActionTree, GetterTree } from "vuex";

const state = () => ({});

type RootState = ReturnType<typeof state>;

const mutations: MutationTree<RootState> = {};

const actions: ActionTree<RootState, RootState> = {};

const getters: GetterTree<RootState, RootState> = {};

export default { namespaced: true, state, getters, actions, mutations };
