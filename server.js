const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3000;
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, '/public')));
app.use(express.urlencoded({ extended:true })); 


app.get('^/$|/index(.html)?', (req, res) => {
    console.log('home');
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/about(.html)?', (req, res) => {
    console.log('about');
    res.sendFile(path.join(__dirname, 'views', 'about.html'));
});

app.get('/contact', (req, res) => {
    console.log('contact');
    res.render('contact');
});

app.post('/contact', (req, res) => {
    const { name, email } = req.body;
    console.log(`Name: ${name}, Email: ${email}`);
    res.send('<h1>Thank you for contacting us!</h1>');
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
