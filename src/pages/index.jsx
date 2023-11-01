
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
          <Navegador texto="Exemplo"destino="/exemplo" />
          <Navegador texto="jsx" destino="/jsx" cor="crimson" />
        </div>
    )
}