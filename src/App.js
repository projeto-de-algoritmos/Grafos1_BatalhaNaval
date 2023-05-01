import './App.css';
import cerebroAI from './CerebroAI';
import criaTabuleiro from './CriaTabuleiro';

function App() {


    
    var campo = cerebroAI();



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



