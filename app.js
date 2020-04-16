const config = require('./config/config'),
    mongoose = require('mongoose'),
    app = require('express')()

// Connect to database
mongoose.connect(config.db_host+'/'+config.db_name, { useUnifiedTopology: true, useNewUrlParser: true });
const db = mongoose.connection;
db.on('connected', function () {
    console.log(`Connected to database ${config.db_name}`);
})
db.on('error', function (error) {
    console.log('Could not Connect to database');
    process.kill(process.pid, 'SIGTERM');
})




console.log(config.db_name)
app.get('/', (req, res) => {
    res.send("iniitiating termination")
    process.kill(process.pid, 'SIGTERM')
});

const server = app.listen(config.port, ()=>{
    console.log(`Server started on port ${config.port}`);
})


process.on('SIGTERM', () => {
    console.info('SIGTERM signal received!');
    server.close(() => {
        // close mongoose connection
        db.close(false, () => {
            console.log("Mongoose connection closed");
        })

        console.info('Process terminated');
        process.exit(1)
    });
  });