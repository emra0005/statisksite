console. log("plist")

const productlistContainer = document.querySelector("main");

fetch('https://kea-alt-del.dk/t7/api/products?limit=100')
.then((response)=> response.json())
.then(data => showProducts(data))

function showProducts(products){
    console.log(products);
    products.array.forEach(element => {
        console.log(element)
        productlistContainer.innerHTML += 
        //    <a class="card soldout on-sale" href="product.html">
//           <img src="img/1525.webp" alt="" />
//           <span class="badge-soldout">Sold Out</span>
//           <span class="badge-sale">-34%</span>
//           <h2>Sahara Team India Fanwear Round Neck Jersey</h2>
//           <p class="meta">Tshirt</p>
//           <p class="price">Prev. DKK 1.595,-</p>
//           <p class="price">Now DKK 1.595,-</p>
//           <p class="more">Read More</p>
//         </a>
        
    });
}


