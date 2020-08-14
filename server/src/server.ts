import express from 'express';
import routes from './routes';
import cors from 'cors';

const app = express();
app.use(cors());

//por padrão, o express não consegue ler a informação em formato json, por isso é preciso a linha abaixo
app.use(express.json());
app.use(routes);

//métodos HTTP: GET, POST, PUT, DELETE

//Parâmetros:
//Request body: dados para criação ou atualização de um registro
//Route params: identifica o recurso a ser atualizado ou deletado
//Query params:  paginação, filtros, coordenação


app.listen(3344);