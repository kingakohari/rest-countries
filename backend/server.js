const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {

	const errorHTML = `
		
	<!DOCTYPE html>
	<html lang="en">
	<head>
		<meta charset="UTF-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<link rel="preconnect" href="https://fonts.googleapis.com"> 
		<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin> 
		<link href="https://fonts.googleapis.com/css2?family=Luckiest+Guy&display=swap" rel="stylesheet">
		<style>
			body{
				background-color: #fff
			}

			#root{
				display: flex;
				width: 100%;
				height: 100vh;
				text-align: center;
				align-items: center;
				justify-content: center
			}

			button {
				width: 400px;
				height: 400px;
				justify-content: center;
				align-items: center;
				display: inline-block;
				text-align: center;
				margin: 0 auto;
				margin-left: 50%;
				padding: 0; 
				border: 1px;
				border-radius: 400px;
				left: 50%;
				top: 50%;
				transform: translate(-50%,-50%);
				vertical-align: middle;
				font-family: 'Luckiest Guy', cursive;
				font-weight: 800;
				font-size: 60px;
				color: #fff;
				background-color: #4343F9;
			}

		</style>
		<title>Oh a happy day</title>
	</head>
	<body>
		<div id="root">
			<button>Have a<br>great<br>day!</button>
		</div>
	</body>
	</html>
	
	`;
    
	let filePath = path.resolve(__dirname + '/../frontend' + req.url);
    
	fs.access(filePath, fs.constants.R_OK, (err) => {
	if(err){
		res.statusCode = 404;
		res.end(errorHTML);
	}else{
		if(fs.statSync(filePath).isDirectory()) {
			filePath += '/index.html';
		}
		fs.readFile(filePath, (err, data) => {
			if(err) {
				res.statusCode = 500;
				res.end(errorHTML);
			} else {
				res.end(data);
			}
		});
	}
	});
});

server.listen(9000, "127.0.0.1", () => {
    const addr = server.address();
		console.log(`http://${addr.address}:${addr.port}`);
});