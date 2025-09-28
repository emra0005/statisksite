console. log("plist")

const productlistContainer = document.querySelector("#product-grid");

fetch('https://kea-alt-del.dk/t7/api/products')
.then((response)=> response.json())
.then(data => showProducts(data))

function showProducts(products){
    console.log(products);
    products.forEach(product=>{
        productlistContainer.innerHTML +=
        `<a class="card ${product.soldout && "soldout"} ${product.discount && "onsale"}soldout on-sale" href="product.html?id=${product.id}">
          <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="product image" />
          <span class="badge-soldout">Sold Out</span>
          <span class="badge-sale">-34%</span>
          <h2>Sahara Team India Fanwear Round Neck Jersey</h2>
          <p class="meta">Tshirt</p>
          <p class="price">Prev. DKK 1.595,-</p>
          <p class="price">Now DKK ${Math.round} 1.595,-</p>

          <p class="more">Read More</p>
        </a>`
    })
}


