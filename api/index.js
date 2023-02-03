import { Router } from 'express'
import sql from 'mssql'

const config = {
    user: 'sa',
    password: 'Traviata123',
    server: 'FURY',
    database: 'dbmerc',
    options: {
        trustedconnection: false,
        enableArithAbort: true,
        encrypt: false
    }
}

const router = Router()

router.get('/', async (req, res) => {

    const pool = await sql.connect(config)
    const result = await pool.request()
        .input('tipo', 1)
        .input('id_internet', 112)
        .input('id_cliente', 0)
        .input('id_producto', 0)
        .input('id_agente', 0)
        .execute(`crm_inicial`);
    const inicial = JSON.parse(result.recordsets[0][0].json.replace(new RegExp('\"', "g"), '"'));
    const products = inicial.productos

    res.json(products);
})

export default router