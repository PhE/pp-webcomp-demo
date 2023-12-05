<script setup>
import { useCustomElements } from '#imports';

const { registerEntry } = useCustomElements();

registerEntry('example');
</script>

<template>
    <div>
        <h1>example use of custom-element-example</h1>
        <client-only>
            <custom-element-example title="Prop. Title">
                Slot Content
            </custom-element-example>
        </client-only>
    </div>
</template>