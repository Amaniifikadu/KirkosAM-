import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

function Teaching() {
  const navigate = useNavigate();
   const [lesson, setLesson] = useState({
    title: "",
    content: "",
    subject: ""
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setLesson({ ...lesson, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (!lesson.title || !lesson.content) {
      alert("Please fill all required fields");
      return;
    }

    setLoading(true);

    const response = await fetch("/api/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(lesson)
    });

    const data = await response.json();
    setLoading(false);

    if (response.ok) {
      alert("Lesson posted successfully!");
      navigate("/lessons"); // go to lesson list page
    } else {
      alert(data.error);
    }
  };

  const handleCancel = () => {
    navigate("/"); // go back home
  };

  return (
    <div className="teaching-form">
      <h2>Add Teaching Lesson</h2>

      <input
        type="text"
        name="title"
        placeholder="Lesson Title"
        value={lesson.title}
        onChange={handleChange}
      />

      <input
        type="text"
        name="subject"
        placeholder="Subject (Optional)"
        value={lesson.subject}
        onChange={handleChange}
      />

      <textarea
        name="content"
        placeholder="Write your lesson here..."
        rows="8"
        value={lesson.content}
        onChange={handleChange}
      />

      <div className="buttons">
        <button onClick={handleSubmit} disabled={loading}>
          {loading ? "Posting..." : "Post Lesson"}
        </button>

        <button onClick={handleCancel} className="cancel">
          Cancel
        </button>
      </div>
    </div>
  )
}

export default Teaching
