var btn=document.getElementById("Extraer");
var txtdinero=document.getElementById("cantidadDinero");
var result=document.getElementById("resultado");
btn.addEventListener("click",calcularBilletes);


class Billete{

constructor(valor,cantidad){//para el constructor se debe escribir asi "constructor"
   this.valor=valor;
   this.cantidad=cantidad;
}


}

cajaMenor=[];//en este array se contendra la cantodad de billetes que tendra el cajero
cajaMenor.push(new Billete(50,3));
cajaMenor.push(new Billete(20,2));
cajaMenor.push(new Billete(10,2));

entregar=[];//variable para almacenar el dinero que se va a entregar

function calcularBilletes(){
resultado.innerHTML="";//cada vez que se llam la funcion se resetea el resultado
dinero=parseInt(txtdinero.value);//aqui se almacenara lo dogitado en la caja de texto
papeles=0;//aqui se almacenar el numero de billetes de cada valor
div=0;//aqui se realizara el calculo del valor a retirar / el valor del billete

for (var b of cajaMenor){//for each para cada elemento almacenado en cajaMenor se ejecutara el siguiente codigommmmmm
	 
	if(dinero>0){//dinero debe ser mayor a cero para que entre en el condicional
		
       div=Math.floor(dinero/b.valor);//div es el resultado de la division entre el dinero a retirar y el valor del billete asi se conocera el numero de billetes de esa denominacion
      
       if(div>b.cantidad){//ahora si div es mator a cantidad es porque el cajero no tiene ese numero de billetes
       	
			papeles=b.cantidad;//y si es asi se asignara todos los billetes que esten disponibles
       }else{
       papeles=div;//de ko contrario div es menor, asi que se asignan los billetes que correspondan l dindero solicitado
       }
    
    entregar.push(new Billete(b.valor,papeles));//despues de validar por cada billete y calculado el numero de billtes a cada valor solicitado se agrega
    //al array entregar, donde se almacena los ovjs de tipo billete con su valor y cantidad de billetes
    dinero=dinero-(papeles*b.valor);//despues de todo se resta el valor entregado ciclicamente,lo cual resulta entre papeles y el valor del billete
    resultado.innerHTML+="Denominacion: "+b.valor+" No.Billetes: "+papeles+"<br/>"
}
    

    
}
}






