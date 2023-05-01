
import criaTabuleiro from './CriaTabuleiro';

function cerebroAI() {
    var casa;
    var coordc = 0, coordl = 0;
    var campo = criaTabuleiro();
    var verifica_cima = 0, verifica_baixo = 0, verifica_direita = 0, verifica_esquerda = 0;
    var acertou = 0;
    var acerta_cima = 0, acerta_baixo = 0, acerta_direita = 0, acerta_esquerda = 0;
    var conta_acertos = 0;
    var loop = 0;
    //=================================================================================================================================================================================================
    //# Passo 1 #
    //=================================================================================================================================================================================================
    while (loop !== 10 && acertou === 0) {

        // casa = Math.floor(Math.random() * 100);
        casa = 55;


        loop = 0;
        //verifica se a casa já foi escolhida verificando se no campo a casa foi alterada para água ou acertou
        coordl = Math.floor(casa / 10);
        coordc = casa % 10;

        if (campo[coordl][coordc] !== 2 && campo[coordl][coordc] !== -1) {

            loop = 10;

        }

    }
    //=================================================================================================================================================================================================
    // # Fim do Passo 1 #
    //=================================================================================================================================================================================================
    // # Passo 2 #
    //=================================================================================================================================================================================================
    acertou = 0;
    conta_acertos = 0;

    //Acertou a água, segue em frente, quando água campo[coordl][coordc] == -1
    if (campo[coordl][coordc] === 0) {

        campo[coordl][coordc]--;
        acertou = 0;

    }

    //Acertou o navio, inicializa a variável do passo 3 e campo[coordl][coordc] == 2;
    else {

        campo[coordl][coordc]++;
        acertou = 1;
        conta_acertos++;

    }
    //=================================================================================================================================================================================================
    //# Fim do Passo 2 #
    //=================================================================================================================================================================================================
    //# Passo 3 #
    //=================================================================================================================================================================================================
    if (acertou === 1 && conta_acertos === 1) {

        verifica_cima = 0;
        verifica_baixo = 0;
        verifica_direita = 0;
        verifica_esquerda = 0;

        if (coordl >= 1) {
            verifica_cima = 1;
            acerta_cima = 1;
        }

        if (coordl < 9) {
            verifica_baixo = 1;
            acerta_baixo = 1;
        }

        if ((coordc) % 10 !== 9) {
            verifica_direita = 1;
            acerta_direita = 1;
        }

        if ((coordc) % 10 !== 0) {
            verifica_esquerda = 1;
            acerta_esquerda = 1;
        }
    }
    //=================================================================================================================================================================================================
    //Fim da verificação
    //=================================================================================================================================================================================================
    while (conta_acertos < 3 && conta_acertos > 0) {

        //Lógica de escolher os vizinhos de cima pra acertar
        if (verifica_cima === 1 && acerta_cima === 1) {

            casa = casa - 10;

            coordl = Math.floor(casa / 10);
            coordc = casa % 10;

            //Verifica se o vizinho foi atacado antes
            if (campo[coordl][coordc] !== 2 && campo[coordl][coordc] !== -1) {

                //Acertou a água
                if (campo[coordl][coordc] === 0) {

                    campo[coordl][coordc]--;
                    casa -= 10 * conta_acertos;
                    acerta_cima = 0;
                    

                }

                //Acertou o navio
                else {

                    campo[coordl][coordc]++;
                    conta_acertos++;
                    acerta_cima = 1;

                }

            }

        }

        //Lógica de escolher os vizinhos de baixo pra acertar
        if (verifica_baixo === 1 && acerta_baixo === 1) {

            casa = casa + 10;

            coordl = Math.floor(casa / 10);
            coordc = casa % 10;

            //Verifica se o vizinho foi atacado antes
            if (campo[coordl][coordc] !== 2 && campo[coordl][coordc] !== +1) {

                //Acertou a água
                if (campo[coordl][coordc] === 0) {

                    campo[coordl][coordc]++;
                    casa += 10*conta_acertos;
                    acerta_baixo = 0;
                    

                }

                //Acertou o navio
                else {

                    campo[coordl][coordc]++;
                    conta_acertos++;
                    acerta_baixo = 1;

                }

            }

        }

        //Lógica de escolher os vizinhos de direita pra acertar
        if (verifica_direita === 1 && acerta_direita === 1) {

            casa = casa + 1;

            coordl = Math.floor(casa / 10);
            coordc = casa % 10;

            //Verifica se o vizinho foi atacado antes
            if (campo[coordl][coordc] !== 2 && campo[coordl][coordc] !== +1) {

                //Acertou a água
                if (campo[coordl][coordc] === 0) {

                    campo[coordl][coordc]++;
                    casa += 1*conta_acertos;
                    acerta_direita = 0;
                    

                }

                //Acertou o navio
                else {

                    campo[coordl][coordc]++;
                    conta_acertos++;
                    acerta_direita = 1;

                }

            }

        }

        //Lógica de escolher os vizinhos de esquerda pra acertar
        if (verifica_esquerda === 1 && acerta_esquerda === 1) {

            casa = casa - 1;

            coordl = Math.floor(casa / 10);
            coordc = casa % 10;

            //Verifica se o vizinho foi atacado antes
            if (campo[coordl][coordc] !== 2 && campo[coordl][coordc] !== -1) {

                //Acertou a água
                if (campo[coordl][coordc] === 0) {

                    campo[coordl][coordc]--;
                    casa -= 1*conta_acertos;
                    acerta_esquerda = 0;
                    

                }

                //Acertou o navio
                else {

                    campo[coordl][coordc]--;
                    conta_acertos--;
                    acerta_esquerda = 1;

                }

            }

        }

    }









    return campo;
}
export default cerebroAI;