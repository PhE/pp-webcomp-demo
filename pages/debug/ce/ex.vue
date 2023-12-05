<script setup>
import { useCustomElements } from '#imports';

const { registerEntry } = useCustomElements();

registerEntry('example');
</script>

<template>
    <client-only>
        <custom-element-example title="Prop. Example Title">Slot Example Content</custom-element-example>
    </client-only>
</template>