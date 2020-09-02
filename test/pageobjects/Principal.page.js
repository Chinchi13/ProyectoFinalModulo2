const { Console } = require("console")

class Principal{

get ViajesLabel() {return $('span.Links__Label-sc-17vwg4-1.hQEAKQ')}
get XLugarOrigen () {return $('//div[@data-test="PlacePickerInputPlace-close"]')}
get LugarOrigenTxt() {return $('//div[@data-test="PlacePickerInput-origin"]/input')}   
get LugarOrigenOpcion() {return $('div.PlacePickerstyled__PlacePickerItemName-hrtzfp-6.jVKPfo')}
get LugarDestinoTxt() {return $('//div[@data-test="PlacePickerInput-destination"]/input')}
get LugarDestinoOpcion() {return $('div.PlacePickerstyled__PlacePickerItemName-hrtzfp-6.jVKPfo')}
get BtnPasajeros() {return $('//div[@data-test="PassengersField"]')}
get BtnMasPasajerosAdultos() {return $('//div[@data-test="PassengersRow-adults"]//button[@aria-label="increment"]')}
get BtnMasPasajerosninos() {return $('//div[@data-test="PassengersRow-children"]//button[@aria-label="increment"]')}
get BtnMasPasajerosinfantes() {return $('//div[@data-test="PassengersRow-infants"]//button[@aria-label="increment"]')}
get BtnConfirmarPasajeros() {return $('//button[@data-test="PassengersFieldFooter-done"]')}
get Calendario() {return $('input[name="search-outboundDate"]')}
get FechaSalida() {return $('//div[@data-value="2020-09-09"]')}
get FechaRegreso() {return $('//div[@data-value="2020-09-23"]')}
get BtnEstablecerFechas() {return $('//button[@data-test="SearchFormDoneButton"]')}
get BtnExplorar() { return $('[data-Test=LandingSearchButton]')}

getTitulo(){
    expect(this.ViajesLabel).toBeDisplayed();

}

SeleccionarViajes(){
    browser.pause(5000);
    this.ViajesLabel.click();
    console.log(this.ViajesLabel.getText());

}

BuscarLugarOrigen(LugarOrigen){
    this.XLugarOrigen.click();
    this.LugarOrigenTxt.setValue(LugarOrigen);
    browser.pause(6000);
    this.LugarOrigenOpcion.click();
}
BuscarLugarDestino(lugarDestino){
    this.LugarOrigenTxt.click();
    this.LugarDestinoTxt.setValue(lugarDestino);
    browser.pause(2000);
    this.LugarDestinoOpcion.click();
}

SeleccionarPasajeros(){
    this.BtnPasajeros.click();
    this.BtnMasPasajerosAdultos.click();
    this.BtnMasPasajerosninos.click();
    this.BtnMasPasajerosninos.click();
    this.BtnMasPasajerosninos.click();
    this.BtnMasPasajerosinfantes.click();
    this.BtnConfirmarPasajeros.click();
}

SeleccionarFechasSalidaRegreso(){
    this.Calendario.click();
    this.FechaSalida.click();
    this.FechaRegreso.click();
    this.BtnEstablecerFechas.click();

}

BuscarVuelos(){
    this.BtnExplorar.click();
}


}

module.exports = new Principal();
