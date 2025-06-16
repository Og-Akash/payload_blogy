"use client";

import Header from "./_components/Header";
import React, { useState } from "react";
import Form from "./_components/Form";
import { toast } from "sonner";

const FeedbackForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
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
      setIsSubmitting(true);
      const res = await fetch("/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        toast.success("Thanks for your feedback!");
        setFormData({ subject: "", message: "", email: "" });
      } else {
        toast.error("Error submitting feedback.");
      }
    } catch (error) {
      alert("Something Went Wrong!");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="mx-auto max-w-3xl space-y-8">
      <Header />
      <Form
        isSubmitting={isSubmitting}
        formData={formData}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
      />
    </div>
  );
};

export default FeedbackForm;
