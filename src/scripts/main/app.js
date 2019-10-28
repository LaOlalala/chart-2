import Vue from "vue/dist/vue.js";

import {App as StdApp} from "@std/app";
import VueApp from "@main/vue/App";

export class App extends StdApp {
    constructor(config) {
        super(config);

        /* eslint-disable no-new */
        new Vue({
            el: "#vue-app",
            // eslint-disable-next-line
            render: h => h(VueApp)
        })
    }
}
