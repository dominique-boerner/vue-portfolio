<script setup lang="ts">

interface Tag {
    label?: string
}

defineProps<Tag>();

</script>

<template>
    <div class="m-2 w-32 flex justify-center items-center bg-primary p-1 rounded-full dark:bg-white">
        <span class="text-white text-xl dark:text-primary">{{label}}</span>
    </div>
</template>