function coordNavio(size) {
    var coord = [];
    var tam = [];
    var orien = [];
    var aux;
    var k, i, j;

    //gera número aleatório
    for (i = 0; i < 10; i++) {

        while (k != 10) {

            aux = Math.floor(Math.random() * 100);

            k = 0;

            for (j = 0; j <= i; j++) {

                if (aux == coord[j]) {
                    k = 1;
                }

                else if (aux != coord[j] && k == 0) {
                    k = 10;

                }

            }

        }

        coord[i] = aux;
        k = 0;
    }

    for (i = 0; i < 10; i++) {
        aux = Math.floor(Math.random() * 4) + 1;
        tam[i] = aux;
    }

    //Se 0 então vertical se 1 então horiontal
    for (i = 0; i < 10; i++) {
        aux = Math.floor(Math.random() * 100);
        orien[i] = aux % 2;
    }




}