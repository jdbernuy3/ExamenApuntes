import express from 'express';
import bodyParser from 'body-parser'; //importar body parser
import cors from 'cors' //primero poner npm install cors

import alumnoRoutes from './routes/alumno.js'
import carreraRoutes from './routes/carrera.js'
import cursoRoutes from './routes/curso.js'
import matriculaRoutes from './routes/matricula.js'
import docenteRoutes from './routes/docentes.js'; //importo la ruta que cree

var app = express(); //app representa el aplicativo
app.use(bodyParser.json()) //para que el API pueda reconocer el cuerpo.
app.use(cors())
app.get('/',(req,res) => {
    return res.json({ result: 'OK'})
}) //recibir: ruta,(lo que recibimos, lo que enviamos de respuesta)

app.use('/docentes', docenteRoutes);//que corra lo que defini.
app.use('/matricula', matriculaRoutes);
app.use('/curso', cursoRoutes);
app.use('/carrera', carreraRoutes);
app.use('/alumno', alumnoRoutes);

app.listen(3001, () => {
    console.log('Servidor iniciado.')
} ) //puerto en el que va a correr, frontend va en 3000
