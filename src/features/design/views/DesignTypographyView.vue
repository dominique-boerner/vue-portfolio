<script setup lang="ts">
import PText from "@/components/PText/PText.vue"
import { useGitHubComponentContent } from "@/features/blog/composables/useGitHubComponentContent"

const { isLoading, githubComponentContent } = useGitHubComponentContent("PText")
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
      <PText class="pt-8" type="heading1" :is-loading="isLoading"
        >Technische Umsetzung
      </PText>
      <PText :is-loading="isLoading"
        >In der Webseite wird die Typography durch eine “PText” Komponente
        dargestellt. Diese Komponente unterstützt zwei Parameter:
      </PText>
      <PText class="pt-8" type="body2" :is-loading="isLoading"
        >(optional)
      </PText>
      <PText type="heading2" :is-loading="isLoading">TextType</PText>
      <PText type="body1" :is-loading="isLoading">Lorem ipsum</PText>
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
