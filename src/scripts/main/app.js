import {App as StdApp} from "@std/app";

export class App extends StdApp {
    constructor(config) {
        super(config);

        $(() => {
            console.log("Here's Johnny!");
        });
    }
}
