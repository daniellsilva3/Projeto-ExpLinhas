import { useState } from "react";
import CampoTexto from "../CampoTexto/CampoTexto";
import ListaSuspensa from '../ListaSuspensa/ListaSuspensa';
import Botao from "../Botao/Botao";
import './Menu.css'
    

    function Menu() {
     const times=[
            'TIP',
            'JOANA BEZERRA',
            'CAMARAGIBE',
            'AFOGADOS'
            
        ]
        const aoSalvar = (event) => {
            event.preventDefault()
            console.log('Form foi submetido')
            }
    const [state, setState] = useState(1);

    const action = (index)=>{
        setState(index)
    }


return(
    
        <div className="box">
        <div className="tabs">
        <div className={`${state===1 ?'tab active-tab': 'tab'}`} onClick={()=>action(1)}>Cadastro da Linha</div>
        </div>



        <div className="contents">
        <div className={`${state===1 ?'content active-content': 'content'}`}>
        <section className='formulario'>
        <form onSubmit= {aoSalvar}>
           
            <CampoTexto obrigatorio={true} label="Numero da Linha" placeholder="Numero da Linha"/>
            <CampoTexto obrigatorio={true} label="Nomeclatura" placeholder="Nomeclatura"/>
            <CampoTexto obrigatorio={true} label="Terminal" placeholder="Terminal"/>
            <CampoTexto obrigatorio={true} label="Ponto de Retorno" placeholder="Ponto de Retorno"/>
            <ListaSuspensa obrigatorio={true} label="Integração proxima da sua casa" itens={times}/>
            <Botao>Enviar</Botao>
        

        </form>
        </section>
        </div>
        </div>
        </div>
       
       
)
    }



    export default Menu