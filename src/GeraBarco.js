
// function geraBarco() {
//     var coord = new Array(10);
//     var orien = new Array(10);
//     var aux = 0;
//     var k = 0, i = 0, j = 0;

//     coord[0] = 101;
//     aux = -1;

//     //gera número aleatório
//     for (i = 0; i < 10; i++) {

//         while (k !== 10) {

//             aux = Math.floor(Math.random() * 100);
//             k = 0;
//             for (j = 0; j <= i; j++) {

//                 if (aux === coord[j]) {
//                     k = 1;
//                 }

//                 if (aux !== coord[j] && k === 0) {
//                     k = 10;
//                     j = 100000;

//                 }

//             }

//         }

//         coord[i] = aux;
//         k = 0;
//     }

//     //Se 0 então vertical se 1 então horiontal
//     for (i = 0; i < 10; i++) {
//         aux = Math.floor(Math.random() * 100);
//         orien[i] = aux % 2;
//     }

//     return [coord, orien];

// }
// export default geraBarco;