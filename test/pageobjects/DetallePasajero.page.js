class DetallePasajero{

get TituloLabel() { return $('//div[@data-test="ReservationHead"]')}
get Email(){return $('//input[@name="email"]')}
get Telefono(){return $('//input[@name="phone"]')}
get Nombre() {return $('//input[@name="firstname"]')}
get Apellido() {return $('//input[@name="lastname"]')}
get Nacionalidad() {return $('//select[@name="nationality"]')}
get Genero() {return $('//select[@name="title"]')}
get MesNacimiento() {return $('//select[@name="birthMonth"]')}
get DiaNacimiento() {return $('//input[@name="birthDay"]')}
get AñoNacimiento() {return $('//input[@name="birthYear"]')}
get NumeroPasaporte() {return $('//input[@name="idNumber"]')}
get VencimientoPasaporte (){return $('//input[@name="idNoExpiration"]/ancestor::label')}
get MesVencimientoPasaporte() {return $('//select[@name="idExpirationMonth"]')}
get VencimientoDiaPasaporte() {return $('//input[@name="idExpirationDay"]')}
get VencimientoAnioPasaporte(){return $('//input[@name="idExpirationYear"]/ancestor::div[@class="InputField__InputContainer-sc-4opay-2 fUhyIo"]')}
get BotonContinuar() { return $('//button[@data-test="StepControls-passengers-next"]')}

Titulo(){
    return this.TituloLabel;
}

IngresarCorreo_Telefono(email, telefono){
    browser.pause(3000);
    this.Email.scrollIntoView();
    this.Email.setValue(email);
    this.Telefono.setValue(telefono);
}
IngresarNombreCompleto(nombre, apellido){
    this.Nombre.click();
    this.Nombre.setValue(nombre);
    this.Apellido.click();
    this.Apellido.setValue(apellido);
   
}

IngresarNacionalidad(nacionalidad){
    this.Nacionalidad.selectByAttribute('value', nacionalidad);
}

IngresarFechaNacimiento(mes, dia, anio){
    this.MesNacimiento.selectByAttribute('value', mes);
    this.DiaNacimiento.click();
    this.DiaNacimiento.setValue(dia);
    this.AñoNacimiento.click();
    this.AñoNacimiento.setValue(anio);
}

IngresarGenero(genero){
    this.Genero.selectByAttribute('value',genero);

}
IngresarPasaporte(numPasaporte){
     this.NumeroPasaporte.click();
     this.NumeroPasaporte.setValue(numPasaporte);
     this.VencimientoPasaporte.click();

  }

IraDetalleTicket(){
    this.BotonContinuar.click();
}

} 
module.exports = new DetallePasajero();
