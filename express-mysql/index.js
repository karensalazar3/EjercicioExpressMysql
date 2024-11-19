const express = require('express');
const bodyParser = require('body-parser');
const productRoutes = require('./routes/products');
const categoryRoutes = require('./routes/categories');

const app = express();
app.use(bodyParser.json());

app.use('/products', productRoutes);
app.use('/categories', categoryRoutes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
