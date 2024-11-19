const db = require('../config/database');

// Crear una nueva categoría
exports.createCategory = async (req, res) => {
    const { name, description } = req.body;
    try {
        const [result] = await db.query(
            'INSERT INTO Categories (name, description) VALUES (?, ?)',
            [name, description]
        );
        res.status(201).json({ id: result.insertId, name, description });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Obtener todas las categorías
exports.getAllCategories = async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM Categories');
        res.json(rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Obtener una categoría por ID
exports.getCategoryById = async (req, res) => {
    const { id } = req.params;
    try {
        const [rows] = await db.query('SELECT * FROM Categories WHERE id = ?', [id]);
        if (rows.length === 0) return res.status(404).json({ error: 'Category not found' });
        res.json(rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Actualizar una categoría por ID
exports.updateCategory = async (req, res) => {
    const { id } = req.params;
    const { name, description } = req.body;
    try {
        const [result] = await db.query(
            'UPDATE Categories SET name = ?, description = ? WHERE id = ?',
            [name, description, id]
        );
        if (result.affectedRows === 0) return res.status(404).json({ error: 'Category not found' });
        res.json({ message: 'Category updated successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.deleteCategory = async (req, res) => {
    const { id } = req.params;
    try {
        const [result] = await db.query('DELETE FROM Categories WHERE id = ?', [id]);
        if (result.affectedRows === 0) return res.status(404).json({ error: 'Category not found' });
        res.json({ message: 'Category deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
