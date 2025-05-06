'use client';
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
const ScrollingText = ({ 
  hollowColor = "white",
  filledColor = "white",
  text,
  className = ''
}) => {
const words = ["ADOPT", "NURTURE", "DELIVER"];
// If text prop is provided, split it into words, otherwise use default words
const textWords = text ? text.split('•').map(word => word.trim()) : words;
const duplicatedWords = [...textWords, ...textWords];
useEffect(() => {
    // Ensure the component is mounted
    if (typeof window !== 'undefined') {
        // Force a re-render to properly initialize the animation
        const forceRerender = () => {
            const content = document.querySelector('.scroll-content');
            if (content) {
                content.style.animation = 'none';
                content.offsetHeight; // Trigger reflow
                content.style.animation = null;
            }
        };
        forceRerender();
    }
}, [textWords]);
return (
    <div className={`container ${className}`}>
        <div className="scroll-content">
            {duplicatedWords.map((word, index) => (
                <span key={index} className="word-container">
                    <span
                        className="word"
                        style={index % 2 === 0 ? { 
                            WebkitTextStroke: `1px ${hollowColor}`,
                            color: 'transparent'
                        } : { 
                            color: filledColor,
                            fontWeight: '800'
                        }}
                    >
                        {word}
                    </span>
                    {index < duplicatedWords.length - 1 && (
                        <span 
                            className="bullet" 
                            style={{ color: filledColor }}
                        >
                            &nbsp;•&nbsp;
                        </span>
                    )}
                </span>
            ))}
        </div>

        <style jsx>{`
            .container {
                overflow: hidden;
                white-space: nowrap;
                width: 100%;
            }

            .scroll-content {
                display: inline-block;
                animation: scroll 20s linear infinite;
            }

            .word-container {
                display: inline-flex;
                align-items: center;
            }

            .word {
                font-size: 2rem;
                font-weight: 700;
                margin: 0 0.5rem;
                transition: all 0.3s ease;
            }

            .bullet {
                font-size: 1.5rem;
                font-weight: 800;
                margin: 0 0.5rem;
            }

            @keyframes scroll {
                0% {
                    transform: translateX(0);
                }
                100% {
                    transform: translateX(-50%);
                }
            }
        `}</style>
    </div>
);
};

export default ScrollingText;