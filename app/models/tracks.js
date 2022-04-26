/** @format */

const mongoose = require('mongoose');
const mongooseDelete = require('mongoose-delete');

const trackSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    artist: {
      type: String,
      required: true,
    },
    year: {
      type: Number,
      required: true,
    },
  },
  {
    collection: 'tracks',
    timestamps: true,
    versionKey: false,
  }
);

trackSchema.plugin(mongooseDelete, {
  deletedAt: true,
  overrideMethods: 'all',
});

module.exports = mongoose.model('Track', trackSchema);
