const express = require("express");
const bodyParser = require("body-parser");

const { PORT } = require('./config/serverConfig');
const ApiRoutes = require('./routes/index');

const db = require('./models/index.js');
// const {Airplane} = require('./models/index');

const setupAndStartServer = async() => {

    // create the express object
    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    // app.use('/', (req, res) => {
    //     res.send("start")

    // });
    app.use('/api', ApiRoutes);

    app.listen(PORT, async() => {
        console.log(`Server started at ${PORT}`);
        if (process.env.SYNC_DB) {
            console.log("hii")
            db.sequelize.sync({ alter: true });
        }
    });
}

setupAndStartServer();