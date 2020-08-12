<h1 align="center">
  Receitas EndPoint
</h1>
<p align="center">
  Uma API, feita em NodeJS, que retorna receitas com seus respectivos GIFs.<br/>
  Cogo limpo, seguindos os devidos padrões e com teste.
</p>

## APIs públicas utilizadas

RecipePuppy (http://www.recipepuppy.com/about/api/)
Giphy (https://developers.giphy.com/docs/)

## Como rodar o projeto

Dê um clone no projeto aqui do GitHub, acesse a pasta da aplicação e em seguida instale as dependências.
`npm install`

Em seguida dê o comando para iniciar a aplicação
`npm start`

O projeto está rodando na porta `3000`, então quando for testar a API, utilize a URL `localhost:300`

Para acessa a função principal de pesquisar receitas, faça um `GET` como no exemplo abaixo:
`http://localhost:3000/recipes/bacon`
Neste exemplo, a API retornará receitas que contém o termo "bacon" e retorno será algo como:

```json
{
    "keywords": ["bacon"],
    "recipes": [
        {
            "title": "Easy Bacon-Wrapped Dates",
            "ingredients": "bacon, dates",
            "link": "http://www.recipezaar.com/Easy-Bacon-Wrapped-Dates-169050",
            "gif": "http://gph.is/19tIkhH"
        },
        {
            "title": "Bacon Wrapped Green Beans",
            "ingredients": "bacon, green beans",
            "link": "http://www.recipezaar.com/Bacon-Wrapped-Green-Beans-112823",
            "gif": "http://gph.is/19tIkhH"
        }
    ]
}
```

Onde teremos o campo `keywords` que são as palavras colocadas no parâmetro e o campo `recipes` que é a lista de receitas. O objeto contido nesse array tem os campos `title`, `ingredients` e `link` que vêm da `RecipePuppy` e o campo gif vem da `Giphy`.

## Testes

Para rodar os testes dê o camando `npm run test`. Os testes estão usando o framework Jest (https://jestjs.io/)

## O que foi usado no projeto

#### O core do projeto

Express

#### Para as funções dentro da API

Axios, dotenv, docker e jest

#### Para facilitar o desenvolvimento

Nodemon, sucrase, eslint, prettier e esm

## Projeto no Docker

<h1 align="center">
  <img width="275" alt="Receitas EndPoint" src="https://media1.giphy.com/media/ftYpuYGoeQxpfnIJbd/giphy.gif?cid=ecf05e47bkvyx2p0pepv7w7m37zz4qpvdl80bksjf3czp548&rid=giphy.gif">
</h1>
