# swapi-node

## Aplicação NodeJS para realizar CRUD dos planetas do Star Wars

### Tecnologias Aplicadas no Projeto:

* Nodejs
* Express
* Body-Parser
* MongoDB
* Mongoose
* Nodemon
* Postman

### Iniciar

* Importar SWAPI.postman_collection.json para seu Postman
* Abrir Terminal
* Clonar projeto ($ git clone git@github.com:kleitonalbuquerque/swapi-node.git)
* npm install ($ npm install)
* Importar a base de dados no MongoDB ($ mongoimport -d database_name -c plantes output.json)
* Inicar MongoDB ($ sudo systemctl start mongod)
* Verificar se o MongoDB está inicializado($ sudo tail /var/logo/mongodb/mongodlog)
* Iniciar projeto($ nodemon server.js)
