import './App.css';

function App() {
    const size = 10;
    var campo = new Array(size);
    var coordl, coordc;
    var coord = [];
    var tam = [];
    var orien = [];
    var aux;
    var k, i, j;

    for (var i = 0; i < campo.length; i++) {
        campo[i] = new Array(10).fill(0);
    }

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

    //Posiciona os navios

    for (i = 0; i < 10; i++) {

        coordl = Math.floor(coord[i] / 10);
        coordc = coord[i] % 10;
        campo[coordl][coordc] = 1;

        if (orien[i] == 1) {
            k = 0;
            for (j = 0; j < tam; j++) {

                if (coordc + j == 9) {

                    campo[coordl][coordc - j - k] = 1;

                }

                else {
                    campo[coordl][coordc + j] = 1;
                    k++;
                }

            }

        }

        else {
            k = 0;
            for (j = 0; j < tam; j++) {

                if (coordc + j == 9) {

                    campo[coordl - j - k][coordc] = 1;

                }

                else {
                    campo[coordl + j][coordc] = 1;
                    k++;
                }
            }

        }

    }



    return campo.map(linha => {
        return (
            <>
                <p>
                    {linha.map(item => item + " ")}
                </p>

            </>
        )

    })

    // return (
    // <>
    // {campo.map(line=>line + "|")}
    // </>
    // );
}

export default App;
