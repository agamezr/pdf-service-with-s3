const express =  require('express');
const { generatePDF } = require('../services/pdfGenerator');
const { uploadPDFtoS3 } = require('../services/uploadToS3');
const router = express.Router();

router.post('/', async(req, res) => {
    try{

        const pdfBuffer = await generatePDF();
        const s3Url = await uploadPDFtoS3(pdfBuffer);
        res.json({ url: s3Url });

    } catch (error) {
        console.log('Error generating PDF:', process.env.AWS_ACCESS_KEY_ID);
        console.error('Error generating PDF:', error);
        res.status(500).json({ error: 'Failed to generate PDF' });
    }
});

module.exports = router;