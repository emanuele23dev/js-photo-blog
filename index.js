// Milestone 2

// Utilizzando Postman, testiamo una chiamata all’endpoint di JSON Placeholder:
// https://jsonplaceholder.typicode.com/photos?_limit=6
// Studiamo bene la risposta e i dati che ci fornisce iniziando a pensare a come poterli sfruttare.

const rowEl = document.querySelector(".row");

const overlayEl = document.querySelector(".overlay");

axios.get("https://jsonplaceholder.typicode.com/photos?_limit=6")
  .then((response) => {
    const photos = response.data;
    console.log(photos);

    let photoElements = "";

    photos.forEach((photo) => {
      const { url, title } = photo;
      console.log(url, title);

      const markup = `
 <div class="col-4 photos">
     <div class="polaroid">
        <img width="25px" class="pin" src="./img/pin.svg" alt="">
        <div class="quadrato">
          <img src="${url}" alt="">
        </div>
        <div class="text text-center mt-3">
          <p>${title.charAt(0).toUpperCase() + title.slice(1)}</p>
        </div>
     </div>
 </div>
    `;
      photoElements += markup;
    });

    rowEl.innerHTML = photoElements;

    const photosElements = rowEl.querySelectorAll(".photos");

    photosElements.forEach((photoElement, index) => {
      photoElement.addEventListener("click", function () {
        overlayEl.style.visibility = "visible";
        overlayEl.innerHTML = `
        <img class="mt-5 mb-5 overlay-img" src="${photos[index].url}" alt="" />
        <div class="button-close">
            <button class="btn btn-light mb-5">Close</button>
        </div>
    `;
        const closeButtonEl = overlayEl.querySelector(".button-close button");
        closeButtonEl.addEventListener("click", () => {
          overlayEl.style.visibility = "hidden";
        });

      });

    });
    
  });
