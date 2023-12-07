
export default function handler(req, res) {
    res.status(200).json({
        nome: "ola mundo / teste API",
        metodo: req.method,
        // params: JSON.stringify(req.query)
        nome:req.query.nome,
        idade:req.query.idade
    })
}