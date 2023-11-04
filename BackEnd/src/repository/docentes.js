const docentes = [{
    id: 1,
    nombre: "Juan",
    apellido: "Perez",
    curso: "Programacion web"
},
{
    id: 2,
    nombre: "Sandra",
    apellido: "Sanchez",
    curso: "Derecho Penal"
}] //defino los datos que tendre

const findAll = () => {
    return docentes;
} //defino el metodo y lo que hara

const create = (docente) => { //crear docente
    docentes.push(docente) 
    return docente;
}

const findOne = (id) => {
    const result = docentes.find(x => x.id == id);
    return result;
}

const update = (docente) => {
    const index = docentes.findIndex(item => item.id = docente.id)//para encontrar docente que quiero actualizar
    if (index > -1) {//encontro
        docentes[index] = docente;
        return docente;
    }
    else {
        return null;
    } 
}

const remove = (id) => {
    const index = docentes.findIndex(item => item.id = id);
        if (index > -1) {//encontro
            docentes.splice(index,1) //splice en base al indice inicial, remueve los siguientes elementos
            return true;
        }
        else{
            return false;
        }

}

const docenteRepository = {findAll, create, findOne, update, remove} //defino lo que exportare finalmente

export default docenteRepository;