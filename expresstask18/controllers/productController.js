const path=require('path')

const getProducts=(req,res)=>{
    res.sendFile(path.join(__dirname,"..","view","product.html"));
}
const getProductsByID=(req,res)=>{
    res.send(`Fetching product with ID: ${req.params.id}`);
}
const postProducts=(req,res)=>{
    res.send('Adding a new product')
}
const editProducts=(req,res)=>{
    res.send('Put request called');
}
const deleteProducts=(req,res)=>{
    res.send('Delete request called');
}

module.exports={
    getProducts,
    getProductsByID,
    postProducts,
    editProducts,
    deleteProducts
}















