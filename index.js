// Milestone 2

// Utilizzando Postman, testiamo una chiamata all’endpoint di JSON Placeholder:
// https://jsonplaceholder.typicode.com/photos?_limit=6
// Studiamo bene la risposta e i dati che ci fornisce iniziando a pensare a come poterli sfruttare.

console.log('ciao');

const photosEl = document.querySelector('.photos')

axios.get("https://jsonplaceholder.typicode.com/photos?_limit=6")
.then(response => {

    const photos = response.data 
    console.log(photos);
    

}).catch(err => console.error(err))
