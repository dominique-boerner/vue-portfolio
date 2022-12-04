import { onMounted, ref } from "vue";

export function useScroll() {
  const y = ref(0);

  function update(event: Event) {
    const document = event.target as Document;
    const scrollTop = document.scrollingElement?.scrollTop ?? 0;
    y.value = scrollTop;
  }

  onMounted(() => {
    window.addEventListener("scroll", update);
  });

  return y;
}
