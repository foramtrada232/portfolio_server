/** Brocuher Mongo DB model	*/

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const brochureSchema = new Schema({
	images: { type: Array, default: []  },
	hashtag: { type: Array,default: [] },
	title: {type: String,default:''}
}, {timestamps: true});

module.exports = mongoose.model("brochure", brochureSchema);
