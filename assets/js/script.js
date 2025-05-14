//elementos
const btnCriarSenha = document.querySelector("#criar--senha");
const senhaCriada = document.querySelector("#senha--criada");

// novas  funcionalidades 
const abrirFecharSenhaBtn = document.querySelector("#abrir--criar--senha");
const criarSenhaContainer = document.querySelector("#senha--options");
const tamanhoInput = document.querySelector("#tamanho");
const letrasInput = document.querySelector("#letras");
const numerosInput = document.querySelector("#numeros");
const simbolosInput = document.querySelector("#simbolos");
const copiarSenhaBtn = document.querySelector("#copiar--senha");

// funções
const getLetraMinuscula = () => {
    // letras minusculas atraves da tabela dos codigos das letras
    return (String.fromCharCode(Math.floor(Math.random() * 26) + 97))
}

const getLetraMaiuscula = () => {
    // letras maisculas atraves da tabela dos codigos das letras
    return (String.fromCharCode(Math.floor(Math.random() * 26) + 65))
}

const getNumero = () => {
    return (Math.floor(Math.random() * 10).toString());
}

const getSimbolos = () => {
    const simbolos = "!@#$%&*[]<>_-";

    return simbolos[Math.floor(Math.random() * simbolos.length)];
}

const gerarSenha = (getLetraMinuscula, getLetraMaiuscula, getNumero, getSimbolos) => {

    let senha = "";

    const tamanhoSenha = tamanhoInput.value;

    const geradores = []; 

    if (letrasInput.checked) {
        geradores.push(getLetraMinuscula, getLetraMaiuscula)
    }

    if (numerosInput.checked) {
        geradores.push(getNumero)
    }

    if (simbolosInput.checked) {
        geradores.push(getSimbolos)
    }

    console.log(geradores.length)

    if (geradores.length === 0) {
        return;
    }

    for (i = 0; i < tamanhoSenha; i = i + geradores.length){
        geradores.forEach(() => {
            const valorAleatorio = geradores[Math.floor(Math.random() * geradores.length)]();

            senha += valorAleatorio;
        })
    }

    senha = senha.slice(0, tamanhoSenha);

    senhaCriada.style.display = "block";
    senhaCriada.querySelector("h4").innerText = senha;
};

//eventos
btnCriarSenha.addEventListener("click", () => {
    gerarSenha(
        getLetraMinuscula,
        getLetraMaiuscula,
        getNumero, 
        getSimbolos
    );
});
abrirFecharSenhaBtn.addEventListener("click", () => {
    criarSenhaContainer.classList.toggle("hide");
})