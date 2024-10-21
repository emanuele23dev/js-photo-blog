// Milestone 2

// Utilizzando Postman, testiamo una chiamata all’endpoint di JSON Placeholder:
// https://jsonplaceholder.typicode.com/photos?_limit=6
// Studiamo bene la risposta e i dati che ci fornisce iniziando a pensare a come poterli sfruttare.

const rowEl = document.querySelector(".row");

const overlayEl = document.querySelector(".overlay");

const closeButtonEl = document.querySelector(".button-close");

axios
  .get("https://jsonplaceholder.typicode.com/photos?_limit=6")

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
                <p>${title}</p>
               </div>

            </div>
    </div>
    `;
      photoElements += markup;
    });

    rowEl.innerHTML = photoElements;

    const photosElements = rowEl.querySelectorAll(".photos");

    photosElements.forEach((photoElement) => {
      photoElement.addEventListener("click", function() {
        overlayEl.style.visibility = "visible";
      });
    });

    closeButtonEl.addEventListener("click", function() {
      overlayEl.style.visibility = "hidden";
    });
    
  });
