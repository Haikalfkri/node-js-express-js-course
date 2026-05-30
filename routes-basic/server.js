const express = require('express');
const app = express();
const port = 3000;

// routes
const product_routes = require('./routes/products');
const user_routes = require('./routes/users');

app.use(express.json());

// Use the routes
app.use('/products', product_routes);
app.use('/users', user_routes);


app.get('/', (req, res) => res.send('Welcome to the Home Page'));

// --- 404 Handler ---
app.use((req, res) => {
    res.status(404).send('Page not found');
})

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});