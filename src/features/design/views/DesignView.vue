<script setup lang="ts">
import PText from "@/components/PText/PText.vue"
import Card from "@/components/PCard/PCard.vue"
import TypographyImg from "@/assets/design/typography.png"
import router from "@/router"
import Tag from "@/components/atoms/Tag.vue"

const navigate = () => {
  router.push("/design/typography")
}
</script>

<template>
  <div class="flex min-h-screen flex-col">
    <Tag label="Beta"></Tag>
    <PText class="pt-24" type="title">{{ $t("design.title") }}</PText>
    <PText>
      {{ $t("design.text") }}
    </PText>
    <div
      class="grid grid-cols-1 gap-12 pt-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
    >
      <Card
        :img-src="TypographyImg"
        :title="$t('design.typography.card-title')"
        :text="$t('design.typography.card-text')"
        @click="navigate()"
      />
    </div>
  </div>
</template>
