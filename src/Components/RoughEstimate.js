
/*

import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import EstimateStyles from '../design/Estimate.css';

const RoughEstimate = ({ responses }) => {
  const [animationProps, setAnimationProps] = useSpring(() => ({
    opacity: 0,
    transform: 'translateX(-100%)',
  }));

  useEffect(() => {
    setAnimationProps({
      opacity: 1,
      transform: 'translateX(0)',
      config: { duration: 500 }, // Adjust duration as needed
    });
  }, []); // Empty dependency array to run the effect once

  if (!responses || !responses.questions || !Array.isArray(responses.questions)) {
    return <p>No responses available</p>;
  }

  const totalCost = responses.questions.reduce((total, question) => {
    const questionCost = (question.options || []).filter((option) => option.selected).reduce((cost, option) => cost + (option.value || 0), 0);
    return total + questionCost;
  }, 0);

  return (
    <div className="rough-estimate-page">
      <animated.div style={animationProps} className="left-half">
        <h1>Summary of your details:</h1>

        {responses.questions.map((question, index) => (
          <div key={index}>
            <h4>{question.question}</h4>
            <ul>
              {(question.options || []).map((option, optionIndex) => (
                <div key={optionIndex}>
                  {option.selected && (
                    <div>
                      <label  style={{ color: 'lightblue' }}>{option.name}</label>
                    </div>
                  )}
                </div>
              ))}
            </ul>
          </div>
        ))}
      </animated.div>

      
      <div className="right-half">
        <div className="card bg-secondary text-white mb-3">
          <div className="card-body">
            <h1>Rough Estimate of my MVP</h1>
            <h2 style={{ color: 'lightblue' }}>Total Cost: {totalCost}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoughEstimate;

*/





import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import EstimateStyles from '../design/Estimate.css';

const RoughEstimate = ({ responses }) => {
  const [animationProps, setAnimationProps] = useSpring(() => ({
    opacity: 0,
    transform: 'translateX(-100%)',
  }));

  useEffect(() => {
    setAnimationProps({
      opacity: 1,
      transform: 'translateX(0)',
      config: { duration: 500 }, // Adjust duration as needed
    });
  }, []); // Empty dependency array to run the effect once

  if (!responses || !responses.questions || !Array.isArray(responses.questions)) {
    return <p>No responses available</p>;
  }

  const totalCost = responses.questions.reduce((total, question) => {
    const questionCost = (question.options || []).filter((option) => option.selected).reduce((cost, option) => cost + (option.value || 0), 0);
    return total + questionCost;
  }, 0);

  return (
    <div className="rough-estimate-page">
      <animated.div style={animationProps} className="left-half">
        <h1>Summary of your details:</h1>

        {responses.questions.map((question, index) => (
          <div key={index}>
            <h4>{question.question}</h4>
            <ul>
              {(question.options || []).map((option, optionIndex) => (
                <div key={optionIndex}>
                  {option.selected && (
                    <div>
                      <label  style={{ color: 'lightblue' }}>{option.name}</label>
                    </div>
                  )}
                </div>
              ))}
            </ul>
          </div>
        ))}
      </animated.div>

      
      <div className="right-half">
        <div className="card bg-secondary text-white mb-3">
          <div className="card-body">
            <h1>Rough Estimate of my MVP</h1>
            <h2 style={{ color: 'lightblue' }}>Total Cost: {totalCost}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoughEstimate;

