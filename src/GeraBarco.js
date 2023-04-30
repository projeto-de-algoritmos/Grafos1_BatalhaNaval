import App from './App.js'

function geraBarco() {

    //gera número aleatório
    for (App.i = 0; App.i < 10; App.i++) {

        while (App.k !== 10) {

            App.aux = Math.floor(Math.random() * 100);

            App.k = 0;

            for (App.j = 0; App.j <= App.i; App.j++) {

                if (App.aux === App.coord[App.j]) {
                    App.k = 1;
                }

                else if (App.aux !== App.coord[App.j] && App.k === 0) {
                    App.k = 10;

                }

            }

        }

        App.coord[App.i] = App.aux;
        App.k = 0;
    }

    //Se 0 então vertical se 1 então horiontal
    for (App.i = 0; App.i < 10; App.i++) {
        App.aux = Math.floor(Math.random() * 100);
        App.orien[App.i] = App.aux % 2;
    }

}

export default geraBarco;