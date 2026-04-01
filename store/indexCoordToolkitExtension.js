import getters from "./gettersCoordToolkitExtension";
import mutations from "./mutationsCoordToolkitExtension";
import actions from "./actionsCoordToolkitExtension";
import state from "./stateCoordToolkitExtension";

export default {
    namespaced: true,
    state: {...state},
    mutations,
    actions,
    getters
};
