/**
 *  Desenvolvido por Gustavo Fontolan
 *  Funcao para transformar numero em valores por escrito
 * 
 *  Valor: 31558 | Resultado: 32 mil
 *  Valor: 315508 | Resultado: 316 mil
 *  Valor: 3100558 | Resultado: 3.1 mi
 *  Valor: 5255560558 | Resultado: 5.3 bi
 */

const numberLong = ['mil', 'mi', 'bi', 'tri'];

export const numberToText = (value) => {
    let size = value.length;

    let casas = size / 3;
    let casa = Math.ceil(casas) - 1;

    if (casas <= 1) {
        return value;
    }

    let div = (Math.pow(1000, casa));
    let result = (value / div).toFixed(1).toString();
    let index = result.length;

    if (casa < 2) {
        return (value / div).toFixed(0) + ' ' + numberLong[casa - 1];
    } else {
        if (result[index - 1] == '0') {
            return (value / div).toFixed(0) + ' ' + numberLong[casa - 1];
        } else {
            return (value / div).toFixed(1) + ' ' + numberLong[casa - 1];
        }
    }
}
