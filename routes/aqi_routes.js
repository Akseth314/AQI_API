// routes/aqi.js
const express = require('express');
const router = express.Router();
const { getAllAqi, createAqi, getAqiById, updateAqi, deleteAqi } = require('../controllers/aqi_controllers');

router.get('/', getAllAqi);
router.post('/', createAqi);
router.get('/:id', getAqiById);
router.put('/:id', updateAqi);
router.delete('/:id', deleteAqi);

module.exports = router;
