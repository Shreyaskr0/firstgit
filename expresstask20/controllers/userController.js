const getUsers=(req,res)=>{
    res.send('Fetching all users'); 
}
const getUsersByID=(req,res)=>{
    res.send(`Fetching user with ID: ${req.params.id}`);
}
const postUsers=(req,res)=>{
    res.send('Adding a new user');
}

module.exports={
    getUsers,
    getUsersByID,
    postUsers
}















