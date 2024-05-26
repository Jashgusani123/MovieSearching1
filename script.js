let searchbtn = document.querySelector("#searchbtn");
let searchInput = document.querySelector("#searchInput");
let moviesbox = document.querySelector("#moviesCon");
let switchbtn = document.getElementById("switch");
let modeBtn = document.getElementById("modeBtn");
let modeBtn2 = document.getElementById("modeBtn2");
let body = document.querySelector("body");
let heading = document.getElementById("home"); 
let innerHeading = document.querySelector("h1");
let navbar = document.querySelector("nav");
let footerText = document.querySelector("#footerText");
let heading2 = document.querySelector(".heading");
let searchBAR = document.querySelector(".searchBox");
let maintag = document.querySelector("main");
let footer = document.querySelector("footer");

let titalName = "";
let apiKey = "da5b1c3d";
let pageNo = 1;

modeBtn.addEventListener("click"  , ()=>{
    searchInput.style.color = "black";
    footerText.style.color = "white";
    searchBAR.style.background = "white";
    body.style.backgroundColor = "black";
    heading2.style.borderBottom = "2px solid white";
    navbar.style.borderBottom = "2px solid white";
    heading.style.color = "white";
    innerHeading.style.color = "white";
    moviesbox.style.color = "white";
    modeBtn.style.display = "none";
    modeBtn2.style.display = "flex";
})
modeBtn2.addEventListener("click"  , ()=>{
    moviesbox.style.border = "white";
    searchInput.style.color = "white";
    footerText.style.color = "black";
    searchBAR.style.background = "black"
    navbar.style.borderBottom = "2px solid black";
    heading2.style.borderBottom = "2px solid black";
    body.style.backgroundColor = "white";
    heading.style.color = "black";
    innerHeading.style.color = "black";
    moviesbox.style.color = "black";
    modeBtn.style.display = "flex";
    modeBtn2.style.display = "none";
})
searchbtn.addEventListener("click", () => {
    titalName = searchInput.value;
    r();
})

async function r() {
    let apiURL = `https://www.omdbapi.com/?&apikey=${apiKey}&s=${titalName}&page=1`;
    let apiData = await fetch(apiURL);
    let realData = await apiData.json();
    if (realData.Response == "False" && titalName !== "") {
        moviesbox.innerHTML = "Error: Movie not found!";
        footer.style.display = "none";
    } else if (realData.Response == "False" && titalName == "") {
        moviesbox.innerHTML = "Please enter a search term";
        footer.style.display = "none";
    } else {
         moviesbox.innerHTML = "";
        realData.Search.forEach((e) => {
            if(e.Poster === "N/A"){

            }else{
                if(document.body.clientWidth <= 700){
                    footer.style.display = "flex";

                }else{
                    footer.style.display = "none";
                }
            let div = document.createElement("div");
            let img = document.createElement("img");
            let p1 = document.createElement("p");
            let p2 = document.createElement("p");
            div.classList.add("movieCon");
            p1.setAttribute("id", "name");
            p2.setAttribute("id", "date");
            img.src = e.Poster;
            p1.innerText = e.Title;
            p2.innerHTML =`Release date: <span>${e.Year}</span>`;

            moviesbox.append(div);
            div.append(img);
            div.append(p1);
            div.append(p2);
            moviesbox.append(footer);

            }
        })
        
    }
}

function loded() {
    let loder = document.querySelector("#spinarCon");
    loder.style.display = "flex";
    let main = document.querySelector("#main");
    main.style.display = "none"
    setTimeout(() => {
        loder.style.display = "none";
        main.style.display="block";
    }, 2000);
    r();
}



window.onload = () => loded();
