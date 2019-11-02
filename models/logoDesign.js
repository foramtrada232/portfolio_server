/** Logo Design Mongo DB model	*/

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const landingPageSchema = new Schema({
	images: { type: Array, default: []  },
	hashtag: { type: Array,default: [] },
	title: {type: String,default:''}
}, {timestamps: true});

module.exports = mongoose.model("logoDesign", landingPageSchema);
