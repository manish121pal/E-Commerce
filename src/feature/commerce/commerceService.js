import axios from "axios"
 const allProductData=async()=>{
const respose=await axios.get('https://fakestoreapi.com/products')

return respose.data
 
} 
const jeweleriData=async()=>{
    const response=await axios.get('https://fakestoreapi.com/products/category/jewelery')
    return response.data
}

const serviceData={
allProductData,
jeweleriData
}
export default serviceData