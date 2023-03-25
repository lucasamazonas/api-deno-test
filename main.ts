import {WebApp} from "./deps.ts";
import routes from "./src/routes/api.ts";

const app = new WebApp();

app.set(routes);

app.listen(8080);
