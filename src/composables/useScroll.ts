import { onMounted, ref } from "vue"

/**
 * Returns the current scroll position of the window.
 */
export function useScroll() {
  const y = ref(0)

  function update(event: Event) {
    const document = event.target as Document
    y.value = document.scrollingElement?.scrollTop ?? 0
  }

  onMounted(() => {
    window.addEventListener("scroll", update)
  })

  return y
}
