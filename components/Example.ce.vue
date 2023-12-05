<script>
export default {
    props: {
        title: {
            type: String,
            default: null
        }
    },
    computed: {
        exampleTitle() {
            return this.title || 'Default Title';
        }
    }
};
</script>


<template>
    <div class="custom-element-example">
        <div class="title">
            {{ exampleTitle }}
            <UButton>I am Nuxt UI UButton</UButton>
            <UColorModeButton />
        </div>
        <div class="content">
            <slot>Default Content</slot>
        </div>
    </div>
</template>


<style lang="postcss" scoped>
.custom-element-example {
    min-width: 300px;
    padding: 10px;
    font-size: 16px;
    color: #35495e;
    text-align: center;
    background: #35495e;
    border-radius: 4px;
}

.title {
    margin-bottom: 10px;
    font-size: 24px;
    font-weight: bold;
    text-transform: uppercase;
}

.title,
.content {
    padding: 5px;
    color: white;
    background: #3b8070;
}

.content {
    line-height: 1.6;
}

.content a {
    margin-top: 10px;
    color: currentColor;
}
</style>