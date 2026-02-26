const btn = document.getElementById("togglebtn");

function applySavedTheme(){
    const saved = localStorage.getItem("theme");

    if(saved === "dark"){
        document.body.classList.add("dark");
    }
}

function toggleTheme(){
    document.body.classList.toggle("dark");


    if(document.body.classList.contains("dark")){
        localStorage.setItem("theme","dark");
    }else{
        localStorage.setItem("theme","light");
    }
}

btn.addEventListener("click", toggleTheme);

applySavedTheme();