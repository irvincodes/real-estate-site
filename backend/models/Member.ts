import mongoose from "mongoose";
const { Schema } = mongoose;

const memberSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    accountType: { type: String, default: "Member" },
    bookmarkedLaunches: {
      type: mongoose.Types.ObjectId,
      ref: "NewLaunch",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Member", memberSchema);
