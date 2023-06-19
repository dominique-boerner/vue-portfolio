<script setup lang="ts">
import PText from "@/components/PText/PText.vue"
import { useGitHubComponentContent } from "@/features/blog/composables/useGitHubComponentContent"
import type { TextType } from "@/components/PText/textType"
import PComponentPreview from "@/features/design/components/PComponentPreview.vue"

const { isLoading, githubComponentContent } = useGitHubComponentContent("PText")

const textTypes: TextType[] = [
  "title",
  "heading1",
  "heading2",
  "heading3",
  "body1",
  "body2",
]
</script>
<template>
  <section class="flex min-h-screen flex-col">
    <header class="flex flex-col">
      <PText class="pt-24" type="title" :is-loading="isLoading"
        >Typography
      </PText>
      <PText :is-loading="isLoading">
        Die Typography des Portfolios definiert die Schriftarten und
        Schriftgrößen eines Textes. Sie wird in der Anwendung genutzt um
        Überschriften, Titel und Texte zu definieren oder die Art der Schrift zu
        definieren.
      </PText>
    </header>
    <main class="flex flex-col">
      <PComponentPreview :code="githubComponentContent?.content">
        <PText v-for="type in textTypes" class="my-6" :type="type">
          {{ type }}
        </PText>
      </PComponentPreview>
      <PText class="pt-8" type="heading1" :is-loading="isLoading">
        Implementierung
      </PText>
      <PText :is-loading="isLoading"
        >In der Webseite wird die Typography durch eine “PText” Komponente
        dargestellt. Diese Komponente unterstützt folgende Parameter:
        <ul class="list-disc p-6">
          <li>font: die Schriftart</li>
          <li>
            type: die Art der Schrift, z. B. "title", "heading1" oder "body1".
          </li>
          <li>isLoading: zeigt einen Skeleton loader an wenn true.</li>
        </ul>
      </PText>
      <!--      <PText>-->
      <!--        {{ githubComponentContent?.content }}-->
      <!--      </PText>-->
      <PText class="underline" type="body2" :is-loading="isLoading">
        <a :href="githubComponentContent?.html_url" target="_blank">
          {{ githubComponentContent?.html_url }}
        </a>
      </PText>
    </main>
  </section>
</template>
