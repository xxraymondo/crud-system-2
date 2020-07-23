let productName=document.getElementById("productName");
let productPrice=document.getElementById("productPrice");
let productCategory=document.getElementById("productCategory");
let productImg=document.getElementById("productImg");
let productDescreption=document.getElementById("productDescreption");
let productArr;
let search=document.getElementById("search");
let searchRes=document.getElementById("searchRes");
let update=document.getElementById("update");
let productNameUpdate=document.getElementById("productNameUpdate");
let productPriceUpdate=document.getElementById("productPriceUpdate");
let productCategoryUpdate=document.getElementById("productCategoryUpdate");
let productImgUpdate=document.getElementById("productImgUpdate");
let productDescreptionUpdate=document.getElementById("productDescreptionUpdate");
let hide=document.getElementById("hide");
let confrim=document.getElementById("confrim");
let updatep=document.getElementById("update");
let currentIndex=0
if(JSON.parse(localStorage.getItem("productStorage"))==null){
    productArr=[];
}else{
    productArr= JSON.parse(localStorage.getItem("productStorage")); 
    display()
}
let addProBut=document.getElementById("addProBut");
addProBut.addEventListener("click",function(){
    if(addProBut.innerHTML=="add product"){
        addProduct();
       }else{
           saveUpdate()
       }
})
function addProduct(){
    let productData={
        name:productName.value,
        price:productPrice.value,
        category:productCategory.value,
        img:productImg.value,
        desc:productDescreption.value
    }
    localStorage.setItem("productStorage",JSON.stringify(productArr));
    productArr.push(productData);
    display();
}
function display(){
    let disProduct=``;
    for(let i=0;i<productArr.length;i++)
{ 
    disProduct+=`
    
    <div class="col-md-3 p-2 proData">
    <div class="p-1 rounded border" >
    <div class=" newpro">
        <img class="w-100" src="${productArr[i].img}">
        </div>
        <div class="d-flex justify-content-around">
        <p>name:</p>
            <p>${productArr[i].name}</p>
           
        </div>
        <div class="d-flex justify-content-around">
            <p>price:</p>
            <p>${productArr[i].price}</p>
        </div>
        <div class="d-flex justify-content-around">
            <p>category:</p>
            <p>${productArr[i].category}</p>
        </div>
        <div class="d-flex justify-content-around">
        <button onclick="updatePro(${i})" id="addB" class="btn px-4 mb-2 btn-info">update</button>
        <button onclick="deletePro(${i})" class="btn px-4 mb-2 btn-danger">delete</button>
    </div>
    </div>
</div>
    ` 

}

localStorage.setItem("productStorage",JSON.stringify(productArr));
document.getElementById("newProduct").innerHTML=disProduct;
}

function deletePro(index){
    productArr.splice(index,1);
    localStorage.setItem("productStorage",JSON.stringify(productArr));
    display();
}
function searching(text){
    let searchPro=``;
    let searchPro2=``;
    for(let i=0;i<productArr.length;i++){
        if(productArr[i].name.includes(text.trim())==true){
            searchPro+=`
            <div class="p-2">${productArr[i].name}</div>
            `
            searchPro2=productArr[i].name.replace(text,`<span class="text-danger">${text}</span>`)
          document.getElementById("searchRes").innerHTML=searchPro2;
        }
    }
}

function saveUpdate(){
    console.log(currentIndex)
    let product={
        name:productName.value,
        price:productPrice.value,
        category:productCategory.value,
        img:productImg.value,
        desc:productDescreption.value
    }
    productArr[currentIndex]=product;
    localStorage.setItem("productStorage",JSON.stringify(productArr));
    display()
    clr()
}
function updatePro(index){
    currentIndex=index
    $("#update").slideDown(500)

}
$("#new").click(function(){
    ayHaga()  
})
function ayHaga(){
    let newData={
        name:productNameUpdate.value,
       price:productPriceUpdate.value,
        category:productCategoryUpdate.value,
       img: productImgUpdate.value
   }
   productArr.splice(currentIndex,1);
   productArr.splice(currentIndex,0,newData);
   $("#update").slideUp(500)
   display()
}
function clr(){
    productName.value=""
    productPrice.value=""
    productCategory.value=""
    productImg.value=""
    productDescreption.value=""
}
