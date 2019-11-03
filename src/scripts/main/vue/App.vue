<template>
    <div class="vue-app">
        <p>{{ msg }}</p>
    </div>
</template>

<script>
    export default {
        name: "vue-app",
        data: ()  => ({
            msg: "Приложение на Vue"
        }),
    }
</script>

<style lang="scss">
    .vue-app {
        p {
            font-size: 18px;
            text-align: center;
        }
    }
</style>
