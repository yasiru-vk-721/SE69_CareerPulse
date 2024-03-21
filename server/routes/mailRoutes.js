const express = require('express');
const router = express.Router();
const cors = require('cors');
const { sendEmail } = require('../controllers/MailController.js')

router.use(
    cors({
    credentials: true,
    origin: 'http://localhost:5173'
}));
router.get("/send-mail", (req, res) => {
    sendEmail(req.query)
    .then((response) => response.send(response.message))
    .catch((error) => res.status(500).send(error.message));
});

module.exports = router;