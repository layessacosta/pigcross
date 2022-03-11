let xAtor = 85;
let maxXLeftAtor = 10;
let maxXRightAtor = 450;
let minYDownAtor = 372;
let yAtor = 366;
let colisao = false;

function mostraAtor() {
  image(imagemDoAtor, xAtor, yAtor, 30, 30);
}

function movimentaAtor() {
  if (keyIsDown(UP_ARROW)) {
    yAtor -= 3;
  }
  if (keyIsDown(DOWN_ARROW) && yAtor <= minYDownAtor) {
    yAtor += 3;
  }
  if (keyIsDown(LEFT_ARROW) && xAtor >= maxXLeftAtor) {
    xAtor -= 3;
  }
  if (keyIsDown(RIGHT_ARROW) && xAtor <= maxXRightAtor) {
    xAtor += 3;
  }
}
function verificaColisao() {
  for (let i = 0; i < imagemCarros.length; i = i + 1) {
    colisao = collideRectCircle(
      xCarros[i],
      yCarros[i],
      comprimentoCarro,
      alturaCarro,
      xAtor,
      yAtor,
      15
    );
    if (colisao) {
      voltaAtorAoInicio();
      somColidiu.play();

      if (meusPontos > 0) {
        meusPontos -= 1;
      }
    }
  }
}
function voltaAtorAoInicio() {
  yAtor = 366;
}

function PontosMaiorQueZero() {
  return meusPontos > 0;
}
