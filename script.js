
function mostrarMensagem(){

    const frases = [
        "🌱 Você está no caminho para um futuro sustentável!",
        "♻️ Pequenas atitudes geram grandes mudanças!",
        "🌎 Cuidar do meio ambiente é responsabilidade de todos!"
    ];

    let sorteio = Math.floor(Math.random()*frases.length);

    document.getElementById("mensagem").innerHTML =
    frases[sorteio];
}

function quiz(resposta){

    if(resposta === "certo"){
        document.getElementById("resultadoQuiz").innerHTML =
        "✅ Parabéns! Resposta correta.";
    }
    else{
        document.getElementById("resultadoQuiz").innerHTML =
        "❌ Resposta incorreta. Tente novamente.";
    }
}
