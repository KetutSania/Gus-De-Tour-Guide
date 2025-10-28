import React, { useEffect, useState } from "react";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    country: "",
    rating: 5,
    message: "",
  });

  // Ambil data dari backend
  useEffect(() => {
    fetch("http://localhost:5000/testimonials")
      .then((res) => res.json())
      .then((data) => setTestimonials(data))
      .catch((err) => console.error("Gagal mengambil data:", err));
  }, []);

  // Handle input form
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Kirim testimonial baru ke backend
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.country || !formData.message) {
      alert("Semua kolom wajib diisi!");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/testimonials", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        alert("Testimonial berhasil dikirim!");
        setFormData({ name: "", country: "", rating: 5, message: "" });

        // Refresh data dari backend
        const updated = await fetch("http://localhost:5000/testimonials");
        const data = await updated.json();
        setTestimonials(data);
      }
    } catch (err) {
      console.error("Error kirim testimonial:", err);
    }
  };

  return (
    <section className="py-16 bg-gradient-to-b from-orange-50 to-white" id="testimonials">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-orange-600 mb-12">
          Testimonials
        </h2>

        {/* Form Tambah Testimonial */}
        <div className="max-w-lg mx-auto mb-16 p-6 bg-white rounded-2xl shadow-md border border-orange-100">
          <h3 className="text-2xl font-semibold text-center mb-4 text-orange-500">
            Tambah Testimonial
          </h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Nama"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            <input
              type="text"
              name="country"
              placeholder="Asal Negara"
              value={formData.country}
              onChange={handleChange}
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            <select
              name="rating"
              value={formData.rating}
              onChange={handleChange}
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
            >
              {[5, 4, 3, 2, 1].map((r) => (
                <option key={r} value={r}>
                  {r} ⭐
                </option>
              ))}
            </select>
            <textarea
              name="message"
              placeholder="Pesan atau ulasan kamu..."
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition"
            >
              Kirim Testimonial
            </button>
          </form>
        </div>

        {/* Daftar Testimonial */}
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.length > 0 ? (
            testimonials.map((t, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-md border border-orange-100 hover:shadow-lg transition"
              >
                <div className="flex items-center mb-3">
                  <span className="text-orange-500 text-4xl mr-2">❝</span>
                  <span className="text-yellow-500">
                    {"⭐".repeat(t.rating || 5)}
                  </span>
                </div>
                <p className="text-gray-700 italic mb-4">"{t.message}"</p>
                <div className="flex items-center">
                  <div>
                    <p className="font-semibold text-orange-600">{t.name}</p>
                    <p className="text-gray-500 text-sm">{t.country}</p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500 col-span-2">
              Belum ada testimonial.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
