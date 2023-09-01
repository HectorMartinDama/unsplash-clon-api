const mongoose= require('mongoose');    
const Schema= mongoose.Schema;

const categoriesSchema = Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    img: {
        type: String,
        required: true
    },
    public_id: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});


module.exports= mongoose.model('category', categoriesSchema);