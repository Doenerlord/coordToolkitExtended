import getters from "./gettersCoordToolkitExtended";
import mutations from "./mutationsCoordToolkitExtended";
import actions from "./actionsCoordToolkitExtended";
import state from "./stateCoordToolkitExtended";

export default {
    namespaced: true,
    state: {...state},
    mutations,
    actions,
    getters
};
