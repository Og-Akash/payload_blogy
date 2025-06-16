"use client";

import Header from "./_components/Header";
import React, { useState } from "react";
import Form from "./_components/Form";

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    subject: "",
    message: "",
    email: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        alert("Thanks for your feedback!");
        setFormData({ subject: "", message: "", email: "" });
      } else {
        alert("Error submitting feedback.");
      }
    } catch (error) {
      alert("Something Went Wrong!");
    }
  };

  return (
    <div className="mx-auto max-w-3xl space-y-8">
      <Header />
      <Form formData={formData} handleSubmit={handleSubmit} handleChange={handleChange} />
    </div>
  );
};

export default FeedbackForm;
