// to set the width of sidebar to be 250px on btn click
function openNav(){
    document.getElementById("side-bar").style.width = "250px";
    document.getElementById("main-container").style.marginLeft = "250px";
}

// close side on btn click
function closeNav(){
    document.getElementById("side-bar").style.width = "0";
    document.getElementById("main-container").style.marginLeft = "0";

}