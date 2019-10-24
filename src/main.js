// import "@styles/main.scss";
import "@styles/main.less";

import {App} from "@main/app";

window.App = App.getInstance({
    "top_level": {
        "second_level": "value",
    },
});
