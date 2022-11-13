var mongoose = require('mongoose');
var Schema = mongoose.Schema;



const PostSchema = new Schema({
    author: {type: Schema.Types.ObjectId},
    authorName: String,
    title: String,
    content: String,
    image: {
        url: {type: String, default: null},
        imageName: {type: String, default: null},
    },
    university: {type: Schema.Types.ObjectId, ref: 'University'},
	universityName: {type:String, default:''},
    category: String,
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('Post', PostSchema);