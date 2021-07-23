const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const urlSchema = new mongoose.Schema({
        original_url:{
            type:String,
            trim:true,
            required:'É necessário uma Url'
        },
        url_encurtada:{
            type:String,
            trim:true,
            required: true,
        },
        count_clicks: {
            type:Number,
            required: true,
            default:0,
        },
        active: {
            type:Number,
            required: true,
            default:0,
        }
    },
    {
        timestamps: {
            createdAt: 'created_at'
        }
    }
);

module.exports = mongoose.model('Url', urlSchema);
