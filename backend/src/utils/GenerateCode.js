const mongoose = require('mongoose');
const Url = mongoose.model('Url');

async function GenerateCode() {
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < 8; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    let url_encurtada = await Url.find({ url_encurtada: text }).count();
    if(url_encurtada > 0) {
        GenerateCode();
    }
    return text;
}

module.exports = GenerateCode;