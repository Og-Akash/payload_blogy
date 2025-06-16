import Input from "@/components/ui/Input";
import { cn } from "@/lib/cn";
import { Loader2, Send } from "lucide-react";
import React from "react";

interface FormProps {
  handleSubmit: (e: React.FormEvent) => Promise<void>;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  formData: { subject: string; email: string; message: string };
  isSubmitting: boolean;
}

const Form = ({ handleSubmit, handleChange, formData, isSubmitting }: FormProps) => {
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
        disabled={isSubmitting}
        type="submit"
        className={cn(
          "group inline-flex cursor-pointer items-center gap-1 bg-white px-4 py-1 font-medium text-gray-900 shadow-sm transition-all duration-200 ease-in-out hover:bg-gray-100 hover:shadow-md",
          isSubmitting && "cursor-not-allowed bg-gray-300",
        )}
      >
        {isSubmitting ? <Loader2 className="animate-spin" /> : <Send />}
        <span>Submit Feedback</span>
      </button>
    </form>
  );
};

export default Form;
