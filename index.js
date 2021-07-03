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

	const mailOptions = {
		from: req.body.email,
		to: 'mathcarvalhobarreto@gmail.com',
		text: `
		Nome do interessado: ${req.body.nome},
		Sobrenome: ${req.body.sobrenome},
		telefone: ${req.body.telefone},
		email: ${req.body.email}
		`
	}

	transport.sendMail(mailOptions, (error, info) => {
		if(error){
			console.log(error);
			res.send('error');
		}

		else
		{
			console.log('sucess' + info.response);
			res.send('sucess');
		}
	})
})
app.listen(PORT, () => {
	console.log(`server running on port ${PORT}`);
})
