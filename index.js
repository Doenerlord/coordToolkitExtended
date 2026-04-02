import VueAddonComponent from "./components/CoordToolkitExtended.vue";
import VueAddonStore from "./store/indexCoordToolkitExtended";
import deLocale from "./locales/de/additional.json";

export default {
    component: VueAddonComponent,
    store: VueAddonStore,
    locales: {
        de: deLocale
    }
};