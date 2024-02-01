const express = require('express');
const router = express.Router();
const { sendVerificationMail, verifyCode, signUp, logIn } = require('./controllers')
const { validateSignUp } = require('./middlewares')
const { upload } = require('./utils');

router.post('/api/auth/sendmail', sendVerificationMail);
router.post('/api/auth/verifycode', verifyCode);

router.post('/api/auth/signup', upload.single('company_logo'), validateSignUp, signUp);
router.post('/api/auth/login', logIn);

module.exports = router;