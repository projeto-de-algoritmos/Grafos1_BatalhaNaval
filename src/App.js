import './App.css';
import criaTabuleiro from './CriaTabuleiro';

function App() {
    
    var campo = criaTabuleiro();



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



