import React, { useEffect, useState } from 'react';

const RotatingText = () => {
  const words = ["Frontend Developer", "Web Designer", "Graphic Designer"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [letterClasses, setLetterClasses] = useState({});

  useEffect(() => {
    const maxWordIndex = words.length - 1;

    const rotateText = () => {
      const currentWord = words[currentWordIndex];
      const nextWordIndex = currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
      const nextWord = words[nextWordIndex];
      const newClasses = {};

      // Set classes for the current word's letters to animate out
      Array.from(currentWord).forEach((letter, i) => {
        newClasses[`${currentWordIndex}-${i}`] = 'letter out';
      });

      // Set classes for the next word's letters to animate in
      Array.from(nextWord).forEach((letter, i) => {
        newClasses[`${nextWordIndex}-${i}`] = 'letter behind';
      });

      setLetterClasses({ ...newClasses });

      // After a delay, transition the "behind" letters to "in" and "out" letters to disappear
      setTimeout(() => {
        const updatedClasses = { ...newClasses };

        // Transition the current word's letters to 'outFade' (fade out)
        Array.from(currentWord).forEach((letter, i) => {
          updatedClasses[`${currentWordIndex}-${i}`] = 'letter outFade';
        });

        // Transition the next word's letters to 'in' (fade in)
        Array.from(nextWord).forEach((letter, i) => {
          updatedClasses[`${nextWordIndex}-${i}`] = 'letter in';
        });

        setLetterClasses({ ...updatedClasses });
      }, 340);

      // Update the word index after the rotation
      setCurrentWordIndex(nextWordIndex);
    };

    // Initialize rotation every 4 seconds
    const intervalId = setInterval(rotateText, 4000);

    // Clean up interval on unmount
    return () => clearInterval(intervalId);
  }, [currentWordIndex, words]);

  return (
    <div className="word-div" style={{ position: 'relative', height: '100px', overflow: 'hidden' }}>
      {words.map((word, wordIndex) => (
        <div
          key={wordIndex}
          className="word"
          style={{
            position: 'absolute',
            top: 0,
            opacity: wordIndex === currentWordIndex ? 1 : 0,
            transition: 'opacity 1s ease',
          }}
        >
          {Array.from(word).map((letter, index) => (
            <span
              key={index}
              className={`letter ${letterClasses[`${wordIndex}-${index}`] || ''}`}
              style={{
                display: 'inline-block',
                transition: 'opacity 0.5s, transform 0.5s',
              }}
            >
              {letter}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
};

export default RotatingText;
