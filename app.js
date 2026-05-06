const express = require('express');
const productRoutes = require('./Routes/productRoutes');
const cartRoutes = require('./Routes/cartRoutes');
const favoriteRoutes = require('./Routes/favoriteRoutes');
const logger = require('./middleware/logger');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./docs/Swagger.json');

const app = express();
app.use(express.json());
app.use(logger);



app.use('/products', productRoutes);
app.use('/cart', cartRoutes);
app.use('/favorites', favoriteRoutes);



app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

module.exports = app;
