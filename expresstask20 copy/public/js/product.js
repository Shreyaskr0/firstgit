const onSubmitHandler=(e)=>{
    e.preventDefault();
    console.log("submit function called")
    const product=e.target.productName.value;

    const obj={
        "productName":product
    }

    axios.post('http://localhost:3000'+"/api/products",obj).then((result)=>{
        console.log("Value returned from post request:"+result.data.value)
    })
}