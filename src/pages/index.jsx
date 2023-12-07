
import Navegador from '../components/Navegador'


export default function Inicio(){
    return (
        <div style={{
            display:"flex", /** para separar os elementos **/
            justifyContent: "center",
            alignItems:"center",
            flexWrap: "wrap",
            height: "100vh"
        }}>
          <Navegador texto="Estilo" destino="/estilo" />
          <Navegador texto="Exemplo"destino="/exemplo" cor="#9400d3" />
          <Navegador texto="jsx" destino="/jsx" cor="crimson" />
          <Navegador texto="Navegação 1" destino="/navegacao" cor="green" />
          <Navegador texto="Navegação 2" destino="/cliente/sp-1/123" cor="blue" />
          <Navegador texto="Componente com Estado" destino="/estado" cor="#a45b71" />
          <Navegador texto="Conteudo Estatico" destino="/estatico" cor="darkorange" />

        </div>
    )
}