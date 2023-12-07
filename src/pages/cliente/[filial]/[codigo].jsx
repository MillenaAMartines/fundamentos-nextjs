// import { useEffect } from 'react';
import Layout from '../../../components/Layout';
import { useRouter } from 'next/router';


export default function clientePorCodigo() {
    const router = useRouter()
    // useEffect(() => {
    //     console.log(router.query.codigo)
    // }, [])

    return (
        <Layout titulo="Navegação Dinamica">
            <div>Código = {router.query.codigo}</div>
            <div>Filial = {router.query.filial}</div>
        </Layout>
    )

}