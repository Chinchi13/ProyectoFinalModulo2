const ResultadoViajes = require('../pageobjects/ResultadoViajes.page');




describe('Usar la barra para filtar viajes', () => {

    before(()=>{
        browser.url('https://www.kiwi.com/us/search/results/berlin-tegel-berlin-germany/london-united-kingdom/2020-10-01_2020-10-31/2020-10-01_2020-10-31');
        console.log('URL establecida para el caso 2');
        browser.maximizeWindow();

    })
    it('Vuelos Disponibles', () =>{
        browser.setTimeout({'implicit':10000})
        expect(browser).toHaveUrlContaining('2020-10-01_2020-10-31/2020-10-01_2020-10-31');
        expect(ResultadoViajes.VuelosDisponibles()).toBeDisplayed();
        browser.setTimeout({'implicit':6000})
        expect(ResultadoViajes.VuelosDisponibles()).toBeElementsArrayOfSize({gte:1});
    })
    it('Seleccionar el transporte', () =>{
        browser.setTimeout({'implicit':10000})
        ResultadoViajes.SeleccionarTransporteBus();
    })
    it('Verificar que no se encuentren resultados de viajes', ()=>{
        browser.setTimeout({'implicit':6000})
        expect(ResultadoViajes.getSinResultadosTexto()).toBeDisplayed();
        expect(browser).toHaveUrlContaining('transport=bus');

    })
    it('Agregar Tren',()=>{
        ResultadoViajes.AgregarTransporteTren();
        expect(browser).toHaveUrlContaining('2Ctrain');

    })
    it('Validar lista de viajes disponibles', ()=>{
        expect(ResultadoViajes.VuelosDisponibles()).toBeDisplayed();
        browser.setTimeout({'implicit':6000})
        expect(ResultadoViajes.VuelosDisponibles()).toBeElementsArrayOfSize({gte:1});
    })
});