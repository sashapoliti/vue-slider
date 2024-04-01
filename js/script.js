import { slides } from "./data.js";

const { createApp } = Vue;

createApp({
    data() {
      return {
        slides,
        activeIndexSlide: 0,
      };
    },
    methods: {
        goToSlide(index) {
            this.activeIndexSlide = index;
        }
    },
    mounted() {
    }
  }).mount("#app");