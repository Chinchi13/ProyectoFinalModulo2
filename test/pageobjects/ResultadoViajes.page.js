class ResultadoViajes{

    get Listaviajes () {return $('[data-test=ResultList]').$$('[data-test=ResultCardWrapper]')}
    get CheckBoxTransporteBus() { return $('//input[@data-test="TransportOptionCheckbox-bus"]/ancestor::label')}
    get CheckBoxTransporteTrain() { return $('//input[@data-test="TransportOptionCheckbox-train"]/ancestor::label')}
    get CheckBoxTransporteFlight() { return $('//input[@data-test="TransportOptionCheckbox-aircraft"]/ancestor::label')}
    get SinResultadosTexto() {return $('//div[@class="NoResultsstyled__NoResultsFiltersWrapper-sc-9bkg22-5 iqJlfI"]')}
    get BtnLibro(){ return $('.ResultCardcommonstyled__ResultCardWrapperCommon-tdu3nb-1:nth-child(2) .BookingButtonstyled__BookingButtonWrapper-sc-13kc164-0 .ButtonPrimitiveContentChildren__StyledButtonPrimitiveContentChildren-xn0ytv-0')    }    
    VuelosDisponibles(){
        return this.Listaviajes;
    }

   SeleccionarTransporteBus(){
      this.CheckBoxTransporteTrain.click();
      this.CheckBoxTransporteFlight.click();
    }

    getSinResultadosTexto(){   
     return this.SinResultadosTexto;
    }

    AgregarTransporteTren(){
        this.CheckBoxTransporteTrain.click();
    }

    DetallePasajero()
    {
        this.BtnLibro.click();
    }
}
module.exports = new ResultadoViajes();
