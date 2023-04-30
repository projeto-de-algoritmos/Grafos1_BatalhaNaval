import './App.css';
import geraBarco from './GeraBarco';
import posicionaBarco from './PosicionaBarco';

function App() {
    const size = 10;
    const tam = new Array(10);
    var campo = new Array(size);
    var i = 0;

    tam[0] = 1;
    tam[1] = 1;
    tam[2] = 2;
    tam[3] = 2;
    tam[4] = 3;
    tam[5] = 3;
    tam[6] = 4;
    tam[7] = 4;
    tam[8] = 5;
    tam[9] = 5;


    for (i = 0; i < campo.length; i++) {
        campo[i] = new Array(10).fill(0);
    }

    geraBarco();

    posicionaBarco();

    return campo.map(linha => {
        return (
            <>
                <p>
                    {linha.map(item => "| " + item + " | ")}
                </p>

            </>
        )

    })

}

export default App;
