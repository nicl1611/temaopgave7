let filter = "alle";



let personer;



let container = document.querySelector("section");
let temp = document.querySelector("template");



document.addEventListener("DOMContentLoaded", loadJSON);



//-------------------------------------------------------------------------------------------------------------------------------------//



const link = "https://spreadsheets.google.com/feeds/list/1GvVRM4YQgG5vMIA_p453OByxwNFP4daER7aHthI9nhE/od6/public/values?alt=json";


klon.querySelector(".id").textContent = person.gsx$id.$t;
klon.querySelector(".info").textContent = person.gsx$info.$t;

klon.querySelector(".boomerang").textContent = person.gsx$boomerang.$t;
//* klon.querySelector(".artistinstagram").textContent = person.gsx$artistinstagram.$t;
//* klon.querySelector(".artistyoutube").textContent = person.gsx$artistyoutube.$t;
//*  klon.querySelector(".artistgiphy").textContent = person.gsx$artistgiphy.$t;
//* klon.querySelector(".artistwebsite").textContent = person.gsx$artistwebsite.$t;
//* klon.querySelector(".artistshop").textContent = person.gsx$artistshop.$t;

//* klon.querySelector(".boomerang").textContent = person.gsx$boomerang.$t;
klon.querySelector(".pris").textContent = person.gsx$pris.$t;

//-------------------------------------------------------------------------------------------------------------------------------------//



async function loadJSON() {
    const JSONData = await fetch(link);
    personer = await JSONData.json();
    addEventListenersToButons();
    vis(personer);
    document.querySelector("#luk").addEventListener("click", () => popup.style.display = "none");
}



//-------------------------------------------------------------------------------------------------------------------------------------//



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



//-------------------------------------------------------------------------------------------------------------------------------------//



function visDetaljer(person) {
    popup.style.display = "block";
    popup.querySelector("h2").textContent = person.gsx$id.$t;
    popup.querySelector(".pris").textContent = person.gsx$pris.$t;
    popup.querySelector(".instagram").textContent = person.gsx$artistinstagram.$t;
    popup.querySelector(".instagram").href = person.gsx$artistinstagram.$t;
    popup.querySelector(".youtube").textContent = person.gsx$artistyoutube.$t;
    popup.querySelector(".youtube").href = person.gsx$artistyoutube.$t;
    popup.querySelector(".giphy").textContent = person.gsx$artistgiphy.$t;
    popup.querySelector(".giphy").href = person.gsx$artistgiphy.$t;
    popup.querySelector(".website").textContent = person.gsx$artistwebsite.$t;
    popup.querySelector(".website").href = person.gsx$artistwebsite.$t;
    popup.querySelector(".shop").textContent = person.gsx$artistshop.$t;
    popup.querySelector(".shop").href = person.gsx$artistshop.$t;
    popup.querySelector("img").src = "img/kvadratisk/" + person.gsx$image.$t + ".jpg";
}



//-------------------------------------------------------------------------------------------------------------------------------------//



function addEventListenersToButons() {
    document.querySelectorAll(".filter").forEach((btn) => {
        btn.addEventListener("click", filterBTNs);
    })
}



//-------------------------------------------------------------------------------------------------------------------------------------//



function filterBTNs() {
    filter = this.dataset.kategori;



    document.querySelector("h1").textContent = this.textContent;



    document.querySelectorAll(".filter").forEach((btn) => {



        btn.classList.remove("valgt");
    })



    this.classList.add("valgt");



    vis(personer);
}



*{
    margin: 0;
    box - sizing: border - box; -
    webkit - box - sizing: border - box; -
    moz - box - sizing: border - box;

}

img {
    width: 100 %
}

body {
    background - image: url(img / baggrund - ide.png);
    background - size: cover;
}

/***** Vivi forslag *****/
/***** FONT *****/

h1 {
    font - family: roc - grotesk,
        sans - serif;
    font - weight: 600;
    font - style: normal;
    font - size: 2 em;
    color: #fec32d;
    text - transform: uppercase;
    margin - bottom: 30 px;
}

h2 {
    font - family: roc - grotesk,
        sans - serif;
    font - weight: 400;
    font - style: normal;
    font - size: 1.5 em;
    color: #faadfd;
    text - transform: uppercase;
    margin - bottom: 20 px;
}

h3 {
    font - family: roc - grotesk,
        sans - serif;
    font - weight: bold;
    font - style: normal;
    font - size: 1.17 em;
    color: #0f5dff;
    text-transform: uppercase;
    margin-bottom: 20px;
}

h4 {
    font-family: roc-grotesk,
        sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 1.17em;
    color: # 0 f5dff;
    text - transform: uppercase;
    margin - bottom: 20 px;
}

p {
    font - family: roc - grotesk,
        sans - serif;
    font - weight: 400;
    font - style: normal;
    font - size: 1 em;
    line - height: 1.8 em;
    color: rgb(64, 64, 64);
    margin - bottom: 20 px;
}

/***** LINKS *****/
a: link {
    font - family: roc - grotesk,
        sans - serif;
    font - weight: 400;
    font - style: normal;
    font - size: 1.17 em;
    color: #0f5dff;
    text-transform: uppercase;
    text-decoration: none;
}

a:visited {
    color: # 000000;
}

a: hover {
    text - decoration: underline;
}

a: active {
        color: #ffffff;
    }

    /***** KNAPPER + HOVER EFFEKT *****/
    .buttons {
        margin: 10 % ;
        text - align: center;
    }

    .btn - hover {
        width: 200 px;
        font - size: 16 px;
        font - weight: 600;
        color: #fff;
        cursor: default;
        margin: 20 px;
        height: 55 px;
        text - align: center;
        border: none;
        background - size: 300 % 100 % ;

        border - radius: 50 px;
        moz - transition: all .4 s ease - in -out; -
        o - transition: all .4 s ease - in -out; -
        webkit - transition: all .4 s ease - in -out;
        transition: all .4 s ease - in -out;
    }

    .btn - hover: hover {
        background - position: 100 % 0;
        moz - transition: all .4 s ease - in -out; -
        o - transition: all .4 s ease - in -out; -
        webkit - transition: all .4 s ease - in -out;
        transition: all .4 s ease - in -out;
    }

    .btn - hover: focus {
        outline: none;
    }

    .btn - hover.color - 9 {
        background - image: linear - gradient(to right, #fec32d, #faadfd, #faadfd, #0f5dff);
    box-shadow: 0 4px 15px 0 rgba(65, 132, 234, 0.75);

}

/***** FOOTER *****/

footer {
    height: 200px;
    padding: 10px;
    border: 1px solid # ffffff; margin: 10 px; background - color: skyblue;
        }

        #footer {
            display: flex;
            width: 80 % ;
            margin: 0 auto;
            justify - content: space - between;
        }

        #footer - contact a: link,
            #footer - follow a: link {
                font - family: roc - grotesk,
                    sans - serif;
                font - weight: 400;
                font - style: normal;
                font - size: 1 em;
                line - height: 1.8 em;
                color: rgb(64, 64, 64);
                margin - bottom: 20 px;
                display: block;
                text - transform: none;
            }

        #footer - contact a: visited,
            #footer - follow a: visited {

                color: #000000;
}

# footer - contact a: hover,
                #footer - follow a: hover {
                    text - decoration: underline;
                }

                #footer - contact a: active,
                #footer - follow a: active {
                    color: #ffffff;
                }


                /***** Vivi forslag slut *****/

                /*--------------*/

                /*
                h1 {
                    font-family: monospace;
                }

                h2 {
                    font-family: monospace;
                }

                p {
                    font-family: monospace;
                }

                h3 {
                    font-family: monospace;
                }*/

                #menu {
                    text - align: center;
                }

                #menu ul {
                    margin: 0;
                    padding: 0;
                    overflow: hidden;
                    border - top: solid 1 px skyblue;
                    width: 100 % ;
                }

                #menu li {
                    display: inline - block;

                }

                #menu li a {
                    display: block;
                    color: #111;
    text-align: center;
    padding: 14px 60px;
    text-decoration: none;
    transition-duration: .4s;
    font-size: 16px;
    font-family: monospace;
}

# menu li a: hover {
                        background - color: skyblue;
                        color: white;
                    }

                    /*----------------------------------------------------------------------------------------------------------*/



                    #splash {
                        padding: 40 px 0 px;
                        background - image: url(img / splash.png);
                        background - repeat: no - repeat;
                        background - size: cover;
                        height: 300 px!important;
                        background - attachment: fixed;
                        background - position: center;
                        background - repeat: no - repeat;
                        background - size: cover;
                        border: 1 px skyblue solid;
                    }



                    /*----------------------------------------------------------------------------------------------------------*/



                    /*----------------------------------------------------------------------------------------------------------*/



                    article {
                        border: 1 px solid skyblue;
                        padding: 10 px;
                        transition - duration: .4 s;
                        background - color: white;
                        border - radius: 3 px;
                    }



                    article: hover {
                        box - shadow: 0 px 0 px 5 px 0 px skyblue;
                        transition - duration: .4 s;



                    }



                    /*----------------------------------------------------------------------------------------------------------*/

                    img {
                        width: 100 % ;
                    }


                    .zoom img {
                        max - width: 100 % ;
                        transition - duration: .4 s;



                    }



                    .zoom img: hover {
                            opacity: 0.4;
                            transform: scale(1.05);
                            border - radius: 5 px;
                        }



                        /*----------------------------------------------------------------------------------------------------------*/



                        .logo {
                            width: 10 % ;
                            margin: 0 auto;
                            transition - duration: 2 s;
                        }



                        /*--------------------------------------*/



                        .sectionwrapper {
                            width: 80 % ;
                            margin: 0 auto;
                        }



                    section {
                        margin: 0 auto;
                        display: grid;
                        grid - gap: 10 px;
                        grid - template - columns: repeat(auto - fill, minmax(200 px, 1 fr));
                    }


                    /*-------------------------------------------------------------------------------------------------*/

                    /*
                    #omSection img {
                        width: 47%;
                    }
                    */

                    #omSection {
                        display: flex;
                        flex - wrap: wrap;
                        background - color: white;
                        padding: 50 px;
                    }

                    .photo {
                        flex - grow: 0.3;
                        flex - basis: 300 px;
                        margin - left: 10 % ;
                    }

                    .txt {
                        flex - grow: 0.3;
                        flex - basis: 300 px;
                        margin - left: 10 % ;
                    }

                    .greeting {
                        margin - top: 50 px;
                    }

                    /***** KONTAKT SIDE *****/
                    #contactSection {
                        display: flex;
                        flex - wrap: nowrap;
                        background - color: white;
                        padding: 50 px;
                    }

                    .contact - txt {
                        flex - grow: 0.3;
                        flex - basis: 300 px;
                        margin - left: 10 % ;
                    }

                    #contactSection p + h2 {
                        margin - top: 50 px;
                    }

                    /***** KONTAKT SIDE *****/


                    /*----------------------------------------------------------------------------------------------------------*/



                    .nav {
                        display: flex;
                        flex - wrap: wrap;
                        transition - duration: .4 s;
                    }



                    /*----------------------------------------------------------------------------------------------------------*/

                    h1 {
                        margin - left: 5 px;
                        margin - top: 10 px;
                        margin - bottom: 10 px;
                    }



                    /*----------------------------------------------------------------------------------------------------------*/



                    .filter {
                        display: flex;
                        flex - grow: 1;
                        background - color: skyblue;
                        border: none;
                        color: white;
                        padding: 3 px 32 px;
                        text - align: center;
                        text - decoration: none;
                        display: inline - block;
                        font - size: 16 px;
                        margin: 16 px 2 px 5 px 2 px;
                        cursor: pointer;
                        transition - duration: .4 s;
                        border: 1 px solid skyblue;
                        border - radius: 3 px;
                        font - family: monospace;
                    }



                    .filter: hover {
                            background - color: white;
                            border: 1 px solid skyblue;
                            color: black;



                        }



                        /*----------------------------------------------------------------------------------------------------------*/


                        .valgt {
                            background - color: black;
                        }



                    /*----------------------------------------------------------------------------------------------------------*/



                    #popup {
                        position: fixed;
                        left: 0;
                        top: 0;
                        width: 100 % ;
                        height: 100 vh;
                        background - color: rgba(0, 0, 0, .8);
                        display: none;
                    }



                    #popup article {
                        width: 70 vw;
                        height: 50 vh;
                        margin: 10 rem auto;
                        background - color: white;
                        display: flex;
                        position: relative;
                    }



                    #popup img {
                        max - width: 50 % ;
                    }



                    #popup div {
                        margin - left: 20 px;
                        margin - right: 20 px;
                    }



                    /*----------------------------------------------------------------------------------------------------------*/



                    #luk {
                        position: absolute;
                        top: 1.5 rem;
                        right: 0 rem;
                        background - color: #C1272D;
                        color: white;
                        border: none;
                        color: white;
                        padding: 15 px 32 px;
                        text - align: center;
                        text - decoration: none;
                        display: inline - block;
                        font - size: 16 px;
                        margin: 4 px 40 px 4 px 2 px;
                        border - radius: 3 px;
                    }



                    #luk: hover {
                        opacity: 0.6;
                    }



                    let filter = "alle";



                    let personer;



                    let container = document.querySelector("section");
                    let temp = document.querySelector("template");



                    document.addEventListener("DOMContentLoaded", loadJSON);



                    //-------------------------------------------------------------------------------------------------------------------------------------//



                    const link = "https://spreadsheets.google.com/feeds/list/1GvVRM4YQgG5vMIA_p453OByxwNFP4daER7aHthI9nhE/od6/public/values?alt=json";


                    klon.querySelector(".id").textContent = person.gsx$id.$t;
                    klon.querySelector(".info").textContent = person.gsx$info.$t;

                    klon.querySelector(".boomerang").textContent = person.gsx$boomerang.$t;
                    //* klon.querySelector(".artistinstagram").textContent = person.gsx$artistinstagram.$t;
                    //* klon.querySelector(".artistyoutube").textContent = person.gsx$artistyoutube.$t;
                    //*  klon.querySelector(".artistgiphy").textContent = person.gsx$artistgiphy.$t;
                    //* klon.querySelector(".artistwebsite").textContent = person.gsx$artistwebsite.$t;
                    //* klon.querySelector(".artistshop").textContent = person.gsx$artistshop.$t;

                    //* klon.querySelector(".boomerang").textContent = person.gsx$boomerang.$t;
                    klon.querySelector(".pris").textContent = person.gsx$pris.$t;

                    //-------------------------------------------------------------------------------------------------------------------------------------//



                    async function loadJSON() {
                        const JSONData = await fetch(link);
                        personer = await JSONData.json();
                        addEventListenersToButons();
                        vis(personer);
                        document.querySelector("#luk").addEventListener("click", () => popup.style.display = "none");
                    }



                    //-------------------------------------------------------------------------------------------------------------------------------------//



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



                    //-------------------------------------------------------------------------------------------------------------------------------------//



                    function visDetaljer(person) {
                        popup.style.display = "block";
                        popup.querySelector("h2").textContent = person.gsx$id.$t;
                        popup.querySelector(".pris").textContent = person.gsx$pris.$t;
                        popup.querySelector(".instagram").textContent = person.gsx$artistinstagram.$t;
                        popup.querySelector(".instagram").href = person.gsx$artistinstagram.$t;
                        popup.querySelector(".youtube").textContent = person.gsx$artistyoutube.$t;
                        popup.querySelector(".youtube").href = person.gsx$artistyoutube.$t;
                        popup.querySelector(".giphy").textContent = person.gsx$artistgiphy.$t;
                        popup.querySelector(".giphy").href = person.gsx$artistgiphy.$t;
                        popup.querySelector(".website").textContent = person.gsx$artistwebsite.$t;
                        popup.querySelector(".website").href = person.gsx$artistwebsite.$t;
                        popup.querySelector(".shop").textContent = person.gsx$artistshop.$t;
                        popup.querySelector(".shop").href = person.gsx$artistshop.$t;
                        popup.querySelector("img").src = "img/kvadratisk/" + person.gsx$image.$t + ".jpg";
                    }



                    //-------------------------------------------------------------------------------------------------------------------------------------//



                    function addEventListenersToButons() {
                        document.querySelectorAll(".filter").forEach((btn) => {
                            btn.addEventListener("click", filterBTNs);
                        })
                    }



                    //-------------------------------------------------------------------------------------------------------------------------------------//



                    function filterBTNs() {
                        filter = this.dataset.kategori;



                        document.querySelector("h1").textContent = this.textContent;



                        document.querySelectorAll(".filter").forEach((btn) => {



                            btn.classList.remove("valgt");
                        })



                        this.classList.add("valgt");



                        vis(personer);
                    }
