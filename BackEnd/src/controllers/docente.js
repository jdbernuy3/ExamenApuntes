import docenteRepository from "../repository/docentes.js"

const findAll = (req,res) => {

    const docentes = docenteRepository.findAll(); // ejecuto metodo que Trae mis datos y los devuelve almacenando en docentes
    return res.status(200).json(docentes);//status 200 formato generico
}

const create = (req,res) => {
    const result = docenteRepository.create(req.body)

    return res.status(200).json(result);
}

const findOne = (req,res) => {
    const id = req.params.id; //recibo el id del url que se pone en el get de tests.
    const result = docenteRepository.findOne(id);
    if (result)
        return res.status(200).json(result);
    else
        return res.status(500).json({ message: "no encontradp"});
}

const update = (req,res) => {
    const result = docenteRepository.update(req.body);
        
    if (result)   
        return res.status(200).json(result);
    else
        return res.status(500).json({message: "no encontrado"});
}

const remove = (req,res) => {
    const id = req.params.id; //recibo el id del url que se pone en el get de tests.
    const result = docenteRepository.remove(id);
    if (result)   
        return res.status(200).json(result);
    else
        return res.status(500).json({message: "no encontrado"});
}


const docenteController = {findAll , create, findOne, update, remove} // agregar los metodos que exporto

export default docenteController