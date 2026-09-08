const express = require("express");
const chalk = require("chalk");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
    res.send("Hallo vanaf je Node-server!");
});

app.listen(PORT, () =>{
    console.log(chalk.green(`Server draait op http://localhost:${PORT}`));
});
