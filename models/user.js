import mongoose from "mongoose";
const Schema = mongoose.Schema;

const userSchema = new Schema(
	{
		name: {
			type: String,
		},
		adresse: {
			type: String,
		},

		password: {
			type: String,
		},
		num: {
			type: number,
		},
		email: {
			type: String,
		},
		hotels: [
			{
				type: Schema.Types.ObjectId,
				ref: "hotel",
			},
		],
		tours: [
			{
				type: Schema.Types.ObjectId,
				ref: "tour",
			},
		]
	},
	{ timestamps: true }
);

const UserModel = mongoose.model("user", userSchema);

module.exports = UserModel;
