import { slides } from "./data.js";

const { createApp } = Vue;

createApp({
    data() {
      return {
        slides,
        activeIndexSlide: 0,
        myInterval: null
      };
    },
    methods: {
        goToSlide(index) {
            this.activeIndexSlide = index;
        },
        nextSlide() {
            if (this.activeIndexSlide < this.slides.length - 1) {
              this.activeIndexSlide++;
            } else {
              this.activeIndexSlide = 0;
            }
          },
          prevSlide() {
            if (this.activeIndexSlide > 0) {
              this.activeIndexSlide--;
            } else {
              this.activeIndexSlide = this.slides.length - 1;
            }
          },
          startInterval() {
            this.myInterval = setInterval(this.nextSlide, 3000);
          },
          stopInterval() {
            clearInterval(this.myInterval);
            this.myInterval = null;
          }
    },
    mounted() {
        this.startInterval();
    }
  }).mount("#app");