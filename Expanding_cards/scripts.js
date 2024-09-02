for(var i=0;i<document.querySelectorAll(".panel").length;i++) {
    document.querySelectorAll(".panel")[i].addEventListener("click", function() {
        document.querySelector(".active").classList.remove("active");
        this.classList.toggle("active");
    });
}