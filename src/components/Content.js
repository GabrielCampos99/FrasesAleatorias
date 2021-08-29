import estilo from './Content.module.scss'

const Content = (props) => {
    return(
    <div className={estilo.container}>
        {props.isLoading && <div className={estilo.loader}>Loading...</div>}
        {!props.isLoading &&<p className={estilo.p}>{props.frase}</p>}
        
        
        <button className={estilo.btn} onClick={props.onClick}>Nova frase</button>
    </div>)
}
export default Content