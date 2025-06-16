import Input from "@/components/ui/Input";
import { Send } from "lucide-react";
import React from "react";

const Form = ({ handleSubmit, handleChange, formData }: any) => {
  return (
    <form onSubmit={handleSubmit} className="w-full max-w-3xl space-y-4">
      <Input
        type="text"
        name="subject"
        placeholder="Subject"
        value={formData.subject}
        onChange={handleChange}
        required
        className="w-full border border-gray-700/60 p-2"
      />
      <textarea
        name="message"
        placeholder="Message"
        value={formData.message}
        onChange={handleChange}
        rows={2}
        required
        className="w-full border border-gray-700/60 p-2"
      />
      <Input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        required
        className="w-full border border-gray-700/60 p-2"
      />
      <button
        type="submit"
        className="group inline-flex items-center gap-1 bg-white px-4 py-1 cursor-pointer font-medium text-gray-900 shadow-sm transition-all duration-200 ease-in-out hover:bg-gray-100 hover:shadow-md"
      >
        <span>Submit Feedback</span>
        <Send />
      </button>
    </form>
  );
};

export default Form;
