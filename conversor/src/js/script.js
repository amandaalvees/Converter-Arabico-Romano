function arabicoParaRomano(numeroEmArabico) {
    let algarismosRomanos = [
        { valor: 1000, algarismo: "M" },
        { valor: 900, algarismo: "CM" },
        { valor: 500, algarismo: "D" },
        { valor: 400, algarismo: "CD" },
        { valor: 100, algarismo: "C" },
        { valor: 90, algarismo: "XC" },
        { valor: 50, algarismo: "L" },
        { valor: 40, algarismo: "XL" },
        { valor: 10, algarismo: "X" },
        { valor: 9, algarismo: "IX" },
        { valor: 5, algarismo: "V" },
        { valor: 4, algarismo: "IV" },
        { valor: 1, algarismo: "I" }
    ];

    let numeroEmRomano = "";
    
    if (numeroEmArabico < 1 || numeroEmArabico > 3999) return alert("Somente números entre 1 e 3999.");
    
    if (!numeroEmArabico && numeroEmArabico != 0) return "Digite um número entre 1 e 3999.";
    
    for (let i = 0; i < algarismosRomanos.length; i++) {
        while (numeroEmArabico >= algarismosRomanos[i].valor) {
            numeroEmRomano += algarismosRomanos[i].algarismo;
            numeroEmArabico -= algarismosRomanos[i].valor;
        }
    }

    return numeroEmRomano;
}

function romanoParaArabico(numeroEmRomano) {
    let algarismosRomanos = {
        "I": 1, "V": 5, "X": 10, "L": 50, "C": 100, "D": 500, "M": 1000
    };

    let numeroEmArabico = 0;
    let algarismoConsecutivo = 0;

    if (!numeroEmRomano) return "Digite um número em algarismos romanos.";

    for (let i = 0; i < numeroEmRomano.length; i++) {
        let digitoAtual = algarismosRomanos[numeroEmRomano[i]];
        let digitoSeguinte = algarismosRomanos[numeroEmRomano[i + 1]];

        if (digitoAtual === digitoSeguinte) {
            algarismoConsecutivo++;

            if (algarismoConsecutivo > 2) {
                return "Inválido.";
            }
        } else {
            algarismoConsecutivo = 0;
        }

        if (digitoSeguinte && digitoAtual < digitoSeguinte) {
            if (digitoAtual !== 1 && digitoAtual !== 10 && digitoAtual !== 100) {
                return alert("Inválido.");
            }

            if (digitoSeguinte !== digitoAtual * 5 && digitoSeguinte !== digitoAtual * 10) {
                return alert("Inválido.");
            }

            numeroEmArabico -= digitoAtual;
        } else {
            numeroEmArabico += digitoAtual;
        }
    }

    if (arabicoParaRomano(numeroEmArabico) !== numeroEmRomano) return alert("Inválido.");

    return numeroEmArabico;
}

function converterArabicoParaRomano() {
    let inputArabico = parseInt(document.getElementById("input-arabico").value);
    let resultadoRomano = arabicoParaRomano(inputArabico);
    
    if (resultadoRomano === undefined || resultadoRomano === null) document.getElementById("resultado-romano").innerText = "";
    else if (resultadoRomano === "Digite um número entre 1 e 3999.") document.getElementById("resultado-romano").innerText = resultadoRomano;
    else document.getElementById("resultado-romano").innerHTML = `<span>${resultadoRomano}</span>`;
}

function converterRomanoParaArabico() {
    let inputRomano = document.getElementById("input-romano").value.toUpperCase();
    let resultadoArabico = romanoParaArabico(inputRomano);
    
    if (resultadoArabico === undefined || resultadoArabico === null) {
        document.getElementById("resultado-arabico").innerHTML = "";
        return;
    }
    else document.getElementById("resultado-arabico").innerHTML = resultadoArabico;
};