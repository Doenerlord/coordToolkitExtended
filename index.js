import VueAddonComponent from "./components/CoordToolkitExtension.vue";
import VueAddonStore from "./store/indexCoordToolkitExtension";
import deLocale from "./locales/de/additional.json";

export default {
    component: VueAddonComponent,
    store: VueAddonStore,
    locales: {
        de: deLocale
    }
};