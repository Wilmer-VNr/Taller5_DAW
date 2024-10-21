// TALLER 5
// PAGINA SELECCIONADA -> MERCADO LIBRE

const urlML = "https://api.mercadolibre.com/sites/MLA/search?q=celulares";

fetch(urlML)
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));




const getMercadoLibreData = async () => {
    try {
        let response = await fetch("https://api.mercadolibre.com/sites/MLA/search?q=celulares");
        let data = await response.json();
        console.log(data);
        
    } catch (error) {
        console.log(error);
    }
};

getMercadoLibreData();


// PROMESAS
// FETCH - THEN - TRY Y CATCH

const url = "https://api.mercadolibre.com/sites/MLA/search?q=celulares"


fetch(url)
    .then((response) => response.json())
    .then((data) => {
        console.log("Datos obtenidos:");
        console.log(data);
    })
    .catch((error) => console.log("Error:", error));


// AWAIT Y ASYCN 

const getMercadoLibreDatos = async () => {
    try {
        let response = await fetch("https://api.mercadolibre.com/sites/MLA/search?q=celulares")
        let data = await response.json();
        console.log("Datos obtenidos con Async/Await:");
        console.log(data);
    } catch (error) {
        console.log("Error con Async/Await:", error);
    }
};

getMercadoLibreDatos();
