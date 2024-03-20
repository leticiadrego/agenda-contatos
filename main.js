const form = document.getElementById('form-agenda');
let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
})

function adicionaLinha() {
    const inputNome = document.getElementById('name');
    const inputTel = document.getElementById('phone');

        let linha = '<tr>';
        linha +=`<td>${inputNome.value}</td>`;
        linha +=`<td>${parseInt(inputTel.value)}</td>`;
        linha += '</tr>';
    
        linhas += linha;

    inputNome.value = '';
    inputTel.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

