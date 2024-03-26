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

    const telValue = inputTel.value.trim();

    if (/^\d+$/.test(telValue)) {
        let linha = '<tr>';
        linha +=`<td>${inputNome.value}</td>`;
        linha +=`<td>${parseInt(telValue)}</td>`;
        linha += '</tr>';
    
        linhas += linha;

    inputNome.value = '';
    inputTel.value = '';
    } else {
        alert('Por favor, insira apenas números no campo de telefone!');
    }        
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

