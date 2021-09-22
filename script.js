var jogadores = [];

var rafa = { nome: "Rafa", vitorias: 0, empates: 0, derrotas: 0, pontos: 0 };
var paulo = { nome: "Paulo", vitorias: 0, empates: 0, derrotas: 0, pontos: 0 };
var gui = { nome: "Gui", vitorias: 0, empates: 0, derrotas: 0, pontos: 0 };

jogadores.push(rafa);
jogadores.push(paulo);
jogadores.push(gui);

function adicionarVitoria(i) {
  jogadores[i].vitorias++;
  calculaPontos(jogadores[i]);
  imprimir(jogadores);
}

function adicionarDerrota(i) {
  jogadores[i].derrotas++;
  imprimir(jogadores);
}

function adicionarEmpate(i) {
  jogadores[i].empates++;
  calculaPontos(jogadores[i]);
  imprimir(jogadores);
}

function calculaPontos(jogador) {
  jogador.pontos = 3 * jogador.vitorias + jogador.empates;
}

function imprimir(jogadores) {
  var tabelaJogadores = document.getElementById("tabelaJogadores");
  tabelaJogadores.innerHTML = "";
  for (let i = 0; i < jogadores.length; i++) {
    var elemento = "<tr><td>" + jogadores[i].nome + "</td>";
    elemento += "<td>" + jogadores[i].vitorias + "</td>";
    elemento += "<td>" + jogadores[i].empates + "</td>";
    elemento += "<td>" + jogadores[i].derrotas + "</td>";
    elemento += "<td>" + jogadores[i].pontos + "</td>";
    elemento +=
      '<td><button onClick="adicionarVitoria(' + i + ')">Vitória</button></td>';
    elemento +=
      '<td><button onClick="adicionarEmpate(' + i + ')">Empate</button></td>';
    elemento +=
      '<td><button onClick="adicionarDerrota(' +
      i +
      ')">Derrota</button></td></tr>';
    tabelaJogadores.innerHTML += elemento;
  }
}

function reset() {
  rafa = { nome: "Rafa", vitorias: 0, empates: 0, derrotas: 0, pontos: 0 };
  paulo = { nome: "Paulo", vitorias: 0, empates: 0, derrotas: 0, pontos: 0 };
  gui = { nome: "Gui", vitorias: 0, empates: 0, derrotas: 0, pontos: 0 };
  jogadores = [];
  jogadores.push(rafa);
  jogadores.push(paulo);
  jogadores.push(gui);
  imprimir(jogadores);
}

function addJogador() {
  jogadores.push({
    nome: document.getElementById("nome").value,
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0
  });
  imprimir(jogadores);
  document.getElementById("nome").value = "";
}

reset();
