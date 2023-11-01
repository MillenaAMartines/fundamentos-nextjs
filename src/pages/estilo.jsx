
import Layout from '../components/Layout'
import styles from '../styles/Estilo.module.css'

export default function Estilo() {
    return (
    
        <Layout titulo="Exemplo de css modularizado">
            <div className={styles.roxo}>
                <h1>Estilo usando CSS Modulo</h1>
            </div>
        </Layout>

    )
}