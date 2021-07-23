const mongoose = require('mongoose');
const Url = mongoose.model('Url');
const GenerateCode = require('../utils/GenerateCode');

module.exports = {
    async index(req, res) {
        const urls = await Url.find({ active: 0 }).sort({ count_clicks: -1 }).limit(5);
        return res.json(urls);
    },
    async store(req, res) {
        
        const { original_url } = req.body;
        const url_encurtada = await GenerateCode();
        const url = new Url({
            original_url,
            url_encurtada
        })
        await url.save();
        res.json({url_encurtada});
    },
    async edit(req, res) {
        const { url_encurtada } = req.body;
        const old_url = await Url.findOne({url_encurtada});
        const count_clicks = old_url.count_clicks + 1;
        const url = await Url.findOneAndUpdate(
            { url_encurtada },
            {count_clicks},
            {
                new:true,
                runValidators:false,
            }            
        );
        const original_url = url.original_url;
        res.json({ original_url })

    },
    async delete(req, res) {
        const { url_encurtada } = req.body;
        const url = await Url.findOneAndUpdate(
            { url_encurtada },
            {active: 1},
            {
                new:true,
                runValidators:false,
            }            
        );

        res.json();
    },
    async success(req, res){
        let date_ob = new Date();
        let date = ("0" + date_ob.getDate()).slice(-2);
        let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
        let year = date_ob.getFullYear();
        let text = year + "-" + month + "-" + date;
        const urls = await Url.find({ active: 0, created_at: {
            $gte: text
        } })
        .sort({ count_clicks: -1 });
        res.json(urls);
    },

}