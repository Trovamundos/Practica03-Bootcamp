//EJERCICIO

const product = {
    count: 3,
    price:12.55,
    type:'ropa',
};

const total = product.count >= 1 ? product.count * product.price : console.log('Debe seleccionar al menos un producto');
console.log(`Total sin iva ${total.toFixed(2)}€.`);

let typeIva;

switch (product.type){
    case 'alimentacion': typeIva = 0.1;
    break;
    case 'libro': typeIva = 0.04;
    break;
    case 'ropa': typeIva = 0.21;
    break;
}

const iva = total * typeIva;
console.log(`Se aplica un IVA de ${iva.toFixed(2)}€.`);

const totalIva = total + iva;
console.log(`Total + iva = ${totalIva.toFixed(2)}€.`);

//=====================================================
//EXTRA 1

const empleado = {
    bruto: 14500,
    hijos: 2,
    pagas: 14,
}

/*
const empleado = {
    bruto: prompt('Introduzca el salario bruto anual'),
    hijos: prompt('Introduzca nº de hijos'),
    pagas: prompt('Introduzca nº pagas'),
}
*/

let irpf;

if(empleado.bruto < 12000) {
    irpf = 0;
} else if (empleado.bruto >= 12000 && empleado.bruto < 24000) {
    irpf = 0.08;
} else if (empleado.bruto >= 24000 && empleado.bruto < 34000) {
    irpf = 0.16;
} else {
    irpf = 0.3;
}

const nHijos = empleado.hijos >=1 ? 0.02 : 'No se aplica reducción por hijos';

const retencion = empleado.hijos >=1 ? irpf - nHijos :irpf;
console.log(`El total retenido es del ${retencion * 100}%.`);

const retencionBruto = empleado.bruto * retencion;

const neto = empleado.bruto - retencionBruto;
console.log(`El salario neto anual es de ${neto.toFixed(2)}€.`);

let netoMes;

if (empleado.pagas == 12) {
    netoMes = neto / 12;
    console.log(`El salario neto mensual es de ${netoMes.toFixed(2)}€.`);
} else {
    netoMes = neto / 14;
    console.log(`El salario neto mensual es de ${netoMes.toFixed(2)}€ más dos pagas extra.`);
}