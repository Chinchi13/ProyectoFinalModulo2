const ResultadoViajes = require('../pageobjects/ResultadoViajes.page');
const DetallePasajero = require('../pageobjects/DetallePasajero.page');
const DetalleTicket = require('../pageobjects/DetalleTicket.page');
const TipoAsiento = require('../pageobjects/TipoAsiento.page');
const PagoTiquete = require('../pageobjects/PagoTiquete.page');
const dataCaso3 = require('../data/dataCaso3');

describe('Usar la barra para filtar viajes', () => {

    before(()=>{
        browser.url('https://www.kiwi.com/us/search/results/berlin-tegel-berlin-germany/london-united-kingdom/2020-10-01_2020-10-31/2020-10-01_2020-10-31');
        console.log('URL establecida para el caso 3');
        browser.maximizeWindow();

    })
    it('Ir al detalle del vuelo', () =>{
       ResultadoViajes.DetallePasajero();
    })

    it('Ingresar Correo y telefono', ()=>{
        DetallePasajero.IngresarCorreo_Telefono(dataCaso3.Email, dataCaso3.Telefono);
     })
     
     it('Ingresar Nombre Completo',()=>{
        DetallePasajero.IngresarNombreCompleto(dataCaso3.Nombre, dataCaso3.Apellido);
     })

     it('Ingresar Nacionalidad',()=>{
        browser.pause(2000);
        DetallePasajero.IngresarNacionalidad(dataCaso3.Nacionalidad);
     })
     it('Ingresar Fecha Nacimiento',()=>{
        browser.pause(2000);
        DetallePasajero.IngresarFechaNacimiento(dataCaso3.MesNacimiento, dataCaso3.DiaNacimiento, dataCaso3.AñoNacimiento);
     })

     it('Ingresar Genero',()=>{
        browser.pause(2000);
        DetallePasajero.IngresarGenero(dataCaso3.Genero);
     })
     it('Ingresar Pasaporte',()=>{
        browser.pause(2000);
        DetallePasajero.IngresarPasaporte(dataCaso3.NumeroPasaporte);
     })
     it('Continuar a Detalle Ticket',()=>{
        browser.pause(2000);
        DetallePasajero.IraDetalleTicket();

     })

     it('Seleccionar tarifa del ticket',()=>{
        
      expect(DetalleTicket.getTarifaTiqueteLabel()).toBeDisplayed();
      DetalleTicket.SeleccionarTarifa();

     })
     it('Seleccionar el tipo de asiento', () =>{
      expect(TipoAsiento.getTitulo()).toBeDisplayed();
            TipoAsiento.IrTipoAsiento();
     })

     it('Continuar hacer Pago', ()=>{
        TipoAsiento.IrACancelarTiquete();

     })

     it('Validacion de Informacion', () =>{
       browser.setTimeout({'implicit':6000})
       expect(PagoTiquete.getInformacionPasajero()).toBeDisplayed();
       browser.saveScreenshot('./test/resources/SC/PantallaPago.png');
       PagoTiquete.getValidarNombre(dataCaso3.ValidacionNombre);
       PagoTiquete.getValidarCorreo(dataCaso3.Email);
       expect(PagoTiquete.getInformacionPago()).toBeDisplayed();
       expect(browser).toHaveUrlContaining('berlin-tegel-berlin-germany%2Flondon-united-kingdom%2F2020-10-01_2020-10-31%2F2020-10-01_2020-10-31');

     })
});