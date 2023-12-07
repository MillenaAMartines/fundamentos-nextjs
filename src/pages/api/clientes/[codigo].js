import { measureMemory } from "vm"

export default function handler (req, resp){ 
    const codigo = req.query.codigo
    resp.status(200).json ({
        id:codigo,
        nome: `Millena ${codigo}`,
        email: `millenamillena${codigo}@checkCustomRoutes.com`
    })
}