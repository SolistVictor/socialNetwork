const express = require('express');
const config = require('config');
const mongoose = require('mongoose');

const app = express();

app.use('/api/auth', require('./routes/auth.routes.js'));

const PORT = config.get('port') || 5000; 

async function start() {
    try {
        await mongoose.connect(config.get('mongoUrl'), {
            // useNewUrlParser: true,
            // useUnifiedTopology: true,
            // useCreateIndex: true
        })
        app.listen(PORT, () => console.log('appp works on port 5000'));
    }
    catch (e) {
        console.log('server error', e.message);
        process.exit(1);
    }
}

start();




