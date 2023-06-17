import { onMounted, ref } from "vue"
import type { Ref } from "vue"
import type { GitHubContent } from "@/features/blog/models/git-hub-content"

export type PComponentName = "PText"

/**
 * Defines the path of the different components in the project.
 */
const componentPathLookup: Record<PComponentName, string> = {
  PText: "src/components/PText/PText.vue",
}

/**
 * Composable for getting the content of a component from GitHub.
 * @param {PComponentName} component
 */
export const useGitHubComponentContent = (
  component: PComponentName
): { githubComponentContent: Ref<GitHubContent | undefined> } => {
  const githubComponentContent = ref<GitHubContent>()

  onMounted(async () => {
    githubComponentContent.value = await fetch(
      `https://api.github.com/repos/dominique-boerner/vue-portfolio/contents/${componentPathLookup[component]}`
    )
      .then((res) => res.json())
      .then((gitHubContent: GitHubContent) => gitHubContent)
      .then((githubContent: GitHubContent) => ({
        ...githubContent,
        content: window.atob(githubContent.content),
      }))
  })

  return { githubComponentContent }
}
