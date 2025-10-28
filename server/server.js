import express from "express";
import cors from "cors";
import fs from "fs";

const app = express();
app.use(cors());
app.use(express.json());

const FILE_PATH = "./server/testimonials.json";

// pastikan file JSON ada
if (!fs.existsSync(FILE_PATH)) {
  fs.writeFileSync(FILE_PATH, JSON.stringify([], null, 2));
}

// ambil semua testimonial
app.get("/testimonials", (req, res) => {
  const data = JSON.parse(fs.readFileSync(FILE_PATH));
  res.json(data);
});

// tambahkan testimonial baru
app.post("/testimonials", (req, res) => {
  const data = JSON.parse(fs.readFileSync(FILE_PATH));
  data.push(req.body);
  fs.writeFileSync(FILE_PATH, JSON.stringify(data, null, 2));
  res.status(201).json({ message: "Testimonial added!" });
});

app.listen(5000, () => console.log("✅ Server running at http://localhost:5000"));
