<script setup lang="ts">
import Text from "@/components/PText/PText.vue"
import Card from "@/components/card/Card.vue"
import TypographyImg from "@/assets/design/typography.png"
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <Text class="pt-24" type="title">{{ $t("design.title") }}</Text>
    <Text>
      {{ $t("design.text") }}
    </Text>
    <div
      class="grid grid-cols-1 pt-12 gap-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
    >
      <Card
        :img-src="TypographyImg"
        title="Typography"
        text="How is Typography implementen in my Portfolio?"
      />
    </div>
  </div>
</template>
