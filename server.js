var express = require('express')
var hbs = require('hbs')
var app = express()
var os = require('os')



hbs.registerPartials('views/partial')    // For Use Files 



 app.get('/home', function(req,res){
 	res.send({
 		name: 'AT Programmer',
 		likes : ['Bike','Tatti']
 	})
 })

 app.use(express.static('public')) // For Accesing HTML Files  in URL
 
app.get('/', (req,res) => {
	res.render('home.hbs', {
		pageTitle: 'Home Page',
	 welcomeMessage: 'Welcome To My Website',   // For Accesing HBS File
		currentYear: new Date().getFullYear()
	})
	// res.sendFile(__dirname + '/views/test.html')         For Acessing HTML File
});


 app.get('/about', (req,res) => {
 	res.render('about.hbs', {
 		pageTitle: 'About Page',
 		currentYear : new Date().getFullYear()
 	})
 });

 app.get('/bad', (req,res) => {
 	res.send({
 		errorMessage: 'Unable To Handle Error'
 	})
 })

app.listen(3000, () => {
	console.log('We Are listening At Port 3000')
});