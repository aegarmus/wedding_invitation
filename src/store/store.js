import { defineStore } from 'pinia';

export const useGlobalStore = defineStore('global', {
    state: () => ({
        husband: {
            name: 'Alan',
            lastname: 'García'
        },
        wife: {
            name: 'Mariel',
            lastname: 'Retamales'
        }
    }),
    getters: {
        husbandName: (state) => `${state.husband.name}`,
        husbandFullName: (state) => `${state.husband.name} ${state.husband.lastname}`,
        wifeName: (state) => `${state.wife.name}`,
        wifeFullName: (state) => `${state.wife.name} ${state.wife.lastname}`,
        coupleNames: (state) => `${state.husband.name} & ${state.wife.name}`
    }
})