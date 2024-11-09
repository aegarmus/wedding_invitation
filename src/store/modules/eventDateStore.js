import { defineStore } from "pinia";

export const useEventDateStore = defineStore("eventDateStore", {
  state: () => ({
    releaseDate: new Date("2024-11-09T22:05:00"),
    eventDate: "2025-04-25",
    timeInit: "18:00",
    durationHours: 4,
  }),
  getters: {
    formattedReleaseDate: (state) => {
        const [year, month, day] = state.releaseDate
            .toISOString()
            .split("T")[0]
            .split("-");

        return `${day}.${month}.${year}`;
    },

    formattedEventDate: (state) => state.eventDate.split("-").reverse().join("."),

    eventEndTime: (state) => {
        const [hours, minutes] = state.timeInit.split(":").map(Number);
        const endTime = new Date(state.releaseDate);
        
        endTime.setHours(hours + state.durationHours, minutes);
        
        return `${endTime.getHours().toString().padStart(2, "0")}:${endTime
          .getMinutes()
          .toString()
          .padStart(2, "0")}`;
    },
  },
});
