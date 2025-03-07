import React from 'react';
import html2pdf from 'html2pdf.js';

const PDFDownload = ({ resumeRef }) => {
    const options = {
        margin: [10, 10, 10, 10], // Top, Right, Bottom, Left
        html2canvas: { scale: 2 }, // Increase quality
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
        pagebreak: { mode: ['avoid-all', 'css', 'legacy'] },
    };

    const handleDownloadPDF = () => {
        html2pdf()
            .from(resumeRef.current)
            .set(options)
            .save(`Noman-Resume.pdf`)
            .then(() => console.log('✅ PDF Downloaded!'))
            .catch((err) => console.error('❌ Error generating PDF:', err));
    };
    return (
        <div>
            <button
                className=" px-6 py-2 rounded-md mb-4 bg-purple-400 text-white hover:bg-purple-500"
                onClick={handleDownloadPDF}>
                Download PDF
            </button>
        </div>
    );
};

export default PDFDownload;
