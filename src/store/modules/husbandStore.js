import { defineStore } from "pinia";

export const useHusbandStore = defineStore("husbandStore", {
  state: () => ({
    name: "Alan",
    lastname: "García",
  }),
  getters: {
    husbandName: (state) => `${state.name}`,
    husbandFullName: (state) => `${state.name} ${state.lastname}`,
  },
});
