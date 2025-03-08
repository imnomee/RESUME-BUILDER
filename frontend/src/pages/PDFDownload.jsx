import React from 'react';
import html2pdf from 'html2pdf.js';

const PDFDownload = ({ resumeRef }) => {
    const options = {
        margin: 0, // Set to 0 for exact A4 size
        html2canvas: { scale: 2, useCORS: true }, // Increase quality
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
    };

    const handleDownloadPDF = () => {
        if (!resumeRef.current) return;

        // Clone the resume element to avoid modifying the original
        const clonedElement = resumeRef.current.cloneNode(true);

        // Reset styles to ensure A4 format without scaling issues
        clonedElement.style.transform = 'scale(1)';
        clonedElement.style.width = '210mm'; // A4 width
        clonedElement.style.height = '297mm'; // A4 height
        clonedElement.style.padding = '10mm'; // Adjust for margins

        html2pdf()
            .from(clonedElement)
            .set(options)
            .save('Noman-Resume.pdf')
            .then(() => console.log('✅ PDF Downloaded!'))
            .catch((err) => console.error('❌ Error generating PDF:', err));
    };

    return (
        <div className="text-center mt-4">
            <button
                className="px-6 py-2 rounded-md bg-purple-400 text-white hover:bg-purple-500 transition"
                onClick={handleDownloadPDF}>
                Download PDF
            </button>
        </div>
    );
};

export default PDFDownload;
