// controllers/aqiController.js
const Aqi = require('../models/aqi_models');
const mongoose = require('mongoose');

// Get all AQI data
const getAllAqi = async (req, res) => {
  try {
    const aqiData = await Aqi.find();
    res.status(200).json(aqiData);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create new AQI data
const createAqi = async (req, res) => {
  const aqi = new Aqi({
    city: req.body.city,
    value: req.body.value,
  });

  try {
    const newAqi = await aqi.save();
    res.status(201).json(newAqi);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get AQI data by ID
const getAqiById = async (req, res) => {
    try {
      // Clean up the ID
      const id = req.params.id.trim();
  
      // Validate the ID
      if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ message: 'Invalid AQI ID format' });
      }
  
      const aqi = await Aqi.findById(id);
      if (!aqi) {
        return res.status(404).json({ message: 'AQI data not found' });
      }
  
      res.status(200).json(aqi);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

// Update AQI data
const updateAqi = async (req, res) => {
  try {
    const aqi = await Aqi.findById(req.params.id);
    if (!aqi) {
      return res.status(404).json({ message: 'AQI data not found' });
    }

    aqi.city = req.body.city || aqi.city;
    aqi.value = req.body.value || aqi.value;

    const updatedAqi = await aqi.save();
    res.status(200).json(updatedAqi);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete AQI data
const deleteAqi = async (req, res) => {
  try {
    const aqi = await Aqi.findById(req.params.id);
    if (!aqi) {
      return res.status(404).json({ message: 'AQI data not found' });
    }

    await aqi.deleteOne();
    res.status(200).json({ message: 'AQI data deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllAqi,
  createAqi,
  getAqiById,
  updateAqi,
  deleteAqi,
};
