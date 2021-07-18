const express = require('express');
const app = express();
const nodemailer = require('nodemailer');
const dotEnv = require('dotenv').config();
const PORT = process.env.PORT || 5000;
const user = process.env.USER_mail;
const pass = process.env.PASS;


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
			user:user,
			pass: pass
		}
	})

	const mailOptions = {
		from: req.body.email,
		to: 'engfabionavarro@gmail.com',
		text: `
		Nome do interessado: ${req.body.nome},
		Sobrenome: ${req.body.sobrenome},
		Telefone: ${req.body.telefone},
		Email: ${req.body.email}
		`,
		subject: 'Cotação',
		sender: req.body.email
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
