import App from "./App";
import geraBarco from "./GeraBarco";

function posicionaBarco() {
    var coordl = 0, coordc = 0;
    var i, j = 0;// k = 0;
    var l;

    var {temp1, temp2} = geraBarco();

    //Posiciona os navios
    for (i = 0; i < 10; i++) {
        
        coordl = Math.floor(temp1[i] / 10);
        coordc = temp1[i] % 10;

        for (j = 0; j <= App.tam[i]; j++) {

            //Navio na horizontal
            if (geraBarco.orien[i] === 1) {
                if (App.campo[coordl + j][coordc] === 0 && coordl + j <= 9) {
                    App.campo[coordl + j][coordc] = 1;
                    // k++;
                }

            }

            else if (geraBarco.orien[i] === 0) {

                if (App.campo[coordl][coordc + j] === 0 && coordc + j <= 9) {
                    App.campo[coordl][coordc + j] = 1;
                    // k++;
                }

            }

        }

    }

}
export default posicionaBarco;