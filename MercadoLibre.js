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
