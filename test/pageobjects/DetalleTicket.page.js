
class DetalleTicket{

get TarifaTiqueteLabel() { return $('//div[@class="Heading__StyledHeading-sc-1b8cso5-0 iwwaAe"]')}
get BotonTarifaFlexi() {return $('//button[@data-test="fareTypesFlexiButton"]')}

getTarifaTiqueteLabel(){
    return this.TarifaTiqueteLabel;
}

SeleccionarTarifa(){
    this.BotonTarifaFlexi.click();
}

}



module.exports = new DetalleTicket();
