import React, { useState } from 'react';
import "./QuestionForm.css"

export default function QuestionForm({ onGenerateQuestions }) {
  const [subject, setSubject] = useState('');
  const [mcq, setMcq] = useState('');
  const [saq, setSaq] = useState('');
  const [laq, setLaq] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare the data to be sent to the API
    const data = {
      subject,
      mcq,
      saq,
      laq,
    };

    // Call the API
    try {
      const response = await fetch('https://your-api-endpoint.com/generate-questions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const responseData = await response.json();

      // Pass the response data to the parent component (GenerateQuestion)
      onGenerateQuestions(responseData);
    } catch (error) {
      console.error('Error calling API:', error);
    }
  };

  return (
    <div className="question-form-container">
      <h1>Generate Questions Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Subject:</label>
          <input
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Multiple Choice Questions (MCQ):</label>
          <textarea
            value={mcq}
            onChange={(e) => setMcq(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Short Answer Questions (SAQ):</label>
          <textarea
            value={saq}
            onChange={(e) => setSaq(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Long Answer Questions (LAQ):</label>
          <textarea
            value={laq}
            onChange={(e) => setLaq(e.target.value)}
            required
          />
        </div>
        <button type="submit">Generate Questions</button>
      </form>
    </div>
  );
}
