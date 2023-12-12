import React, { useState } from 'react';
import { criarVaga } from '../servicos/vagas';
//criando hooks para cada campo
function CadastroVaga() {
const [titulo, setTitulo] = useState('');
const [empresa, setEmpresa] = useState('');
const [salario, setSalario] = useState('');

const handleCadastro = async () => {
    try {
    // Chame a função criarVaga do seu serviço
    const novaVaga = await criarVaga({
    titulo: titulo,
    empresa: empresa,
    salario: salario
    });
    // Faça algo com a nova vaga, se necessário console.log('Nova vaga criada:', novaVaga);