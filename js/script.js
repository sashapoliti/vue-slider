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
          }
    },
    mounted() {
        setInterval(this.nextSlide, 3000);
    }
  }).mount("#app");