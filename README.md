# API para a seleção de na empresa Tax

API integrada com banco de dados SQLite3 , para registro e leitura de usuarios.<br>
Cada  Usuário deve possuir os campos:
<ul>
  <li>name</li>
  <li>email</li>
  <li>whatsapp</li>
</ul>

## Feature

Separei em duas pastas: <i>tax-web</i> e <i>server</i>.
Execute primeiro o servidor e depois a aplicação.
<ul>
  <li>servidor: localhost:3600</li>
  <li>aplicacao: localhost:3000</li>
</ul>

## Instalando dependencias
Tendo Node instalado, instale as dependencias na pasta tax-web e na pasta server
```
yarn install
```
Voce deve executar primeiro o servidor , na pasta Server , execute
```
yarn start
```
Depois entre na pasta tax-web e execute:
```
yarn start
```

#### Rotas
 -Rota de listar todos os usuarios de taxusers
```
http://localhost:3600/taxusers/list
```
 -Rota de listar todos os usuarios (usa query) , utiliza método GET
```
http://localhost:3600/taxusers?name=<NOME>&email=<EMAIL>&whatsapp=<WHATSAPP>
```
 -Rota de listar adicionar um usuario ao taxusers  (usa json) , utiliza método POST
```
http://localhost:3600/taxusers?name=<NOME>&email=<EMAIL>&whatsapp=<WHATSAPP>
```
 -Rota de listar deletar um usuario ao taxusers (usa params) , utiliza método DELETE
```
http://localhost:3600/taxusers/:id
```
##### tecnologias utilizadas
 -Knex , para gestao de banco de dados SQLite 3

###### API rodando em localhost:3000
-Ja instalei a dependencia do cors caso queira testa uma requisicao a api por meio do axios

