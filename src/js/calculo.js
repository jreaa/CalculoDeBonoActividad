window.addEventListener('load', function (){
    const i1 = document.getElementById("ingreso1");
    const i2 = document.getElementById("ingreso2");
    const i3 = document.getElementById("ingreso3");
    const i4 = document.getElementById("ingreso4");
    
    const value = "Calculado...";

    let calculo = document.getElementById("calculo");

    i1.addEventListener("blur", function() {
        calculo.append(value);
        if(i1.value != '' && i2.value != '' && i3.value != '' && i4.value != ''){
            calculoVerify();
        }
    });
    i2.addEventListener("blur", function() {
        if(i1.value != '' && i2.value != '' && i3.value != '' && i4.value != ''){
            calculoVerify();
        }
    })
    i3.addEventListener("blur", function() {
        if(i1.value != '' && i2.value != '' && i3.value != '' && i4.value != ''){
            calculoVerify();
        }
    })

    i4.addEventListener("blur", function() {
        if(i1.value != '' && i2.value != '' && i3.value != '' && i4.value != ''){
            calculoVerify();
        }
    })

    function calculoVerify() {
        const mesJulio = document.getElementById("mesJulio");
        const declaracionJurada = document.getElementById("declaracionJurada");
        let periodototal = document.getElementById("periodototal");
        let ecuacion = Math.floor((parseInt(i1.value)+parseInt(i2.value)+parseInt(i3.value)+parseInt(i4.value))/12);
        calculo.removeChild(calculo.firstChild);

        if(ecuacion >= 400 && ecuacion <= 2000){
            calculo.append("Cumple con el requisito");
            periodototal.value = ecuacion;
            mesJulio.style.display = "block";
            declaracionJurada.style.display = "block";
        }else{
            calculo.append("No cumple con el requisito");
            periodototal.value = "";
            mesJulio.style.display = "none";
            declaracionJurada.style.display = "none";
        }
    }
});