const db = require('../config/database');

exports.createProduct = async (req, res) => {
    const { name, price, stock } = req.body;
    try {
        const [result] = await db.query('INSERT INTO Products (name, price, stock) VALUES (?, ?, ?)', [name, price, stock]);
        res.status(201).json({ id: result.insertId, name, price, stock });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getAllProducts = async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM Products');
        res.json(rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getProductById = async (req, res) => {
    const { id } = req.params;
    try {
        const [rows] = await db.query('SELECT * FROM Products WHERE id = ?', [id]);
        if (rows.length === 0) return res.status(404).json({ error: 'Product not found' });
        res.json(rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.updateProduct = async (req, res) => {
    const { id } = req.params;
    const { name, price, stock } = req.body;
    try {
        await db.query('UPDATE Products SET name = ?, price = ?, stock = ? WHERE id = ?', [name, price, stock, id]);
        res.json({ message: 'Product updated successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.deleteProduct = async (req, res) => {
    const { id } = req.params;
    try {
        await db.query('DELETE FROM Products WHERE id = ?', [id]);
        res.json({ message: 'Product deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
