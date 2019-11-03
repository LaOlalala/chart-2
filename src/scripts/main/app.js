import Vue from "vue/dist/vue.js";

import {App as StdApp} from "@std/app";
import VueJsApp from "@main/vue/AppJs";
import VueTsApp from "@main/vue/AppTs";

export class App extends StdApp {
    constructor(config) {
        super(config);

        /* eslint-disable no-new */
        new Vue({
            el: "#vue-js-app",
            // eslint-disable-next-line
            render: h => h(VueJsApp)
        });

        /* eslint-disable no-new */
        new Vue({
            el: "#vue-ts-app",
            // eslint-disable-next-line
            render: h => h(VueTsApp)
        });
    }
}
