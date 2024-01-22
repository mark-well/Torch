const { exec } = require('child_process');
let express = require('express');
let app = express();
let path = require("path");

app.use(express.static(__dirname));

app.get("/", (req, res) => {
	res.sendFile(path.join(__dirname + "/index.html"));
});

app.post("/torch/:signal", (req, res) => {
	let signal = req.params.signal;
	switch(signal)
	{
		case "on":
			//console.log("Torch on");
			exec("termux-torch on");
			exec("termux-vibrate -f -d 500");
			break;
		case "off":
			//console.log("Torch off");
			exec("termux-torch off");
			exec("termux-vibrate -f -d 500");
			break;
		default:
			//console.log("off");
			exec("termux-torch off");
			exec("termux-vibrate -f -d 500");
			break
	}
	
	res.sendStatus(200);
});

app.listen(3000, () => {
	console.log("Server is running at port 3000...");
});
