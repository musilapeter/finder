import express from 'express';
import cors from 'cors';
import http from 'http';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

// import and connect to database
import connectDb from "./server/configs/connectDb.js";
connectDb();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Ensure the uploads directory exists
const uploadsDir = path.join(__dirname, 'server', 'uploads');
if (!fs.existsSync(uploadsDir)) {
    fs.mkdirSync(uploadsDir, { recursive: true });
}

// server port
const PORT = process.env.PORT || 5000;

//create the server
const app = express();
const server = http.createServer(app);


//basic middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// Serve uploaded images from the uploads folder
app.use('/uploads', express.static(uploadsDir));

// serve client production assets
app.use(express.static(path.join(__dirname, 'client', 'dist')));

// import and use routes
import routes from './server/routes/items.routes.js';
app.use('/api/items', routes);

//general route
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
});


//run server
server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});

server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
        console.error(`Port ${PORT} is already in use. Stop the existing server or set PORT to another value and try again.`);
        process.exit(1);
    }
    console.error('Server error:', err);
    process.exit(1);
});;