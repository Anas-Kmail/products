const getproduct= async ()=>{

const params=new URLSearchParams(window.location.search);
const id=params.get('id');
const {data}= await axios.get(`https://dummyjson.com/products/${id}`);
return data;
}

const display=async ()=>{

const data=await getproduct();
console.log(data);
const images= data.images.map((img)=>{

return `<img src="${img}" width="200px" />`;



}).join(' ');
console.log(images);

const result=`

<h2>${data.title}</h2>
<p>${data.description} <p/>
<p>${data.price}<p/>

`;

document.querySelector(".product").innerHTML=result;
document.querySelector(".image-details").innerHTML=images;

}

display();