function changeSlideBtn(ImageName)
{
    const  btnPrev = document.getElementById('bg-img');
    btnPrev.html = ImageName

}

function openSearch() {
    document.getElementById("myOverlay").style.display = "block";
  }
  

  function closeSearch() {
    document.getElementById("myOverlay").style.display = "none";
  }
  function openCart() {
    document.getElementById("mySidenav").style.width = "400px";
    document.getElementById("main").style.marginLeft = "400px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  }
  
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.body.style.backgroundColor = "white";
  }