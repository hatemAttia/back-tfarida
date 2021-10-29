import mongoose from "mongoose";
const Schema = mongoose.Schema;

const tourSchema = new Schema(
	{
		title: {
			type: String,
		},
		amount: {
			type: String,
		},

		description: {
			type: String,
		},
		rate: {
			type: Number,
		},
		datestart: {
			type: Date,
		},
		dateend: {
			type: Date,
		},
		image: {
			type: String,
		},
		vues: [
			{
				type: Schema.Types.ObjectId,
				ref: "user",
			},
		]
	},
	{ timestamps: true }
);

const TourModel = mongoose.model("tour", tourSchema);

module.exports = TourModel;
