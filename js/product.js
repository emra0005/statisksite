

const productList = document.querySelector("#product");

const params = new URLSearchParams(window.location.search);
const id = params.get("id");



fetch(`https://kea-alt-del.dk/t7/api/products/${id}`)
.then((res)=> res.json())
.then((data => showProduct(data)))
  
 function showProduct(product) {
  console.log(product)

productList.innerHTML = `
   <section class="media">
        <img 
          src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp"
          alt="Produktbillede"
        />
      </section>
      
      <section class="info">
        <h2>${product.brandname}</h2>
        <p>
          <strong>${product.productdisplayname}</strong> 
          <br />
        </p>
        
        <p>${product.price},-</p>
        <br />

        <h2>Få på lager</h2>
        <p>Få på lager</p>
      </section>

     
      <aside class="buy">
        <h2></h2>
        <br />
         <p> ${product.brandname} | ${product.articletype} </p>
      
        <br />

        <label class="field">
          <span>Choose a size</span>
          <select>
            <option>S</option>
            <option>M</option>
            <option>L</option>
            <option>XL</option>
          </select>
          <br />
        </label>
        <br />
        <button class="btn">Add to basket</button>
      </aside>`
      };

    
// const params = new URLSearchParams(window.location.search);
// const id = params.get("id");

// fetch(`https://kea-alt-del.dk/t7/api/products/${id}`)
// .then((response) => response.json())
// .then (date =>showProduct(data))

// function showProducts(product){
//     console.log(product);
//         productlistContainer.innerHTML +=   `<a class="card soldout on-sale" href="product.html">
//           <img src="img/1525.webp" alt="" />
//           <span class="badge-soldout">Sold Out</span>
//           <span class="badge-sale">-34%</span>
//           <h2>Sahara Team India Fanwear Round Neck Jersey</h2>
//           <p class="meta">Tshirt</p>
//           <p class="price">Prev. DKK 1.595,-</p>
//           <p class="price">Now DKK 1.595,-</p>
//           <p class="more">Read More</p>
//         </a>``
//     });
// }