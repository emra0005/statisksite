const categorilist = document.querySelector(".categorilist");

fetch("https://kea-alt-del.dk/t7/api/categories")

.then(response => response.json())
.then(categories => showCategories(categories));


function showCategories(categories){
    categories.forEach(category => {
        categorilist.innerHTML +=  `<a href="produktliste.html?category=${category.category}">${category.category}</a>`

    });

}




//   <a href="produktliste.html">Accessories</a>
//     <a href="produktliste.html">Apparel</a>
//     <a href="produktliste.html">Footwear</a>
//     <a href="produktliste.html">Free Items</a>
//     <a href="produktliste.html">Personal Care</a>
//     <a href="produktliste.html">Sporting Goods</a>