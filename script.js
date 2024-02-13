
function calculo() {
    var valorHora = Number(document.querySelector('input#horaTrabalhada').value)
    var totalHoras = Number(document.querySelector('input#totalHoras').value)
    var resultado = document.querySelector('div#resultado')
    var salario = valorHora * totalHoras
    var IR = 0
    var descontoIR = 0
    var INSS = 10
    var descontoINSS = salario *  (INSS / 100)
    var FGTS = 11
    var adicionalFGTS = FGTS/100 * salario
    if (salario <= 900 ) {
        resultado.innerHTML = `O valor é insento de descontos.`
    } else if (salario <= 1500) {
        IR = 5
        descontoIR = salario * (IR / 100)
        
        resultado.innerHTML = 
        `Salário bruto (${valorHora} * ${totalHoras}): ${salario}<br>
        (-)IR (${IR}%): ${descontoIR}<br>
        (-)INSS (${INSS}%): ${descontoINSS}<br>
        FGTS (${FGTS}%): ${adicionalFGTS}<br>
        Total de descontos: ${descontoIR + descontoINSS}<br>
        Salário líquido: ${salario - descontoIR - descontoINSS + adicionalFGTS}`
    } else {
        IR = 5
        descontoIR = salario * (IR / 100)
        
        resultado.innerHTML = 
        `Salário bruto (${valorHora} * ${totalHoras}):  R&#36;${salario}<br>
        (-)IR (${IR}%): R&#36;${descontoIR}<br>
        (-)INSS (${INSS}%): R&#36;${descontoINSS}<br>
        FGTS (${FGTS}%): R&#36;${adicionalFGTS}<br>
        Total de descontos: R&#36;${descontoIR + descontoINSS}<br>
        Salário líquido: R&#36;${salario - descontoIR - descontoINSS + adicionalFGTS}`
    }

}
            