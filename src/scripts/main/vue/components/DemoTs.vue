<template>
    <div class="vue-ts-component" @click="onClick">
        <p>{{ msg }}</p>
    </div>
</template>

<script lang="ts">
    import Vue from "vue";
    import Component from "vue-class-component";

    @Component({
        data: () => ({
            msg: "Vue: компонент на классах (TS)",
        })
    })
    export default class DemoTs extends Vue {
        protected message = "Here's Johnny!";

        public onClick(): void {
            window.alert(this.message)
        }
    }
</script>
