const form = document.querySelector('#form');

form.addEventListener('submit', function(e) {

    e.preventDefault(); 
    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');
    

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if (!peso || !altura) {
        setResultado('Peso ou Altura Inválidos - Confira se você deixou os campos vazios, ou digitou algum caractere que não é NÚMERO!', false);
        return;
    }

    const imc = getIMC(peso, altura);
    const nivelImc = getNivelImc(imc);

    const msg =  `<p><hr></p>Seu IMC é ${imc} (${nivelImc}).<p><hr></p>`

    setResultado(msg, true);
});

    function getNivelImc (imc) {
        const nivel = [
            'Abaixo do peso',
            'Peso normal',
            'Sobrepeso',
            'Obesidade Grau I',
            'Obesidade Grau II',
            'VAI MORRER NOVO! - OBESIDADE MÓRBIDA'
        ];

        if (imc >= 39.9) return nivel[5];
        
        if (imc >= 34.9) return nivel[4];
        
        if (imc >= 29.9) return nivel[3];
        
        if (imc >= 24.9) return nivel[2];
        
        if (imc >= 18.9) return nivel[1];
        
        if (imc < 18.5) return nivel[0];
        
    }

    function getIMC (peso, altura) {
        const imc = peso / (altura ** 2);
        return imc.toFixed(2);
    }


function criaP () {

    const p = document.createElement('p');
    return p;
}

function setResultado (msg, isValid) {

    const restultado = document.querySelector('#resultado');
    resultado.innerHTML = ''; 
    
    const p = criaP();

    if (isValid) {
        p.classList.add('paragrafo-resultado');
    } else {
        p.classList.add('bad');
    }
        

    p.innerHTML = msg;
    resultado.appendChild(p);
}









