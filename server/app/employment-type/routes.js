const express = require('express');
const router = express.Router();
const { getEmploymentTypes } = require('./controllers')

router.get('/api/employment-types', getEmploymentTypes);

module.exports = router;