import { defineStore } from "pinia";

export const useWifeStore = defineStore("wifeStore", {
  state: () => ({
    name: "Mariel",
    lastname: "Retamales",
  }),
  getters: {
    wifeName: (state) => `${state.name}`,
    wifeFullName: (state) => `${state.name} ${state.lastname}`,
  },
});
