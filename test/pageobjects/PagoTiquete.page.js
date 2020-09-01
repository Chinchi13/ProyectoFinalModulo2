class PagoTiquete{
 get InformacionPago (){ return $('//div[@data-test="ReservationPaymentForm"]')}
 get InformacionPasajero (){return $('//div[@class="PassengersOverview__PassengersOverviewWrapper-h152xh-0 bnOLXU"]')}
 get ValirdarNombre() {return $('//div[@id="react-view"]/div[3]/div/div/div/div/form/div/div[2]/div/div/div/div[2]/div/div/div/div/div[2]/div/span')}
 get ValidarCorreo() {return $('//div[@class="SummaryPassengersContact__ItemWrapper-sc-1dsvx02-0 fgMgDf"]')}



getInformacionPago(){
    return this.InformacionPago;
}
getInformacionPasajero(){
    return this.InformacionPasajero;
}

getValidarNombre(nombre){
    expect(this.ValirdarNombre).toHaveTextContaining(nombre);
}

getValidarCorreo(correo){
    expect(this.ValidarCorreo).toHaveTextContaining(correo);

}



}module.exports = new PagoTiquete();
