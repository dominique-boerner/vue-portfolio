<script setup lang="ts">
import { ref } from "vue"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"

const itemAmount = 3
const items = [
  "Lorem Ipsum 1",
  "Lorem Ipsum 2",
  "Lorem Ipsum 3",
  "Lorem Ipsum 4",
  "Lorem Ipsum 5",
  "Lorem Ipsum 6",
]

const currentSlide = ref(0)
const slides = Math.ceil(items.length / itemAmount)

function prev() {
  if (currentSlide.value > 0) {
    currentSlide.value--
  }
}

function next() {
  if (currentSlide.value < slides - 1) {
    currentSlide.value++
  }
}
</script>
<template>
  <div class="flex justify-center items-center w-full">
    <div class="flex w-full h-64 p-4 overflow-x-auto items-center">
      <button class="btn btn-primary" @click="prev()">
        <font-awesome-icon icon="fas fa-chevron-left"></font-awesome-icon>
      </button>
      <div
        v-for="item in items.slice(
          currentSlide * itemAmount,
          currentSlide * itemAmount + itemAmount
        )"
        :key="item"
        class="flex-1 h-full bg-white rounded-md shadow-md h-full mx-4 p-2 card-container"
      >
        {{ item }}
      </div>
      <button class="btn btn-primary" @click="next()">
        <font-awesome-icon icon="fas fa-chevron-right"></font-awesome-icon>
      </button>
    </div>
  </div>
</template>

<style lang="scss">
@for $i from 2 to 5 {
  .card-container:nth-child(#{$i}) {
    animation: cardAppear 300ms ease-out forwards;
    animation-delay: (#{$i * 200ms});
    opacity: 0;
  }
}

@keyframes cardAppear {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
