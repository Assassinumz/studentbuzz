var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const ClassSchema = new Schema({
    uni_id: String,
    name: String,
    students: [{type: String, default:[]}],
    faculty: String,
    university: {type: Schema.Types.ObjectId, ref: 'University'}
})

module.exports = mongoose.model('Class', ClassSchema);