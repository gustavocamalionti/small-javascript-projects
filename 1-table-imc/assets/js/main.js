function exec() {
    const form = window.document.querySelector('#form');


    form.addEventListener('submit', function (e) {
      
        e.preventDefault();

       
        const weightKg = form.querySelector('#weightKg').value;
        const heightM = form.querySelector('#heightM').value;
        const imc = calcIMC(weightKg, heightM);

       
        if (!weightKg) {
            setResults(imc, 'Peso Inválido!', false);
            return;
        }

        if (!heightM) {
            setResults(imc, 'Altura Inválida!', false);
            return;
        }

        if(!imc || imc === 'NaN' || imc === 'undefined' || imc === 'Infinity') {
            setResults(imc, 'Cálculo de IMC Inválido!', false);
            return;
        }
    
        const nivelImc = getNivelImc(imc);

        setResults(imc, nivelImc, true);

    })
}

function getNivelImc(imc) {
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];
    if (imc < 18.5) {
        return nivel[0];
    }

    if (imc >= 18.5 && imc < 24.9) {
        return nivel[1];
    }

    if (imc >= 24.9 && imc < 29.9) {
        return nivel[2];
    }

    if (imc >= 29.9 && imc < 34.9) {
        return nivel[3];
    }

    if (imc >= 34.9 && imc < 39.9) {
        return nivel[4];
    }

    if (imc >= 39.9) {
        return nivel[5];
    }
}

function calcIMC(weightKg, heightM) {
    return Number(weightKg / (heightM ** 2)).toFixed(2);
}

function setResults(imc, msg, isValid = true) {
    const divResult = document.querySelector('#divResult');
    if (isValid) {
        divResult.innerHTML = `<p class="success">Seu IMC é <strong>${imc}</strong> (${msg})</p>`;
    } else {
        divResult.innerHTML = `<p class="error">${msg}</p>`;
    }
}

exec();

