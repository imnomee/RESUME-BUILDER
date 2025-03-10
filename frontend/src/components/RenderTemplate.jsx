import React from 'react';
import Template1 from '../templates/Template1';
import Template2 from '../templates/Template2';

const RenderTemplate = ({ selectedTemplate, userData }) => {
    switch (selectedTemplate) {
        case 'template1':
            return <Template1 userData={userData} />;
        case 'template2':
            return <Template2 userData={userData} />;
        default:
            return <Template1 userData={userData} />;
    }
};

export default RenderTemplate;
