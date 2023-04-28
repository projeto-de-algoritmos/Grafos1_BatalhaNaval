import './App.css';

function App() {
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
    tam[5] = 4;
    tam[6] = 5;

    for (i = 0; i < campo.length; i++) {
        campo[i] = new Array(10).fill(0);
    }

    //gera número aleatório
    for (i = 0; i < 10; i++) {

        while (k !== 10) {

            aux = Math.floor(Math.random() * 100);

            k = 0;

            for (j = 0; j <= i; j++) {

                if (aux === coord[j]) {
                    k = 1;
                }

                else if (aux !== coord[j] && k === 0) {
                    k = 10;

                }

            }

        }

        coord[i] = aux;
        k = 0;
    }

    //Se 0 então vertical se 1 então horiontal
    for (i = 0; i < 10; i++) {
        aux = Math.floor(Math.random() * 100);
        orien[i] = aux % 2;
    }

    //Posiciona os navios
    k = 0;
    for (i = 0; i < 10; i++) {
        coordl = Math.floor(coord[i] / 10);
        coordc = coord[i] % 10;
  

        for (j = 0; j <= tam[i]; j++) {

            //Navio na horizontal
            if (orien[i] === 1) {
                if (campo[coordl + j][coordc] === 0 && coordl + j <= 10) {
                    campo[coordl + j][coordc] = 1;
                    k++;
                }

            }

            else if (orien[i] === 0) {

                if (campo[coordl][coordc + j] === 0 && coordl + j <= 10) {
                    campo[coordl][coordc + j] = 1;
                    k++;
                }

            }

        }

    }



    return campo.map(linha => {
        return (
            <>
                <p>
                    {linha.map(item => "| " + item + " | ")}
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
