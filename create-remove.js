/****************************** ADD DOG BUTTON ******************************/
const add = document.getElementById("add");
add.addEventListener("click", async () => {
    try {
        const res = await fetch("https://dog.ceo/api/breeds/image/random")
        const data = await res.json();

        const url = data.message; // URL of new dog image

        /*--------------- Get breed (Hint: Parse from URL) ---------------- */
        // Your code here
        let breed = url.split("/")[4];
        
        /*------------ Create new dog card with the url above ------------- */
        /* (use the HTML structure for the current dog image in the index.html
            file to create a new image with the url) */
        // Your code here
        let img = document.createElement("img");
        img.setAttribute("src", url);

        let capt = document.createElement("figcaption");
        capt.innerText = breed;
      
        let fig = document.createElement("figure");
        
        fig.appendChild(img);
        fig.appendChild(capt);

        let li = document.createElement("li");
        li.appendChild(fig);

        /* Add the new dog card as a child to the ul in the .gallery element */
        // Your code here
        let ul = document.querySelector("ul");
        ul.appendChild(li);

    } catch (e) {
        console.log(e.message);
        console.log("Couldn't fetch dog :(")
    }
});

/************************** REMOVE FIRST DOG BUTTON **************************/
const removeFirst = document.getElementById("remove-first");
removeFirst.addEventListener("click", () => {
    /*-------------------- Select the first dog card --------------------- */
    let first = document.querySelector("li");

    /*-------------------- Remove the first dog card --------------------- */
    first.remove();
});

/************************** REMOVE LAST DOG BUTTON ***************************/
const removeLast = document.getElementById("remove-last");
removeLast.addEventListener("click", () => {
    /*-------------------- Select the last dog card ----------------------- */
    let last = document.querySelector("ul").lastChild;

    /*-------------------- Remove the last dog card ----------------------- */
    last.remove();
});