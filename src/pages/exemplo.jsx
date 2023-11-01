import Cabecalho from "../components/Cabecalho";
import Layout from "../components/Layout";

export default function Exemplos () {
    return (
        <Layout titulo="Usando Componentes">
              <Cabecalho nome="joao" idade={45} casado={false}/>
               <Cabecalho />
               <Cabecalho titulo="Aprenda Nextjs na pratica" />
               <Cabecalho titulo="Nextjs é legal" />
        </Layout>
    
    )
}

// se não tivesse dentro da div não seri possivel utilizar 
// mais de um ou em uma teg vazia 

// o primeiro retorna um objeto com esses dados no console
// o segundo retorna um objeto vazio 
// existe aqui 4 instancias do meu Componete Cabeçalho