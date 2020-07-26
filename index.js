const express = require("express")
const { spawn } = require("child_process");

const app = express()
const PORT = process.env.PORT || 8000;

app.use(express.urlencoded());
app.use(express.json());

app.use("/",express.static("public"));

app.post("/submit",(req,res) => {
	res.send(req.body.name);
});

app.get("/python",(req,res) => {
	const process = spawn("python3",["scripts/script.py"]);
	process.stdout.on("data", data => res.json({result:data.toString()}));
});


app.listen(PORT,() => console.log(`server listening on port ${PORT}`));
