const express = require('express');
const path = require('path');
const app = express();
const port = 5005;

const { Clothing , Shirts } = require('./models/clothing');
const products = [];
// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

products.push(new Clothing('Nike Air Max', 199.99, 'Shoes', 'https://example.com/air-max.jpg'));
products.push(new Shirts('Adidas T-Shirt', 29.99, 'Shirts', 'https://example.com/t-shirt.jpg'));

// Import and use routes from the controllers directory
const routes = require('./controllers');
app.use('/', routes);

// Handle 404 errors
app.use((req, res) => {
    res.status(404).send('<h1>Error 404: Resource not found</h1>');
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

console.log(products)
