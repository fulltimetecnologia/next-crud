import { useState } from "react";
import Botao from "../components/Botao";
import Formulario from "../components/Formulario";
import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import Cliente from "../core/Cliente";

export default function Home() {

  const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())
  const [visivel, setVisivel] = useState<'tabela' | 'formulario'>('tabela')

  const clientes = [
    new Cliente('Ana',34, '1'),
    new Cliente('Bia',45, '2'),
    new Cliente('Carlos',23, '3'),
    new Cliente('Pedro',54, '4'),
  ]

  function clienteSelecionado(cliente: Cliente) {
    setCliente(cliente)
    setVisivel('formulario')
  }

  function clienteExcluido(cliente: Cliente) {
    console.log(cliente.nome)
  }

  function novoCliente(){
    setCliente(Cliente.vazio())
    setVisivel('formulario')
  }

  function salvarCliente( cliente: Cliente) {
    console.log(cliente)
  }

  return (
    <div className={`
      flex justify-center items-center h-screen  
      bg-gradient-to-r to-blue-500 from-purple-500
      text-white
    `}>
      <Layout titulo="Cadastro simples">
        { visivel === 'tabela' ? (
          <>
            <div className="flex justify-end">
              <Botao cor="green" className="mb-4" 
                onClick={novoCliente} >Novo Cliente</Botao>
            </div>
            <Tabela clientes={clientes} 
              clienteSelecionado={clienteSelecionado} 
              clienteExcluido={clienteExcluido}
            />
          </>
        ) : (
          <Formulario 
            cliente={cliente}
            clienteMudou={salvarCliente}
            cancelado={() => setVisivel('tabela')}
          />
        )}
      </Layout>
    </div>
  )
}
