const mongoose = require('mongoose') //mongo database bağlantı yapmamızı shema oluşturmamızı sağlayan kütüphane 
//const url = "mongodb+srv://rest_api:melik7410@cluster0-3bct6.mongodb.net/test?retryWrites=true&w=majority" //mongo connect tarafından bize verilen bağlantı adresleme normalde .env tutulmalı!
//mongodb+srv://<username>:<password>@cluster0.0gfa5.mongodb.net/<dbname>?retryWrites=true&w=majority   

const url = "mongodb+srv://rest_api:melik7410@cluster0-3bct6.mongodb.net/will?retryWrites=true&w=majority" //mongo connect tarafından bize verilen bağlantı adresleme normalde .env tutulmalı!

mongoose.Promise = global.Promise;      
module.exports = mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }); 