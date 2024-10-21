// Milestone 2

// Utilizzando Postman, testiamo una chiamata all’endpoint di JSON Placeholder:
// https://jsonplaceholder.typicode.com/photos?_limit=6
// Studiamo bene la risposta e i dati che ci fornisce iniziando a pensare a come poterli sfruttare.

const rowEl = document.querySelector(".row");

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
                <p>${title}</p>
               </div>

            </div>
    </div>
    `
      photoElements += markup;
    });

    rowEl.innerHTML = photoElements;
  })
  .catch((error) => {
    console.error(error);
  });