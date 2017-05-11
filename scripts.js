function bigImg(x) {
    x.style.height = "120%";
    x.style.width = "120%";
}

function normalImg(x) {
    x.style.height = "100%";
    x.style.width = "100%";
}
var item = document.getElementById("mainArticle");
item.addEventListener("mouseover", func, false);
item.addEventListener("mouseout", func1, false);

function func()
{   
   document.getElementById("maindiv").setAttribute("style", "display:block;")
}

function func1()
{  
    document.getElementById("maindiv").setAttribute("style", "display:none;")
}