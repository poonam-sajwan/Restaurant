// document.getElementById("cart-info").addEventListener("click", function() {
//   const cart = document.getElementById("cart");
//   cart.classList.toggle("show-cart");
//   console.log(cart);
// });

// alert("Hi");

const slideNav=()=>{
  // console.log("clicked");
  const bburger=document.querySelector(".burger");
  const navLinks=document.querySelector(".nav-links");
const navBar=document.querySelector(".navbar");
  bburger.addEventListener('click',()=>{
    navBar.classList.toggle('white');
    navLinks.classList.toggle('show');
    // console.log("clicked");
  });
}
slideNav();
