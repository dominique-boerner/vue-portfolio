export default function useBlogCategories() {
  const getCategories = () => {
    return ["Design", "Development", "CI/CD", "UX"]
  }

  return {
    getCategories,
  }
}
