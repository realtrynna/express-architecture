import http from "http";
import chalk from "chalk";

import { bootStrap } from "./app";

bootStrap()
    .then(app => {
        const server = http.createServer(app);
        
        server.listen(1000, () => console.log(
            chalk.bgGreen(`
                🛡️🛡️🛡️🛡️🛡️🛡️🛡️🛡️🛡️🛡️🛡️🛡️
                Server listening on port ${app.get("port")}
                🛡️🛡️🛡️🛡️🛡️🛡️🛡️🛡️🛡️🛡️🛡️🛡️
            `)
        ));
    });