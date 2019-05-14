const express = require("express");
const path = require("path");
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();

const publicPath = path.join(__dirname, "..", "public");
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({
    extended: true
  }))
  
  app.use(bodyParser.json())

app.use(express.static(publicPath));

app.get("*", (req, res) => {
    res.sendFile(path.join(publicPath, "index.html"));
});

app.post("/send", (req, res) => {
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'dl.design.mail.service@gmail.com',
            // pass: 'Pass12345XX'
            pass: 'Pas2414214s12345XX' // mock invalid password to generate errors
        }
    });
    const mailOptions = {
        from: 'dl.design.mail.service@gmail.com', 
        to: 'emilitwiniec@gmail.com', 
        subject: 'DL DESIGN -- ZAPYTANIE', 
        html:  `
                <div>
                    <p>Imię: ${req.body.name}</p>
                    <p>Mail: ${req.body.email}</p>
                    <p>Telefon: ${req.body.phone_number}</p>
                    <p>Kategorie: ${req.body.category}</p>
                </div>`
    };

    transporter.sendMail(mailOptions, function (err, info) {
        if(err){
            console.log(err);
            res.send(err);
        }
        else {
            console.log(info);
            
            res.send(info);
        }
     });

    console.log(req.body);

});

app.listen(port, () => {
    console.log(`server is running on port ${port}.`);
});
