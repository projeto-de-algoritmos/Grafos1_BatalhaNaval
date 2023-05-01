import App from "./App";

function posicionaBarco() {

    //Posiciona os navios
    App.k = 0;
    for (App.i = 0; App.i < 10; App.i++) {
        App.coordl = Math.floor(App.coord[App.i] / 10);
        App.coordc = App.coord[App.i] % 10;


        for (App.j = 0; App.j <= App.tam[App.i]; App.j++) {

            //Navio na horizontal
            if (App.orien[App.i] === 1) {
                if (App.campo[App.coordl + App.j][App.coordc] === 0 && App.coordl + App.j <= 9) {
                    App.campo[App.coordl + App.j][App.coordc] = 1;
                    App.k++;
                }

            }

            else if (App.orien[App.i] === 0) {

                if (App.campo[App.coordl][App.coordc + App.j] === 0 && App.coordc + App.j <= 9) {
                    App.campo[App.coordl][App.coordc + App.j] = 1;
                    App.k++;
                }

            }

        }

    }

}
export default posicionaBarco;