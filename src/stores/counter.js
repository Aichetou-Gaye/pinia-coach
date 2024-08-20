import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", {
  state: () => ({
    count: 0,
    goal: 10,
  }),
  actions: {
    increase() {
      this.count++;
      console.log("Increase function");
    },

    decrease() {
      if (this.count > 0) {
        this.count--;
      }
      console.log("Decrease function");
    },
  },
});
