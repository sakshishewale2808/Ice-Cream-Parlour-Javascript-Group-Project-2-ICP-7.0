function newArrival() {
    const newarrival1 = document.getElementById("productImage1");
    const newarrival2 = document.getElementById("productImage2");
    const newarrival3 = document.getElementById("productImage3");
    const newarrival4 = document.getElementById("productImage4");
    const newarrival5 = document.getElementById("productImage5");
    const newarrival6 = document.getElementById("productImage6");
    const newarrival7 = document.getElementById("productImage7");
    const newarrival8 = document.getElementById("productImage8");
    // name
    const productName1 = document.getElementById("productText1");
    const productName2 = document.getElementById("productText2");
    const productName3 = document.getElementById("productText3");
    const productName4 = document.getElementById("productText4");
    const productName5 = document.getElementById("productText5");
    const productName6 = document.getElementById("productText6");
    const productName7 = document.getElementById("productText7");
    const productName8 = document.getElementById("productText8");

    newarrival1.src = "./imgs/home/1.jpg";
    newarrival2.src = "./imgs/home/2.jpg";
    newarrival3.src = "./imgs/home/3.jpg";
    newarrival4.src = "./imgs/home/4.jpg";
    newarrival5.src = "./imgs/home/5.jpg";
    newarrival6.src = "./imgs/home/6.jpg";
    newarrival7.src = "./imgs/home/7.jpg";
    newarrival8.src = "./imgs/home/8.jpg";
    document.getElementById("newArrival").style.color = "#e83e8c";
    document.getElementById("bestSeller").style.color = "black";
    document.getElementById("topRates").style.color = "black";

}
function bestSeller() {
    const newarrival1 = document.getElementById("productImage1");
    const newarrival2 = document.getElementById("productImage2");
    const newarrival3 = document.getElementById("productImage3");
    const newarrival4 = document.getElementById("productImage4");
    const newarrival5 = document.getElementById("productImage5");
    const newarrival6 = document.getElementById("productImage6");
    const newarrival7 = document.getElementById("productImage7");
    const newarrival8 = document.getElementById("productImage8");
      // name
      const productName1 = document.getElementById("productText1");
      const productName2 = document.getElementById("productText2");
      const productName3 = document.getElementById("productText3");
      const productName4 = document.getElementById("productText4");
      const productName5 = document.getElementById("productText5");
      const productName6 = document.getElementById("productText6");
      const productName7 = document.getElementById("productText7");
      const productName8 = document.getElementById("productText8");
      const price = document.getElementById("price");

    

  
    newarrival1.src = "./imgs/home/9.jpg";
    newarrival2.src = "./imgs/home/10.jpg";
    newarrival3.src = "./imgs/home/11.jpg";
    newarrival4.src = "./imgs/home/12.jpg";
    newarrival5.src = "./imgs/home/13.jpg";
    newarrival6.src = "./imgs/home/14.jpg";
    newarrival7.src = "./imgs/home/15.jpg";
    newarrival8.src = "./imgs/home/16.jpg";
    document.getElementById("newArrival").style.color = "black";
    document.getElementById("bestSeller").style.color = "#e83e8c";
    document.getElementById("topRates").style.color = "black";
      productName1.innerText = "abc";
      price.innerText = "100"

}
function topRates() {
    const newarrival1 = document.getElementById("productImage1");
    const newarrival2 = document.getElementById("productImage2");
    const newarrival3 = document.getElementById("productImage3");
    const newarrival4 = document.getElementById("productImage4");
    const newarrival5 = document.getElementById("productImage5");
    const newarrival6 = document.getElementById("productImage6");
    const newarrival7 = document.getElementById("productImage7");
    const newarrival8 = document.getElementById("productImage8");
       // name
       const productName1 = document.getElementById("productText1");
       const productName2 = document.getElementById("productText2");
       const productName3 = document.getElementById("productText3");
       const productName4 = document.getElementById("productText4");
       const productName5 = document.getElementById("productText5");
       const productName6 = document.getElementById("productText6");
       const productName7 = document.getElementById("productText7");
       const productName8 = document.getElementById("productText8");
   

    newarrival1.src = "./imgs/home/17.jpg";
    newarrival2.src = "./imgs/home/5.jpg";
    newarrival3.src = "./imgs/home/19.jpg";
    newarrival4.src = "./imgs/home/20.jpg";
    newarrival5.src = "./imgs/home/3.jpg";
    newarrival6.src = "./imgs/home/6.jpg";
    newarrival7.src = "./imgs/home/2.jpg";
    newarrival8.src = "./imgs/home/7.jpg";
    document.getElementById("newArrival").style.color = "black";
    document.getElementById("bestSeller").style.color = "black";
    document.getElementById("topRates").style.color = "#e83e8c";

}
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}