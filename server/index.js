import express from "express";
import path from "node:path";
import { fileURLToPath } from "node:url";
import menuRoutes from "./routes/menu.routes.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const clientDist = path.join(__dirname, "../client/dist");

const app = express();
const port = process.env.PORT || 3001;

app.use("/api", menuRoutes);

// En producción, Express sirve el build de React; en dev, Vite corre aparte (con proxy a /api).
app.use(express.static(clientDist));
app.get(/^(?!\/api).*/, (req, res) => {
  res.sendFile(path.join(clientDist, "index.html"), (err) => {
    if (err) res.status(404).send("Build de cliente no encontrado. Ejecuta `npm run build` en /client.");
  });
});

app.listen(port, () => {
  console.log(`Antana API escuchando en http://localhost:${port}`);
});
