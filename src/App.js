import './App.css';
import './ArrumaNavio';
import { coordNavio } from './ArrumaNavio';
import { coord } from './ArrumaNavio'

function App() {
    const size = 10;
    var campo = new Array(size);
    var coordl, coordc;
    var aux, i, j, k;

    for (var i = 0; i < campo.length; i++) {
        campo[i] = new Array(10).fill(0);
    }

    coordNavio(size);

    for (i = 0; i < 10; i++) {

        coordl = Math.floor(coord[i] / 10);
        coordc = coord[i] % 10;
        campo[coordl][coordc] = 1;

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
