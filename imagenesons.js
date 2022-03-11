let imagemDaEstrada;
let imamgemDoAtor;
let imagemCarros;
let imagemCarro2;
let imagemCarro3;

let somDaTrilha;
let somColidiu;
let somDoPonto;

function preload() {
  imagemDaEstrada = loadImage("imagens/estrada.png");
  imagemDoAtor = loadImage("imagens/ator_1.png");
  imagemCarro1 = loadImage("imagens/carro1.png");
  imagemCarro2 = loadImage("imagens/carro2.png");
  imagemCarro3 = loadImage("imagens/carro3.png");
  imagemCarros = [
    imagemCarro1,
    imagemCarro2,
    imagemCarro3,
    imagemCarro1,
    imagemCarro2,
    imagemCarro3,
  ];
  somDaTrilha = loadSound("sons/trilha.mp3");
  somDoPonto = loadSound("sons/pontos.wav");
  somColidiu = loadSound("sons/colidiu.mp3");
}
