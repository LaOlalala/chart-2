import Vue from "vue/dist/vue.js";
import React from "react";
import ReactDOM from "react-dom";

import {App as StdApp} from "@std/app";

import VueJsApp from "@main/vue/AppJs";
import VueTsApp from "@main/vue/AppTs";

import {StatelessApp} from "@main/react/StatelessApp";

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

        ReactDOM.render(
            React.createElement(StatelessApp, {}, null),
            document.getElementById("react-stateless-app")
        );
    }
}
