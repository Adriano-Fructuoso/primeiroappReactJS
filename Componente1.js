export default function Componente1(props) {

    return (
        <>
        <h2>Esse é o componente 1.</h2>
        <p>O nome recebido do componente pai é {props.nome}</p>
        <p>O valor recebido do componente pai é {props.valor}, valorState {props.valorState}</p>
        
        <button onClick={props.aumentar}></button>

        {props.children}
        </>
        
    );
}