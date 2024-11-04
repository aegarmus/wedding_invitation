import { createPinia } from "pinia";
import { useHusbandStore } from "./modules/husbandStore.js";
import { useWifeStore } from "./modules/wifeStore.js";
import { useEventDateStore } from "./modules/eventDateStore.js";

const pinia = createPinia();

export { useHusbandStore, useWifeStore, useEventDateStore };
export default pinia;
