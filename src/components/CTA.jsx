import React from 'react';

const CTA = ({ text, onClick }) => {
    return (
        <button
            className="bg-transparent border-1 border-current rounded-4xl px-5 py-2 cursor-pointer transition-all duration-300 ease-in-out text-inherit font-bold hover:bg-gray-100"
            onClick={onClick}
        >
            {text}
        </button>
    );
};

export default CTA;