window.addEventListener("load", sidenVises);


function sidenVises() {
    console.log("sidenVises");

    document.querySelector("#menuknap").addEventListener("click", toggleMenu);
}


function toggleMenu() {
    console.log("toggleMenu");

    document.querySelector("#menu").classList.toggle("hide");

    let erSkjult = document.querySelector("#menu").classList.contains("hide");


    if (erSkjult == true) {
        document.querySelector("#menuknap").textContent = "☰";
    } else {
        document.querySelector("#menuknap").textContent = "✖";
    }

}

function openNav() {
    document.getElementById("myNav").style.height = "100%";

    document.querySelector(".filternav-content").classList.remove("hide2");
}

function closeNav() {
    document.getElementById("myNav").style.height = "0%";

    document.querySelector(".filternav-content", ".openNav").classList.add("hide2");
}


let filter = "alle";


let personer;


let container = document.querySelector("section");

let temp = document.querySelector("template");


//-------------------------------------------------------- Loading the html -------------------------------------------------------------//


document.addEventListener("DOMContentLoaded", loadJSON);


//---------------------------------------------------- sets link to spreadsheets -------------------------------------------------------//


const link = "https://spreadsheets.google.com/feeds/list/1GvVRM4YQgG5vMIA_p453OByxwNFP4daER7aHthI9nhE/od6/public/values?alt=json";


//----------------------------------------------- loading json + lisents to button click -----------------------------------------------//


async function loadJSON() {

    const JSONData = await fetch(link);

    personer = await JSONData.json();

    addEventListenersToButons();

    vis(personer);

    document.querySelector("#luk").addEventListener("click", () => popup.style.display = "none");
}


//------------------------------------------ tells template what to show + telling to show it -----------------------------------------//


function vis(personer) {

    const templatePointer = document.querySelector("template");

    const listPointer = document.querySelector("section");

    listPointer.innerHTML = "";

    personer.feed.entry.forEach(person => {

        if (filter == "alle" || filter == person.gsx$kategori.$t) {

            console.log(person);

            const klon = templatePointer.cloneNode(true).content;

            klon.querySelector(".id").textContent = person.gsx$id.$t;
            klon.querySelector(".info").textContent = person.gsx$info.$t;
            //* klon.querySelector(".boomerang").textContent = person.gsx$boomerang.$t;
            klon.querySelector(".pris").textContent = person.gsx$pris.$t;

            klon.querySelector("img").src = "img/kvadratisk/" + person.gsx$image.$t + ".jpg";

            klon.querySelector("article").addEventListener("click", () => visDetaljer(person));

            listPointer.appendChild(klon);
        }
    })
}


//-------------------------------------------- tells what to show in popup + show it ----------------------------------------------------//


function visDetaljer(person) {
    popup.style.display = "block";
    popup.querySelector("h2").textContent = person.gsx$id.$t;
    popup.querySelector(".pris").textContent = person.gsx$pris.$t;
    popup.querySelector(".instagram").href = person.gsx$artistinstagram.$t;
    popup.querySelector(".youtube").href = person.gsx$artistyoutube.$t;
    popup.querySelector(".giphy").href = person.gsx$artistgiphy.$t;
    popup.querySelector(".website").href = person.gsx$artistwebsite.$t;
    popup.querySelector(".shop").href = person.gsx$artistshop.$t;
    popup.querySelector("img").src = "img/kvadratisk/" + person.gsx$image.$t + ".jpg";
}


<<<<<<< HEAD


//-------------------------------------------------------------------------------------------------------------------------------------//

=======
//--------------------------------------------------------- lisents to click -----------------------------------------------------------//
>>>>>>> origin/master


function addEventListenersToButons() {
    document.querySelectorAll(".filter").forEach((btn) => {
        btn.addEventListener("click", filterBTNs);
    })
}


//----------- filter after with botton was clicked + show with text what botton was clicked + show that botton was clicked ------------//


function filterBTNs() {
    filter = this.dataset.kategori;

    document.querySelector("h1").textContent = this.textContent;

    document.querySelectorAll(".filter").forEach((btn) => {

        btn.classList.remove("valgt");
    })

    this.classList.add("valgt");

    vis(personer);
}
