
const params = new URLSearchParams(window.location.search);
const category = params.get("category");


const productlistContainer = document.querySelector("#product-grid");
const header = document.querySelector("h2").textContent = category


document.querySelector("#filters").addEventListener("click", showFiltered);
document.querySelector("#sorting").addEventListener("click", showSorted);


function showSorted(event){
  const direction = event.target.dataset.direction;
  if(direction == "lohi"){
    allData.sort((firstItem, secondItem)=>firstItem.price - secondItem.price);
  } else {
    allData.sort((firstItem, secondItem)=> secondItem.price - firstItem.price);
  }
  showProducts(allData);
}


function showFiltered(event){
  console.log(event.target)
  const gender = event.target.dataset.gender;
  if(gender == "All"){
    showProducts (allData);
  } else {
    const udsnit = allData.filter(product=> product.gender === gender);
    showProducts(udsnit);
  }
}


let allData;
fetch(`https://kea-alt-del.dk/t7/api/products?limit=100&category=${category}`)
.then((response)=> response.json())
.then((data) => {
  allData = data;
  showProducts(allData); 
});




function showProducts(products){
  console.log(products)
    productlistContainer.innerHTML ="";
    products.forEach((product)=> {
        productlistContainer.innerHTML +=
        `<a class="card ${product.soldout && "soldout"} ${product.discount && "onsale"} soldout on-sale" href="product.html?id=${product.id}">
          <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="product image" />
          <span class="badge-soldout">Sold Out</span>
          <span class="badge-sale">-34%</span>
          <h2>${product.productdisplayname}</h2>
          <p class="meta">${product.brandname} ${product.articletype}</p>
          <p class="price">Prev. DKK ${product.price}</p>
          <p class="price">Now DKK ${Math.round (product.price - (product.price * product.discount) / 100)} 1.595,-</p>

          <p class="more" >Read More</p>
        </a>`
    })
}