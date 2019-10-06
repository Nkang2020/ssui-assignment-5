window.onload = function() {
    document.getElementsByClassName("details-button")[0].addEventListener("click", function(){
        document.getElementById("modal-text").innerHTML = document.getElementById("select1").options[document.getElementById("select1").selectedIndex].text;
        document.getElementById("modal-text-1").innerHTML = document.getElementById("select2").options[document.getElementById("select2").selectedIndex].text;
        document.getElementsByClassName("modal")[0].style.display = "block";
    })
    document.getElementsByClassName("ok-button")[0].addEventListener("click", function() {
        document.getElementsByClassName("modal")[0].style.display = "none";
    })
}
