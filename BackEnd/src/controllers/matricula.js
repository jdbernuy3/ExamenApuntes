import repository from "../repository/matricula.js";
import service from "../service/matricula.js";

const findAll = (req,res) => {

    const curso = repository.findAll();

    return res.status(200).json(curso);

}

const create = (req,res) => {
    const result = repository.create(req.body);

    return res.status(200).json(result);
}

const findOne = (req,res) => {
    const id = req.params.id;
    const result = repository.findOne(id);

    if (result)
        return res.status(200).json(result);
    else
        return res.status(500).json({ message: 'No encontrado.'})

}

const update = (req,res) => {
    const result = repository.update(req.body);

    if (result)
        return res.status(200).json(result);
    else    
        return res.status(500).json({ message: 'No encontrado.'})
}

const remove = (req,res) => {
    const id = req.params.id;
    
    const result = repository.remove(id);

    if (result)
        return res.status(200).json(result);
    else    
        return res.status(500).json({ message: 'No encontrado.'})
}

const findAllComplete = (req,res) => {
    const result = service.findAllComplete()

    if (result)
        return res.status(200).json(result);
    else    
        return res.status(500).json({ message: 'No encontrado.'})


}

const controller = { findAll, create, findOne, update, remove, findAllComplete }

export default controller;