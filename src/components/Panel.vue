<template>
    <div border-1 border-solid border-gray rounded-2xl pt-1 pb-3 px-6 transition-filter duration-300ms w-16rem bg-body>
        <h2 m-t-3>{{ title }}</h2>
        <p>{{ lead }}</p>
    </div>
</template>

<script lang="ts" setup>
const {title, lead} = defineProps<{title: string, lead: string}>();
</script>