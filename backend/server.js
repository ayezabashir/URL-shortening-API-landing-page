import express from "express";
import cors from "cors";
import fetch from "node-fetch";
const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post("/api/shorten", async (req, res) => {
  const { url } = req.body;
  if (!url) {
    return res.status(400).json({ error: "URL is required" });
  }
  try {
    const response = await fetch("https://cleanuri.com/api/v1/shorten", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({ url }),
    });
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to shorten URL" });
    console.log(error);
  }
});
app.listen(3000, () => {
  console.log("Backend running on http://localhost:3000");
});
