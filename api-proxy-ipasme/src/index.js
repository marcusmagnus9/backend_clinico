import app from "./app";
import './database';
import {createConnection} from "./data/low.config";

createConnection();

app.listen(app.get("port"));

console.log("Server on port", app.get('port'));
