import React, { useState } from "react";

const TestimonialForm = ({ onAddTestimonial }) => {
  const [form, setForm] = useState({
    name: "",
    country: "",
    rating: 5,
    text: "",
    image: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Kirim ke backend (API)
    await fetch("https://your-api-url.com/testimonials", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    onAddTestimonial(form); // update tampilan tanpa reload
    setForm({ name: "", country: "", rating: 5, text: "", image: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-6 rounded-xl shadow-lg">
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={form.name}
        onChange={handleChange}
        className="w-full mb-3 p-2 border rounded"
        required
      />
      <input
        type="text"
        name="country"
        placeholder="Country"
        value={form.country}
        onChange={handleChange}
        className="w-full mb-3 p-2 border rounded"
      />
      <textarea
        name="text"
        placeholder="Your Testimonial"
        value={form.text}
        onChange={handleChange}
        className="w-full mb-3 p-2 border rounded"
        required
      ></textarea>
      <button type="submit" className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600">
        Submit Testimonial
      </button>
    </form>
  );
};

export default TestimonialForm;
