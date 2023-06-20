export default function useBlog() {
  const getCategories = () => {
    return ["Design", "Development", "CI/CD", "UX"]
  }

  return {
    getCategories,
  }
}
