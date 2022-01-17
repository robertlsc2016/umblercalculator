var moment = require('moment');
moment().locale('pt-br')

// $('.preco').mask('00,00', {reverse: true});

main = () => {
    console.log('ok')

    const dataInicialPlano = moment(document.getElementById('dataInicial').value)
    const dataFinalPlano = moment(document.getElementById('dataFinal').value)

    const dataUsadoPlano = moment(document.getElementById('dataUsado').value)
    const dataContabilizacao = moment(document.getElementById('dataContabilizacao').value)


    const diasPlano = dataFinalPlano.diff(dataInicialPlano, 'days')
    const diasUsados = dataUsadoPlano.diff(dataContabilizacao, 'days')



    const vPlano = document.getElementById('valordoplano').value

    const vDiario = (document.getElementById('valordoplano').value / diasPlano)

    const vUsado = (vDiario * diasUsados)

    const vRestante = (vPlano - vUsado)




    document.getElementById("saldoUsado").innerHTML = vUsado.toFixed(2)
    document.getElementById('saldoRestante').innerHTML = vRestante.toFixed(2)
    document.getElementById('vDia').innerHTML = vDiario.toFixed(2)

    document.getElementById('diasPlano').innerHTML = diasPlano
    document.getElementById('diasUsado').innerHTML = diasUsados




    console.log(diasPlano)
    console.log(vDiario)

}

somarMensal = () => {

    // .subtract(1, 'day')
    const dataAtualizar = moment(document.getElementById('dataInicial').value).add(1, 'months').format('YYYY-MM-DD')
    // console.log(moment(dataAtualizar).diff(1, 'days').format('YYYY-MM-DD') )
    document.getElementById('dataFinal').value = dataAtualizar

}


somarBimestral = () => {

    const dataAtualizar = moment(document.getElementById('dataInicial').value).add(2, 'months').format('YYYY-MM-DD')
    // console.log(moment(dataAtualizar).diff(1, 'days').format('YYYY-MM-DD') )
    document.getElementById('dataFinal').value = dataAtualizar

}

somarTrimestral = () => {

    const dataAtualizar = moment(document.getElementById('dataInicial').value).add(3, 'months').format('YYYY-MM-DD')
    // console.log(moment(dataAtualizar).diff(1, 'days').format('YYYY-MM-DD') )
    document.getElementById('dataFinal').value = dataAtualizar

}

somarSemestral = () => {

    const dataAtualizar = moment(document.getElementById('dataInicial').value).add(6, 'months').format('YYYY-MM-DD')
    // console.log(moment(dataAtualizar).diff(1, 'days').format('YYYY-MM-DD') )
    document.getElementById('dataFinal').value = dataAtualizar

}

somarAnual = () => {

    const dataAtualizar = moment(document.getElementById('dataInicial').value).add(1, 'year').format('YYYY-MM-DD')
    // console.log(moment(dataAtualizar).diff(1, 'days').format('YYYY-MM-DD') )
    document.getElementById('dataFinal').value = dataAtualizar

}



$('#dataFinal').blur(() => {
    const dataInicialPlano = moment(document.getElementById('dataInicial').value)

    const dataFinal = moment(document.getElementById('dataFinal').value)


    if (dataFinal.isBefore(dataInicialPlano)) {
        alert('O FECHAMENTO DA FATURA NÃO PODE SER ANTERIOR À ABERTURA DELA')
        document.getElementById('dataFinal').value = ''

    }

})



$('#dataContabilizacao').blur(() => {
    const dataInicialPlano = moment(document.getElementById('dataInicial').value)
    const dataFinalPlano = moment(document.getElementById('dataFinal').value)

    const dataContabilizacao = moment(document.getElementById('dataContabilizacao').value)



    if (dataContabilizacao.isBefore(dataInicialPlano)) {
        alert('A DATA DE CONTABILIZAÇÃO NÃO PODE SER ANTERIOR A DATA INICIAL DA FATURA')
        document.getElementById('dataContabilizacao').value = ''

    }

    if (dataContabilizacao.isAfter(dataFinalPlano)) {
        alert('A DATA DE CONTABILIZAÇÃO NÃO PODE SER APÓS O TÉRMINO DO FATURA')
        document.getElementById('dataContabilizacao').value = ''

    }

})



$('#dataUsado').blur(() => {
    const dataInicialPlano = moment(document.getElementById('dataInicial').value)
    const dataFinalPlano = moment(document.getElementById('dataFinal').value)

    const dataContabilizacao = moment(document.getElementById('dataContabilizacao').value)
    const dataUsado = moment(document.getElementById('dataUsado').value)


    if (dataUsado.isBefore(dataContabilizacao)) {
        alert('O CLIENTE NÃO PODE TER USADO O PLANO ANTES DA CONTABILIZACAO DA FATURA')
        document.getElementById('dataUsado').value = ''

    }

    if (dataUsado.isAfter(dataFinalPlano)) {
        alert('O CLIENTE NÃO PODE TER USADO O PLANO APÓD O FIM DO PLANO')
        document.getElementById('dataUsado').value = ''

    }


})

