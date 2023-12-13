

/*

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSpring, animated } from "react-spring";
import Stepper from "react-stepper-horizontal";
import optionValues from "../Values/optionValues.json";
import styles1 from "../design/styles1.css"; // Import your CSS file

const Singlepage = ({ step, activeStep, handleNextStep, storeResponses }) => {
  const [selectedQuestions, setSelectedQuestions] = useState([0]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const questions = optionValues.questionslist;

  useEffect(() => {
    if (activeStep === step) {
      setSelectedQuestions([step]);
    }
  }, [activeStep, step]);

  const [animationProps, setAnimationProps] = useSpring(() => ({
    opacity: 1,
    transform: "translateY(0)",
  }));

  useEffect(() => {
    setAnimationProps({
      opacity: 0,
      transform: "translateY(400px)",
      onRest: () => {
        setAnimationProps({
          opacity: 1,
          transform: "translateY(0)",
        });
      },
    });
  }, [setAnimationProps]);

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setAnimationProps({
        opacity: 0,
        transform: "translateY(400px)",
        onRest: () => {
          setCurrentQuestion((prev) => prev + 1);
          setAnimationProps({
            opacity: 1,
            transform: "translateY(0)",
          });
        },
      });
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion((prev) => prev - 1);
    }
  };

  const handleOptionChange = (optionIndex) => {
    const updatedQuestions = [...questions];
    updatedQuestions[currentQuestion].option[optionIndex].selected = !updatedQuestions[currentQuestion].option[optionIndex].selected;
    storeResponses(updatedQuestions);
  };

  const handleFinish = () => {
    handleNextStep();
    const newResponses = {
      questions: [],
    };

    questions.forEach((question, index) => {
      const selectedOptions = question.option.filter((option) => option.selected);
      newResponses.questions.push({
        id: question.id,
        key: question.key,
        question: question.question,
        options: selectedOptions,
      });
    });

    storeResponses(newResponses);
  };

  const isLastQuestion = currentQuestion === questions.length - 1;

  return (
    <div className="singlepage-container">
      <div className="stepper-container">
        <Stepper
          steps={questions.map((_, index) => ({ title: `Step ${index + 1}` }))}
          activeStep={currentQuestion}
        />
        <p>Step {currentQuestion + 1} of {questions.length}</p>
      </div>
      <animated.div
        style={{
          ...animationProps,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "20px", // Add some spacing between question and options
        }}
      >
        <div className="question-container">
          <h1 className="question-title">{questions[currentQuestion].question}</h1>
        </div>
        <ul className="options-list" style={{ paddingLeft: 0 }}>
          {questions[currentQuestion].option.map((option, optionIndex) => (
            <li key={optionIndex} className="option-item" style={{ marginTop: "10px" }}>
              <div>
                <input
                  type={questions[currentQuestion].type === "radio" ? "radio" : "checkbox"}
                  name={`question_${currentQuestion}`}
                  id={`option_${currentQuestion}_${optionIndex}`}
                  checked={option.selected}
                  onChange={() => handleOptionChange(optionIndex)}
                />
                <label htmlFor={`option_${currentQuestion}_${optionIndex}`}>
                  {option.name} - {option.value}
                </label>
              </div>
            </li>
          ))}
        </ul>
      </animated.div>
      <div className="button-container">
        {currentQuestion > 0 && (
          <button className="btn btn-secondary" onClick={handlePrevious}>
            Previous
          </button>
        )}
        {isLastQuestion ? (
          <Link to="/MyForm">
            <button className="btn btn-primary" onClick={handleFinish}>
              Finish
            </button>
          </Link>
        ) : (
          <button className="btn btn-primary" type="submit" onClick={handleNext}>
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default Singlepage;


*/



import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSpring, animated } from "react-spring";
import Stepper from "react-stepper-horizontal";
import styles1 from "../design/styles1.css"; // Import your CSS file
import axios from 'axios';

const Singlepage = ({ step, activeStep, handleNextStep, storeResponses }) => {
  const [selectedQuestions, setSelectedQuestions] = useState([0]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [animationProps, setAnimationProps] = useSpring(() => ({
    opacity: 1,
    transform: "translateY(0)",
  }));

  useEffect(() => {
    if (activeStep === step) {
      setSelectedQuestions([step]);
      // Fetch questions from the server when the component mounts
      fetchQuestions();
    }
  }, [activeStep, step]);

  const fetchQuestions = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/questions'); // Replace with your API endpoint
      setQuestions(response.data.questions);
    } catch (error) {
      console.error('Error fetching questions:', error);
    }
  };

  useEffect(() => {
    setAnimationProps({
      opacity: 0,
      transform: "translateY(400px)",
      onRest: () => {
        setAnimationProps({
          opacity: 1,
          transform: "translateY(0)",
        });
      },
    });
  }, [setAnimationProps]);

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setAnimationProps({
        opacity: 0,
        transform: "translateY(400px)",
        onRest: () => {
          setCurrentQuestion((prev) => prev + 1);
          setAnimationProps({
            opacity: 1,
            transform: "translateY(0)",
          });
        },
      });
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion((prev) => prev - 1);
    }
  };

  const handleOptionChange = (optionIndex) => {
    const updatedQuestions = [...questions];
    updatedQuestions[currentQuestion].option[optionIndex].selected = !updatedQuestions[currentQuestion].option[optionIndex].selected;
    storeResponses(updatedQuestions);
  };

  const handleFinish = () => {
    handleNextStep();
    const newResponses = {
      questions: [],
    };

    questions.forEach((question, index) => {
      const selectedOptions = question.option.filter((option) => option.selected);
      newResponses.questions.push({
        id: question.id,
        key: question.key,
        question: question.question,
        options: selectedOptions,
      });
    });

    storeResponses(newResponses);
  };

  const isLastQuestion = currentQuestion === questions.length - 1;
  const currentQuestionData = questions[currentQuestion];

  if (!currentQuestionData) {
    // Loading state or handle when questions are not yet available
    return <div>Loading...</div>;
  }

  return (
    <div className="singlepage-container">
      <div className="stepper-container">
        <Stepper
          steps={questions.map((_, index) => ({ title: `Step ${index + 1}` }))}
          activeStep={currentQuestion}
        />
        <p>Step {currentQuestion + 1} of {questions.length}</p>
      </div>
      <animated.div
        style={{
          ...animationProps,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "20px", // Add some spacing between question and options
        }}
      >
        <div className="question-container">
          <h1 className="question-title">{questions[currentQuestion].question}</h1>
        </div>
        <ul className="options-list" style={{ paddingLeft: 0 }}>
          {questions[currentQuestion].option.map((option, optionIndex) => (
            <li key={optionIndex} className="option-item" style={{ marginTop: "10px" }}>
              <div>
                <input
                  type={questions[currentQuestion].type === "radio" ? "radio" : "checkbox"}
                  name={`question_${currentQuestion}`}
                  id={`option_${currentQuestion}_${optionIndex}`}
                  checked={option.selected}
                  onChange={() => handleOptionChange(optionIndex)}
                />
                <label htmlFor={`option_${currentQuestion}_${optionIndex}`}>
                  {option.name} - {option.value}
                </label>
              </div>
            </li>
          ))}
        </ul>
      </animated.div>
      <div className="button-container">
        {currentQuestion > 0 && (
          <button className="btn btn-secondary" onClick={handlePrevious}>
            Previous
          </button>
        )}
        {isLastQuestion ? (
          <Link to="/MyForm">
            <button className="btn btn-primary" onClick={handleFinish}>
              Finish
            </button>
          </Link>
        ) : (
          <button className="btn btn-primary" type="submit" onClick={handleNext}>
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default Singlepage;
