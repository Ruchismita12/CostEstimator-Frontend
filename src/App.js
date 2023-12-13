
/*
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import FirstpageContent from "./Components/FirstpageContent";
import Singlepage from "./Components/Singlepage";
import RoughEstimate from "./Components/RoughEstimate";
import MyForm from "./Components/form";
import Stepper from "react-stepper-horizontal";
import "./App.css";
//import optionValues from "./Values/optionValues.json";

const App = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [responses, setResponses] = useState({});

  const storeResponses = (newResponses) => {
    console.log("Storing responses:", newResponses);
    setResponses(newResponses);
  };

  const handleNextStep = () => {
    if (activeStep < optionValues.questionslist.length - 1) {
      setActiveStep(activeStep + 1);
    }
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<FirstpageContent />} />
        {optionValues.questionslist.map((question, index) => (
          <Route
            key={index}
            path={`Step${index + 1}`}
            element={
              <Singlepage
                step={index}
                activeStep={activeStep}
                handleNextStep={handleNextStep}
                storeResponses={storeResponses}
              />
            }
          />
        ))}
        <Route path="/MyForm" element={<MyForm responses={responses}/>} /> 
        <Route path="/RoughEstimate" element={<RoughEstimate responses={responses} />} />
      </Routes>
    </Router>
  );
};

export default App;
*/


import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import FirstpageContent from "./Components/FirstpageContent";
import Singlepage from "./Components/Singlepage";
import RoughEstimate from "./Components/RoughEstimate";
import MyForm from "./Components/form";
import Stepper from "react-stepper-horizontal";
import "./App.css";
import axios from 'axios';

const App = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [responses, setResponses] = useState({});
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    // Fetch questions from the server when the component mounts
    fetchQuestions();
  }, []);

  const fetchQuestions = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/questions'); // Replace with your API endpoint
      setQuestions(response.data.questions);
    } catch (error) {
      console.error('Error fetching questions:', error);
    }
  };

  const storeResponses = (newResponses) => {
    console.log("Storing responses:", newResponses);
    setResponses(newResponses);
  };

  const handleNextStep = () => {
    if (activeStep < questions.length - 1) {
      setActiveStep(activeStep + 1);
    }
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<FirstpageContent />} />
        {questions.map((question, index) => (
          <Route
            key={index}
            path={`Step${index + 1}`}
            element={
              <Singlepage
                step={index}
                activeStep={activeStep}
                handleNextStep={handleNextStep}
                storeResponses={storeResponses}
                questions={questions} // Pass questions to Singlepage component
              />
            }
          />
        ))}
        <Route path="/MyForm" element={<MyForm responses={responses} />} />
        <Route path="/RoughEstimate" element={<RoughEstimate responses={responses} />} />
      </Routes>
    </Router>
  );
};

export default App;
