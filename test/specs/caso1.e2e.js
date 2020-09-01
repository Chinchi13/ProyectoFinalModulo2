const Principal = require('../pageobjects/Principal.page');
const ResultadoViajes = require('../pageobjects/ResultadoViajes.page');
const dataCaso1 = require('../data/dataCaso1');
describe('Buscar un viaje return familiar', () => {

    before(()=>{
        browser.url('https://www.kiwi.com/es');
        console.log('URL establecida');
        browser.maximizeWindow();
    })
    
    it('Seleccionar lugar de Origen', () => {
        browser.setTimeout({ 'pageLoad': 5000 });
        Principal.BuscarLugarOrigen(dataCaso1.LugarOrigen);
    });
    it('Seleccionar lugar de Destino', () => {
        Principal.BuscarLugarDestino(dataCaso1.LugarDestino);
    });

    it('Seleccionar cantidad de pasajeros', () =>{
    Principal.SeleccionarPasajeros();
    });

    it('Seleccionar fecha salida y fecha regreso', () =>{
        Principal.SeleccionarFechasSalidaRegreso();
    });

    it('Buscar vuelos', () =>{
        Principal.BuscarVuelos();
    })

    it('Vuelos Disponibles', () =>{
        expect(browser).toHaveUrlContaining('aeropuerto-de-berlin-tegel-berlin-alemania/londres-reino-unido');
        expect(ResultadoViajes.VuelosDisponibles()).toBeDisplayed();
        browser.pause(30000);
        expect(ResultadoViajes.VuelosDisponibles()).toBeElementsArrayOfSize({gte:1});
    })

    

});


