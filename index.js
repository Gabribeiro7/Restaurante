const express = require('express');
const cors = require('cors');
const passport = require("passport");
const auth = require('./src/utils/auth/index');
auth.activateAutentication();
const db = require ('./src/utils/db');
db.connectDB();

const clientsRoutes = require('./src/api/clients/clients.routes');
const ordersRoutes = require('./src/api/orders/orders.routes');
const combosRoutes = require('./src/api/combos/combos.routes');
const dishesRoutes = require('./src/api/dishes/dishes.routes');
const indexRoutes = require('./src/api/index/index.routes');

const PORT = 3505;

const server = express();

server.use(cors());

server.use(express.json());

server.use(express.urlencoded({extended : true}));

//! autenticación

server.use(passport.initialize());

server.use('/clients', clientsRoutes);

server.use('/orders', ordersRoutes);

server.use('/combos', combosRoutes);

server.use('/dishes', dishesRoutes);

server.use('/', indexRoutes);


server.use('*', (req, res, next) => {
    return res.status(404).json('Can not find URL. Try another URL');
})

server.listen(PORT, () => {
    console.log(`[Server] Going bad at http://localhost:${PORT}`);
})