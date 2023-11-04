import express from 'express'

import docenteController from '../controllers/docente.js'

const routes = express.Router() // express.Router define mis rutas

//routes.get('/', (req,res) => { return res.json({ result : 'docentes'})} ) //localhost:3001/docentes

routes.get('/', docenteController.findAll) //Lo mismo que arriba pero req y res los maneja docente controller. 
routes.post('/', docenteController.create) //publicar datos
routes.get('/:id', docenteController.findOne) //indico el :id que representa el parametro a recibir, y el metodo.
routes.put('/', docenteController.update)
routes.delete('/:id',docenteController.remove)

export default routes //exporto