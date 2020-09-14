        let filter = "alle";

        let personer;

        let container = document.querySelector("section");
        let temp = document.querySelector("template");

        document.addEventListener("DOMContentLoaded", loadJSON);

        //-------------------------------------------------------------------------------------------------------------------------------------//

        const link = "https://spreadsheets.google.com/feeds/list/1GvVRM4YQgG5vMIA_p453OByxwNFP4daER7aHthI9nhE/od6/public/values?alt=json";

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
                    klon.querySelector(".boomerang").textContent = person.gsx$boomerang.$t;
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
            popup.querySelector("h3").textContent = person.gsx$navn.$t;
            popup.querySelector("h2").textContent = person.gsx$id.$t;
            popup.querySelector(".pris").textContent = person.gsx$pris.$t;
            popup.querySelector(".oprindelse").textContent = person.gsx$oprindelse.$t;
            popup.querySelector(".lang").textContent = person.gsx$lang.$t;
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
