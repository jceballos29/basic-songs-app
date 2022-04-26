/** @format */

const TracksModel = require('../models/tracks');

const getAllTracks = async (req, res) => {
  try {
    const tracks = await TracksModel.find();
    res.status(200).json({
      data: tracks,
      message: 'All tracks found successfully',
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getTrackById = async (req, res) => {
  try {
    const { id } = req.params;
    const track = await TracksModel.findById(id);
    if (!track) {
      res.status(404).json({
        message: 'Track not found',
      });
    }
    res.status(200).json({
      data: track,
      message: 'Track found successfully',
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const createTrack = async (req, res) => {
  try {
    const { title, artist, year } = req.body;
    const track = await TracksModel.create({
      title,
      artist,
      year,
    });
    res.status(201).json({
      data: track,
      message: 'Track created successfully',
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const updateTrack = async (req, res) => {
  try {
    const { id } = req.params;
    const { body } = req;
    const track = await TracksModel.findByIdAndUpdate(id, body, {
      new: true,
    });
    if (!track) {
      res.status(404).json({
        message: 'Track not found',
      });
    }
    res.status(200).json({
      data: track,
      message: 'Track updated successfully',
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const deleteTrack = async (req, res) => {
  try {
    const { id } = req.params;
    const track = await TracksModel.deleteById(id);
    if (!track) {
      res.status(404).json({
        message: 'Track not found',
      });
    }
    res.status(200).json({
      message: 'Track deleted successfully',
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  getAllTracks,
  getTrackById,
  createTrack,
  updateTrack,
  deleteTrack,
};
