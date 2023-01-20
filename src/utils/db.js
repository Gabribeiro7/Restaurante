const mongoose = require('mongoose');

const DB_URL = 'mongodb+srv://GabRibeiro:qCjUecK3e6e0LM3O@cluster0.aftxwez.mongodb.net/test';

const connectDB = async() => {
    try{
        mongoose.set("strictQuery", true);
        const db = await mongoose.connect(DB_URL);
        const { name, host, port } = db.connection;
        console.log(`[Server] Suscefully connected at: ${name} in host ${host} in Port ${port} `);
    }
    catch(error) {
        console.log('[Server ERROR] connecting to database', error);
    }
};

module.exports= {
    connectDB
}