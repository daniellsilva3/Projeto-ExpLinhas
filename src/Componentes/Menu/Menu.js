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
        <div className={`${state===1 ?'tab active-tab': 'tab'}`} onClick={()=>action(1)}>Dados Pessoais</div>
        <div className={`${state===2 ?'tab active-tab': 'tab'}`} onClick={()=>action(2)}>Endereço</div>
        <div className={`${state===3 ?'tab active-tab': 'tab'}`} onClick={()=>action(3)}>Informacoes Adicionais</div>
        </div>



        <div className="contents">
        <div className={`${state===1 ?'content active-content': 'content'}`}>
        <section className='formulario'>
        <form onSubmit= {aoSalvar}>
           
            <CampoTexto obrigatorio={true} label="Nome" placeholder="Nome"/>
            <CampoTexto obrigatorio={true} label="Email" placeholder="Email"/>
            <CampoTexto obrigatorio={true} label="CPF" placeholder="CPF"/>
          
        

        </form>
        </section>
        </div>
        <div className={`${state===2 ?'content active-content': 'content'}`}>
        <section className='formulario'>
        <form onSubmit= {aoSalvar}>
            
            <CampoTexto obrigatorio={true} label="CEP" placeholder="CEP"/>
            <CampoTexto obrigatorio={true} label="Endereço" placeholder="Endereço"/>
            <CampoTexto obrigatorio={true} label="Bairro" placeholder="Bairro"/>
            <CampoTexto obrigatorio={true} label="Cidade" placeholder="Cidade"/>
            <CampoTexto obrigatorio={true} label="Número" placeholder="Número"/>
            <CampoTexto obrigatorio={true} label="Estado" placeholder="Estado"/>
            
        

        </form>
        </section>
        </div>
        <div className={`${state===3 ?'content active-content': 'content'}`}>
        <section className='formulario'>
        <form onSubmit= {aoSalvar}>
           
            <CampoTexto obrigatorio={true} label="Destino" placeholder="Destino"/>
            <CampoTexto obrigatorio={true} label="Horário de Chegada no Destino" placeholder="Horário de Chegada no Destino"/>
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