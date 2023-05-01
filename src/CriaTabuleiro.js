function criaTabuleiro() {
    const size = 10;
    const tam = new Array(7);
    var campo = new Array(size);
    var coordl, coordc;
    var coord = [];
    var orien = [];
    var aux;
    var k, i, j;

    tam[0] = 1;
    tam[1] = 1;
    tam[2] = 2;
    tam[3] = 2;
    tam[4] = 3;
    tam[5] = 3;
    tam[6] = 3;

    for (i = 0; i < campo.length; i++) {
        campo[i] = new Array(10).fill(0);
    }

    //gera número aleatório
    for (i = 0; i < 6; i++) {

        while (k !== 10) {

            aux = Math.floor(Math.random() * 100);

            k = 0;

            for (j = 0; j <= i; j++) {
                //Cria um espaço seguro entre os barcos
                if (aux === coord[j] || aux + 20 === coord[j] || aux + 10 === coord[j] || aux - 20 === coord[j] || aux - 10 === coord[j] || aux + 1 === coord[j] || aux + 2 === coord[j] || aux - 1 === coord[j] || aux - 2 === coord[j]) {
                    k = 1;
                }

                else if (k === 0) {
                    k = 10;

                }

            }

            //Distância importa
            if (k === 10) {
                //Verifica se tem borda
                if (((aux + 2) % 10 !== 0) && ((aux + 1) % 10 !== 0) && ((aux - 1) % 10 !== 0) && ((aux - 2) % 10 !== 0) && aux + 20 <= 99 && aux - 20 >= 0) {
                    k = 10;
                }

                else {
                    k = 0;
                }

            }

        }

        coord[i] = aux;
        k = 0;
    }

    //Se 0 então vertical se 1 então horiontal
    for (i = 0; i < 6; i++) {
        aux = Math.floor(Math.random() * 100);
        orien[i] = aux % 2;
    }

    //Posiciona os navios
    k = 0;
    for (i = 0; i < 6; i++) {
        coordl = Math.floor(coord[i] / 10);
        coordc = coord[i] % 10;


        for (j = 0; j < tam[i]; j++) {

            //Navio na horizontal
            if (orien[i] === 1) {

                campo[coordl + j][coordc] = 1;

            }

            else if (orien[i] === 0) {

                campo[coordl][coordc + j] = 1;

            }

        }

    }



    return campo;

}

export default criaTabuleiro;