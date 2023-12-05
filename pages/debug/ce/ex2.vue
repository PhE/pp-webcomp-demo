<script setup>
import { useCustomElements } from '#imports';

const { registerEntry } = useCustomElements();

registerEntry('example2');
</script>

<template>
    <client-only>
        <custom-element-example2 />
    </client-only>
</template>