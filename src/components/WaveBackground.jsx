'use client';

import { useMemo } from 'react';

const WaveBackground = () => {
  const lines = useMemo(() => {
    const lineCount = 50;
    const lineSpacing = 10;
    const width = 1000;
    const height = 800;
    const pointsPerLine = 150;
    const waveAmplitude = 60;
    const creaseCount = 3;
    const baseFrequency = 2;
    const amplitude = 20;
    const yOffset = height / 2;

    const paths = [];

    for (let i = 0; i < lineCount; i++) {
      const baseY = i * lineSpacing;

      const linePhase = (i / lineCount) * Math.PI * 2; // Unique phase shift per line
      const pathPoints = [];

      for (let j = 0; j <= pointsPerLine; j++) {
        const x = (j / pointsPerLine) * width;

        // Phase-shifted modulation for 3 flowing creases
        const creaseModulation =
          Math.sin((x / width) * Math.PI * creaseCount - 1.5 + linePhase) +
          1.5 * Math.cos((x / width) * Math.PI * creaseCount + linePhase) +
          2.7 * Math.sin((x / 150) + i * 0.2);

        const y = baseY + waveAmplitude * creaseModulation;
        pathPoints.push(`${x},${y}`);
      }

      const isBlurred = i > 5 && i < 35;

      paths.push(
        <path
          key={i}
          d={`M${pathPoints.join(' L')}`}
          stroke="#3f78e0"
          strokeWidth="1"
          fill="none"
          opacity={0.25 + (i / lineCount) * 0.5}
          style={{
            filter: isBlurred ? 'blur(1.8px)' : 'none',
          }}
        />
      );
    }

    return paths;
  }, []);

  return (
    <div style={{
      position: 'absolute',
      width: '100%',
      height: '100%',
      top: 0,
      left: 0,
      zIndex: -1,
      overflow: 'hidden',
    }}>
      <svg viewBox="0 0 1000 800" preserveAspectRatio="none" width="100%" height="100%">
        {lines}
      </svg>
    </div>
  );
};

export default WaveBackground;
