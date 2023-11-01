
import Layout from "../components/Layout"
export default function Jsx() {

    const titulo = <h1>JSX é um conceito cantral</h1>

    function subtitulo() {
        return <h2>{"muito legal".toUpperCase()}</h2>
    }

    const a = 4
    const b = 3
    console.log(a * b)

    const obj = { nome: 'millena', idade: 30 }
    return (
        <Layout titulo="Entendendo o JSX">
            <div>
                {titulo}
                {subtitulo()}
                {a * b}
                <p>
                    {JSON.stringify({ nome: 'millena', idade: 30 })}
                </p>
            </div>
        </Layout>
    )
}

// para cessar um codigo JS
// Dentro de uma trecho jsx é só utilizar {}
// um objeto é cria apartir de 2 {{}}