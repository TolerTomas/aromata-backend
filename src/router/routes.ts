import { Router, Request, Response } from 'express';

const router = Router();

router.get('/', (_: Request, res: Response) => {
    res.send('Aromata Almacen Natural API');
});

let ProductosYMercancia: Array<any> = [
    {
        nombre: "Juan Ignacio Kristich",
        modelo: "2006",
        precio: 1700,
        paisOrigen: "Argentina"
    },
    {
        nombre: "Matias Cuneo",
        modelo: "2004",
        precio: 20,
        paisOrigen: "Brasil"
    },
    {
        nombre: "Tomas Toler",
        modelo: "2005",
        precio: 1900,
        paisOrigen: "Malasia"
    }
]

// buscar todos los productos
router.get('/products', (_: Request, res: Response) => {
    return res.json(ProductosYMercancia);
});

// buscar objeto q valgan mas de 100
router.get('/products100', (_: Request, res: Response) => {
    return res.json(ProductosYMercancia.filter(p =>  p.precio > 100));
});

// eleminar  producto por modelo
router.delete('/products/:modelo', (req: Request, res: Response) => {
    const { modelo } = req.params;

    if (!ProductosYMercancia.some(p => p.modelo === modelo))
        return res.send('obejeto no encontrado por modelo')
    else {
        ProductosYMercancia = ProductosYMercancia.filter(p => p.modelo !== modelo)
        return res.json(ProductosYMercancia) 
    }

});

// buscar pais por precio
router.get('/products/precio/:precio', (req: Request, res: Response) => {
    const { precio } = req.params;

    if (!ProductosYMercancia.some(p => p.precio === +(precio)))
        return res.send('objeto no encontrado por precio')
    else {
        ProductosYMercancia = ProductosYMercancia.filter(p => p.precio === +(precio))
        return res.json(ProductosYMercancia) 
    }

});

// buscar objeto por pais de origen
router.get('/products/paisOrigen/:paisOrigen', (req: Request, res: Response) => {
    const { paisOrigen } = req.params;

    if (!ProductosYMercancia.some(p => p.paisOrigen === paisOrigen))
        return res.send('objeto no encontrado por paisOrigen')
    else {
        const respuesta = ProductosYMercancia.filter(p => p.paisOrigen === paisOrigen)
        return res.json(respuesta) 
    }

});

// agregar un producto
router.post('/products/crear', (req: Request, res: Response) => {
    const data: Object = req.body;
    const keys: Array<String> = Object.keys(data);

    if (keys.includes('nombre') && keys.includes('modelo') && keys.includes('precio') && keys.includes('paisOrigen')) {
        ProductosYMercancia.push(data);
        return res.send(ProductosYMercancia)
    }

    return res.send('keys do not match')
});

// modificar un producto
router.put('/products/editar/:idx', (req: Request, res: Response) => {
    const data: Object = req.body;
    const keys: Array<String> = Object.keys(data);

    const idx = parseInt(req.params.idx);

    if (keys.includes('nombre') && keys.includes('modelo') &&
        keys.includes('precio') && keys.includes('paisOrigen')) {

        if (idx < 0 || idx > ProductosYMercancia.length) return res.send('idx out of range')

        ProductosYMercancia[idx] = data;
        return res.json(ProductosYMercancia)
    }

    return res.send('keys do not match')
});

export default router;