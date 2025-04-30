const express = require('express');
const pdfRouter =  require('./routes/pdf');

const app =express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use('/api/pdf', pdfRouter);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});