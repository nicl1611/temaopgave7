let filter = "alle";


let sticker;


let container = document.querySelector("section");
let temp = document.querySelector("template");

//-------------------------------------------------------------------------------------------------------------------------------------//
// Loading HTML'en //


document.addEventListener("DOMContentLoaded", loadJSON);


//-------------------------------------------------------------------------------------------------------------------------------------//
// sætter linket ind der indeholder alt information //


const link = "https://spreadsheets.google.com/feeds/list/1GvVRM4YQgG5vMIA_p453OByxwNFP4daER7aHthI9nhE/od6/public/values?alt=json";


//-------------------------------------------------------------------------------------------------------------------------------------//
// henter informationer fra link + lytter til click //


async function loadJSON() {
    const JSONData = await fetch(link);

    personer = await JSONData.json();

    addEventListenersToButons();

    vis(sticker);

    document.querySelector("#luk").addEventListener("click", () => popup.style.display = "none");

    document.querySelector("#menuknap").addEventListener("click", toggleMenu);
}


//-------------------------------------------------------------------------------------------------------------------------------------//
// i mobil tilstand bliver bugermenu-ikonet vist og ikke vist hvis man trykker på den eller kryset //


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


//-------------------------------------------------------------------------------------------------------------------------------------//


function vis(sticker) {

    // fortæller at templatepointer er lig template //
    const templatePointer = document.querySelector("template");

    // fortæller at listpointer er lig med en html section //
    const listPointer = document.querySelector("section");

    // fjerner alt indhold fra html section'en //
    listPointer.innerHTML = "";


    personer.feed.entry.forEach(person => {

        // gør så at man kan se alle kategori + så man kan filtere efter kategorier //
        if (filter == "alle" || filter == person.gsx$kategori.$t) {

            // fortæller at klon er lig templatepointer //
            const klon = templatePointer.cloneNode(true).content;

            // fortæller hvad for noget indhold det skal sættes ind //
            klon.querySelector(".id").textContent = person.gsx$id.$t;
            klon.querySelector(".info").textContent = person.gsx$info.$t;
            //* klon.querySelector(".boomerang").textContent = person.gsx$boomerang.$t;
            klon.querySelector(".pris").textContent = person.gsx$pris.$t;
            klon.querySelector("img").src = "img/kvadratisk/" + person.gsx$image.$t + ".jpg";

            // fortæller at når man klikker på et billede, skal popup'en vises //
            klon.querySelector("article").addEventListener("click", () => visDetaljer(person));

            // fortæller at indholdet skal sættes ind i html section'en //
            listPointer.appendChild(klon);
        }
    })
}



//-------------------------------------------------------------------------------------------------------------------------------------//
// fortæller hvilke informationer der skal blive vist i popup'en //


function visDetaljer(person) {
    popup.style.display = "block";
    popup.querySelector("h2").textContent = person.gsx$id.$t;
    popup.querySelector(".pris").textContent = person.gsx$pris.$t;
    popup.querySelector(".instagram").href = person.gsx$artistinstagram.$t;
    popup.querySelector(".instagram").textContent = 'Instagram';
    popup.querySelector(".youtube").href = person.gsx$artistyoutube.$t;
    popup.querySelector(".youtube").textContent = 'YouTube';
    popup.querySelector(".giphy").href = person.gsx$artistgiphy.$t;
    popup.querySelector(".giphy").textContent = 'Giphy';
    popup.querySelector(".website").href = person.gsx$artistwebsite.$t;
    popup.querySelector(".website").textContent = 'Website';
    popup.querySelector(".shop").href = person.gsx$artistshop.$t;
    popup.querySelector(".shop").textContent = 'Shop';
    popup.querySelector("img").src = "img/kvadratisk/" + person.gsx$image.$t + ".jpg";
}


//-------------------------------------------------------------------------------------------------------------------------------------//
// lytter til alle knapper der blever trykket på der har klassen filter //


function addEventListenersToButons() {
    document.querySelectorAll(".filter").forEach((btn) => {
        btn.addEventListener("click", filterBTNs);
    })
}


//-------------------------------------------------------------------------------------------------------------------------------------//
// når man klikker på en filtering knap så kommer kun den kategori frem + den skriver hvilken knap du har trykket på + giver knappen en farve så man kan se den er blevet trykket på //


function filterBTNs() {
    filter = this.dataset.kategori;

    document.querySelector("h1").textContent = this.textContent;

    document.querySelectorAll(".filter").forEach((btn) => {

        btn.classList.remove("valgt");
    })

    this.classList.add("valgt");

    vis(sticker);
}


//-------------------------------------------------------------------------------------------------------------------------------------//
