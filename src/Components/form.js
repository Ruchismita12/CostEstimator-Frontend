




import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import formImage from '../photos/form.png';
import formStyles from '../design/form.css';

const MyForm = ({ responses }) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    company: '',
    website: '',
  });

  const [componentResponses, setComponentResponses] = useState(responses || []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submitted');

    try {
      const response = await axios.post('http://localhost:3000/api/saveUserData', {
        ...formData,
        responses: componentResponses || [],
      });

      if (response.status === 200) {
        console.log('Data successfully saved in MongoDB Atlas');

        // Update the componentResponses state
        setComponentResponses(response.data.responses);
        //console.log(response.data.responses);

        setFormData({
          name: '',
          email: '',
          phoneNumber: '',
          company: '',
          website: '',
        });

        // Redirect to RoughEstimate after successful submission
        navigate('/RoughEstimate');
      } else {
        console.error('Failed to save data');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="form-wrapper">
      <div className="form-image">
        <img src={formImage} alt="Form" />
      </div>
      <div className="form-content">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleInputName" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputName"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPhoneNumber" className="form-label">
              Phone Number
            </label>
            <input
              type="tel"
              className="form-control"
              id="exampleInputPhoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputCompany" className="form-label">
              Company
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputCompany"
              name="company"
              value={formData.company}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputWebsite" className="form-label">
              Website
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputWebsite"
              name="website"
              value={formData.website}
              onChange={handleChange}
            />
          </div>

          <div className="form-buttons">
            <button className="btn btn-primary" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MyForm;
