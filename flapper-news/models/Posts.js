var mongoose = require('mongoose');

var PostSchema = new mongoose.Schema({

	title: String,
	link: string,
	upvotes: {type: Number, default: 0},
	comments: [{type: mongoose.Schema.types.ObjectId, ref: 'Comment'}]

});

mongoose.model('Post', PostSchema);