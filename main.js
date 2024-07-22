const getproducts= async ()=>{
const {data}= await axios.get('https://dummyjson.com/products');
const results=data.products.map((product)=>

`

<div class="product">
<h2>${product.title}<h2/>
<img src='${product.thumbnail}' />
<a href="details.html?id=${product.id}">details</a>
<div/>


`



).join(' ');


document.querySelector(".products").innerHTML=results;



}
getproducts();

