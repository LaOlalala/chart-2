<template>
    <div class="vue-ts-app">
        <DemoTs/>
    </div>
</template>

<script lang="js">
    import DemoTs from "./components/DemoTs";

    export default {
        components: {DemoTs},
        name: "vue-ts-app",
    }
</script>

<style lang="scss">
    .vue-ts-app {
        .vue-ts-component p {
            font-size: 14px;
            text-align: center;
            color: darkblue;
            cursor: pointer;
        }

        button {
            display: block;
            margin: 0 auto;
        }
    }
</style>
