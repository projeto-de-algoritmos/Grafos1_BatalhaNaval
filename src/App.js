import './App.css';
import geraBarco from './GeraBarco';
import posicionaBarco from './PosicionaBarco';

function App() {
    const size = 10;
    const tam = new Array(7);
    var campo = new Array(size);
    var coordl, coordc;
    var coord = [0];
    var orien = [0];
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

    geraBarco();

    // posicionaBarco();

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
