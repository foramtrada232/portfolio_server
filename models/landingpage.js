/** Landing Pgae Mongo DB model	*/

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const landingPageSchema = new Schema({
	images: { type: Array, default: []  },
	hashtag: { type: Array,default: [] }
}, {timestamps: true});

module.exports = mongoose.model("landingpage", landingPageSchema);
