import { useState } from "react";
import Componente1 from "./components/Componente1";

export default function App(){

    var nome = "Javascript"
    var valor = 0
    function aumentar(){
        valor += 1
        setValorState(valorState + 1)
    }

    const [valorState, setValorState] = useState (0)

    return (
        //esse é o que se chama de fragmento, é basicamente uma div do html
        <> 
        <h1>Olá mundo! vindo do componente app</h1>
        <p>O nome da linguagem é: {nome}</p>
        <p>O valor é {valor}, valorState {valorState}</p>

        <Componente1  valor = {valor} nome = {nome} valorState = {valorState}
        aumentar = {aumentar}>
            <p>Este paragráfo foi passado de pai para filho!</p>
        </Componente1>

        <button onClick={aumentar}>Aumentar</button>
        </>
        
    );
}