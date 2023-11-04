import axios from 'axios'

const URI = 'http://localhost:3001' //endpoint a llamar

const get = async (endpoint) => {
    try {
        const url = URI.concat(endpoint);
        return await axios.get(url);
    } catch(err){
        console.error(err);
        return null;
    }

}

const post = async (endpoint, payload) => {
    try {
        const url = URI.concat(endpoint);
        return await axios.get(url,payload);
    } catch(err){
        console.error(err);
        return null;
    }

}

const put = async (endpoint) => {
    try {
        const url = URI.concat(endpoint);
        return await axios.get(url);
    } catch(err){
        console.error(err);
        return null;
    }

}

const remove = async (endpoint) => {
    try {
        const url = URI.concat(endpoint);
        return await axios.get(url);
    } catch(err){
        console.error(err);
        return null;
    }

}


const base = {get, post}

export default base;

//AQUI PONGO EL CODIGO PARA HACER LA LLAMADA, EN CADA API SEPARADO HAGO CADA LLAMADA POR PESTANA.

