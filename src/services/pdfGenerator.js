const PDFDocument = require('pdfkit');
const { getFakeReportData } = require('./fakeReportContent');

function generatePDF() {
    return new Promise((resolve, reject) => {
        const data = getFakeReportData();
        const doc = new PDFDocument();
        const buffers = [];

        doc.on('data', buffers.push.bind(buffers));
        doc.on('end', () => resolve(Buffer.concat(buffers)));
        doc.on('error', reject);

        doc.fontSize(20).text(data.title, { align: 'center' });
        doc.moveDown();

        doc.fontSize(12).text(`Name: ${data.name}`);
        doc.text(`Email: ${data.email}`);
        doc.text(`Address: ${data.address}`);
        doc.text(`Company: ${data.company}`);
        doc.moveDown();

        doc.fontSize(12).text(`Biography:`, { underline: true });
        doc.fontSize(10).text(data.bio);
        doc.moveDown();

        doc.fontSize(10).text(`${data.createdAt}`, { align: 'right' });

        doc.end();
    });
}

module.exports = { generatePDF };
