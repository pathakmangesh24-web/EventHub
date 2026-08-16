import { useState } from 'react';
import './EventForm.css';

export default function EventForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    comments: '',
    specialRequests: '',
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMessage('');
    setErrorMessage('');
    setErrors({});

    try {
      const response = await fetch('http://localhost:3000/api/event-forms', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        if (data.errors && Array.isArray(data.errors)) {
          const errorMap = {};
          data.errors.forEach((error) => {
            errorMap[error.field] = error.message;
          });
          setErrors(errorMap);
        }
        setErrorMessage(data.message || 'Failed to submit form');
        return;
      }

      setSuccessMessage('✅ Event form submitted successfully!');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        comments: '',
        specialRequests: '',
      });

      // Clear success message after 5 seconds
      setTimeout(() => setSuccessMessage(''), 5000);
    } catch (error) {
      console.error('Error:', error);
      setErrorMessage('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="event-form-container">
      <div className="event-form-wrapper">
        <h1>Event Registration Form</h1>
        <p className="form-description">Fill in your details to register for our event</p>

        {successMessage && <div className="alert alert-success">{successMessage}</div>}
        {errorMessage && <div className="alert alert-error">{errorMessage}</div>}

        <form onSubmit={handleSubmit} className="event-form">
          {/* First Name */}
          <div className="form-group">
            <label htmlFor="firstName">
              First Name <span className="required">*</span>
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="Enter your first name"
              disabled={loading}
              className={errors.firstName ? 'input-error' : ''}
            />
            {errors.firstName && <span className="error-text">{errors.firstName}</span>}
          </div>

          {/* Last Name */}
          <div className="form-group">
            <label htmlFor="lastName">
              Last Name <span className="required">*</span>
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Enter your last name"
              disabled={loading}
              className={errors.lastName ? 'input-error' : ''}
            />
            {errors.lastName && <span className="error-text">{errors.lastName}</span>}
          </div>

          {/* Email */}
          <div className="form-group">
            <label htmlFor="email">
              Email <span className="required">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email address"
              disabled={loading}
              className={errors.email ? 'input-error' : ''}
            />
            {errors.email && <span className="error-text">{errors.email}</span>}
          </div>

          {/* Comments */}
          <div className="form-group">
            <label htmlFor="comments">Comments and/or Questions</label>
            <textarea
              id="comments"
              name="comments"
              value={formData.comments}
              onChange={handleChange}
              placeholder="Enter any comments or questions (optional)"
              rows="4"
              disabled={loading}
              className={errors.comments ? 'input-error' : ''}
            />
            {errors.comments && <span className="error-text">{errors.comments}</span>}
            <span className="char-count">{formData.comments.length}/500</span>
          </div>

          {/* Special Requests */}
          <div className="form-group">
            <label htmlFor="specialRequests">Any special requests?</label>
            <textarea
              id="specialRequests"
              name="specialRequests"
              value={formData.specialRequests}
              onChange={handleChange}
              placeholder="Enter any special requests (optional)"
              rows="4"
              disabled={loading}
              className={errors.specialRequests ? 'input-error' : ''}
            />
            {errors.specialRequests && <span className="error-text">{errors.specialRequests}</span>}
            <span className="char-count">{formData.specialRequests.length}/500</span>
          </div>

          {/* Submit Button */}
          <button type="submit" className="submit-button" disabled={loading}>
            {loading ? 'Submitting...' : 'Submit Registration'}
          </button>
        </form>

        <p className="form-note">
          <span className="required">*</span> Indicates required field
        </p>
      </div>
    </div>
  );
}
