function changeSlideBtn(ImageName)
{
    const  btnPrev = document.getElementById('bg-img');
    btnPrev.html = ImageName

}
// Open the full screen search box
function openSearch() {
    document.getElementById("myOverlay").style.display = "block";
  }
  
  // Close the full screen search box
  function closeSearch() {
    document.getElementById("myOverlay").style.display = "none";
  }