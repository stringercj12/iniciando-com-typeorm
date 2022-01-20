import "reflect-metadata";
import app from "./serve";

app.listen(3333, (err, res) => {
    console.log("Rodando...");
});