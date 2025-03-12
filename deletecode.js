router.delete('/:id', (req, res) => {
    const productId = req.params.id;

    db.execute('DELETE FROM products WHERE id = ?', [productId])
        .then(() => {
            res.status(200).json({ message: 'Product deleted successfully' });
        })
        .catch(err => {
            console.error("Error deleting product:", err);
            res.status(500).json({ error: 'Internal Server Error' });
        });
});