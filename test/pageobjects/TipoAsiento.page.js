class TipoAsiento{

get TipoAseinto() {return $('//div[@data-test="SeatingSelectOptionDesktop-window"]')}
get Titulo() {return $('//div[@data-test="SeatingDesktop"]//p[text()="Seating for your outbound journey"]')}
get BotonContinuar() {return $('//button[@data-test="StepControls-AdditionalService-next"]')}

getTitulo(){
    return this.Titulo;
}

IrTipoAsiento(){
    browser.pause(5000);

    this.TipoAseinto.click();
}

IrACancelarTiquete(){
    this.BotonContinuar.click();
}




}
module.exports = new TipoAsiento();
