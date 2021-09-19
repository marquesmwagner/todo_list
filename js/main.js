// Atualizar Dia - Mês - Ano
let agora = new Date();
let dia = agora.getDate();
let mes = agora.toLocaleString('default', {month:'long'});
let ano = agora.getFullYear();
document.querySelector('.data-dia').innerHTML = dia;
document.querySelector('.data-mes').innerHTML = mes;
document.querySelector('.data-ano').innerHTML = ano;

// Recebimento de dados (input e ul)
const lista = document.querySelector('.lista-tarefas');
const dados = document.querySelector('.adicionar-tarefa');


// Focar na inserção de tarefas
function focarInsercao() {
    document.querySelector('.adicionar-tarefa').value = '';
    document.querySelector('.adicionar-tarefa').focus();
}

// Adicionar tarefa na lista
function adcTarefa() {
    const novaTarefa = document.querySelector('.adicionar-tarefa').value;
    if (novaTarefa.length == 0) {
        alert('Você precisa digitar uma tarefa válida.');
    } else {
        document.querySelector('.lista-tarefas').innerHTML += 
        '<li><input type="checkbox" class="check" onclick="checkStatus()"><span>' + novaTarefa + 
        '</span><button class="botao-excluir" onclick="removerTarefa(this)"><i class="fas fa-minus-square fa-lg"></i></button></li>'
        salvarLista();
        focarInsercao();
        checkCarregar();
    }
}

// Usar o ENTER para enviar a tarefa
document.querySelector('.adicionar-tarefa').addEventListener('keyup', function(evento) {
    if (evento.keyCode === 13) {
        adcTarefa();
    }
})

// Remover tarefa da lista
function removerTarefa(evento) {
    let remover = confirm('Deseja remover a tarefa?');
    if (remover) {
        evento.parentNode.parentNode.removeChild(evento.parentNode);
        localStorage.clear();
        salvarLista();
        checkStatus();
        focarInsercao();
    }
}

// Salvar a lista de tarefas em localStorage
function salvarLista() {
    localStorage.setItem('listaTarefas', JSON.stringify(document.querySelector('.lista-tarefas').innerHTML));
}

// Carregar lista de tarefas
function carregarLista() {
    let carregar = JSON.parse(localStorage.getItem('listaTarefas'));
    if (carregar == null) {
        return;
    } else {
        document.querySelector('.lista-tarefas').innerHTML = carregar;
    }
}

// Função para verificar as checkboxs
function checkStatus() {
    let checkboxStatus = document.querySelectorAll('.check');
    checkboxStatus.forEach((box, index) => {
      localStorage.setItem(box.className + [index], JSON.stringify(box.checked));
    })
  }

// Carregar as checkboxs
function checkCarregar() {
    let checkboxList = document.querySelectorAll('.check');
    checkboxList.forEach((box, index) => {
    let checked = JSON.parse(localStorage.getItem(box.className + [index]));
        if (checked == null) {
            return;
        }   else {
        document.getElementsByClassName(box.className)[index].checked = checked;
        }
    })
}

carregarLista();
checkCarregar();
focarInsercao();