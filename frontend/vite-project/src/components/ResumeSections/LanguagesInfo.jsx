import React from 'react';
import Progress from '../Progress.jsx';

const Language = ({ name, progress, accentColor, bgColor }) => {
    return (
        <div className="flex items-center justify-between ">
            <p className="text-[12px] font-semibold text-gray-900">{name}</p>
            {progress > 0 && (
                <Progress
                    progress={(progress / 100) * 5}
                    color={accentColor}
                    bgColor={bgColor}
                />
            )}
        </div>
    );
};

const LanguagesInfo = ({ languages, accentColor, bgColor }) => {
    console.log(languages);
    return (
        <div className="flex flex-col gap-2">
            {languages.map((lang, index) => (
                <Language
                    key={index}
                    name={lang.name}
                    progress={lang.progressLevel}
                    accentColor={accentColor}
                    bgColor={bgColor}
                />
            ))}
        </div>
    );
};

export default LanguagesInfo;
