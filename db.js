const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://suarezaraujomaal:P5v2Ln32LRAugS9c@clustermaria.hkuol.mongodb.net/basedetodo?retryWrites=true&w=majority&appName=ClusterMaria', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('MongoDB connected');
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

module.exports = connectDB;
