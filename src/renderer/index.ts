import {createApp} from "vue";
import App from "./App.vue";
import {argsSymbol, createArgs} from "./store";
import {router} from "./router";
import {Init} from "./utils/ipc";

Init().then((Args: { [key: string]: unknown }) => {
    createApp(App)
        .use(router(Args["el"] as string))
        .provide(argsSymbol, createArgs(Args["data"] || null))
        .mount("#app");
});