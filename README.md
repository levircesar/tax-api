# API para a seleção de na empresa Tax

## Instalando dependencias
Tendo Node instalado, execute:
```
yarn install
```
Após baixar as dependencias do projeto, execute:
```
yarn start
```

#### Rotas
 -Rota de listar todos os usuarios de taxusers
```
http://localhost:3000/taxusers/list
```
 -Rota de listar todos os usuarios (usa query) , utiliza método GET
```
http://localhost:3000/taxusers?name=<NOME>&email=<EMAIL>&whatsapp=<WHATSAPP>
```
 -Rota de listar adicionar um usuario ao taxusers  (usa json) , utiliza método POST
```
http://localhost:3000/taxusers?name=<NOME>&email=<EMAIL>&whatsapp=<WHATSAPP>
```
 -Rota de listar deletar um usuario ao taxusers (usa params) , utiliza método DELETE
```
http://localhost:3000/taxusers/:id
```
##### tecnologias utilizadas
 -Knex , para gestao de banco de dados SQLite 3

###### API rodando em localhost:3000
-Ja instalei a dependencia do cors caso queira testa uma requisicao a api por meio do axios