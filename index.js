const express = require('express');
const app = express();
const nodemailer = require('nodemailer');
const PORT = process.env.PORT || 5000;



app.use(express.static('public'));
app.use(express.json());
app.get('/', (req, res) => {
	res.sendFile(__dirname + '/public/index.html');
})
app.post('/', (req, res) => {
	console.log(req.body)
	const transport = nodemailer.createTransport({
		service: 'gmail',
		auth: {
			user:'mathcarvalhobarreto@gmail.com' ,
			pass: 'euamomusicadesde1999'
		}
	})
})
app.listen(PORT, () => {
	console.log(`server running on port ${PORT}`);
})
