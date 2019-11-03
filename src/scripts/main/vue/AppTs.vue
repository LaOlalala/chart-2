<template>
    <div class="vue-ts-app">
        <DemoTs/>
    </div>
</template>

<script>
    import DemoTs from "./components/DemoTs";

    export default {
        components: {DemoTs},
        name: "vue-ts-app",
    }
</script>

<style lang="scss">
    .vue-ts-app {
        p {
            font-size: 14px;
            text-align: center;
            color: darkblue;
        }
    }
</style>
