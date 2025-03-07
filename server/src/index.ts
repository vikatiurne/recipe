import express from "express";
import dotenv from "dotenv";
import router from "./routes";
import Cors from "cors";

dotenv.config();
const PORT = process.env.PORT ?? 5001;

const app = express();
app.use(
  Cors({
    origin: `${process.env.CLIENT_URL}`,
    methods: ["GET"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);
app.use(express.json());

app.use("/api", router);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
