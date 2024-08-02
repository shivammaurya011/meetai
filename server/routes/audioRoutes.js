// server/routes/audioRoutes.js

const express = require('express');
const router = express.Router();
const { transcribeAudio } = require('../controllers/audioController');

router.post('/', transcribeAudio);

module.exports = router;
