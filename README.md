# Arquitetura de API com GraphQL, NodeJs e MySql 

# GraphQL com a sintax do ORM Sequelize
## Considerações
  - Centralizar em uma classe as validações de campo, e atributos que não podem ser consultados
  - Padrão para validar acesso (ByPass) a registros
  - Demais funcionalidades podem seguir o padrão REST (Upload / Downlod / Autenticação)
  - Consultar apenas o que foi solicitado (campos, registros)

## Opções do framework
  - queries: Um array com as entidades e campos a serem consultados
  - mutations: Um array com todas as as alterações nas entidades
  - transaction: Um booleano que especifica se as operações enviadas devem ser computadas em uma transação pelo framework

## Restrição de acesso: 
  - Campos: Será configurado na classe da entidade os campos que não podem ser acessados | black list
  - Registros / Ações: Midware com as regras próprias de cada papel / usuário | white list
  
## Exemplos para suporte
```POST
{
    "transaction": true,
    "queries": [
        // rename columns
        {
            "users": {
                "fields": ["id",["name", "full_name"],"email"]
            }
        },
        // where conditions
        {
            "users": {
                "fields": ["id","name"],
                "filter": [
                    { "name": { "like": "testes%" } },
                    { "id": 1 },
                    { "id": { "in": [1, 2] } },
                    { "or": [
                        { "id": { "=": 1 } },
                        { "id": { "=": 2 } }
                    ]},
                    { "and": [
                        { "id": { "<": 2 } },
                        { "id": { ">=": 0 } }
                    ]}
                ]
            }
        },
        //joins 
        {
            "users": {
                "fields": ["id","name"],
                "inners": [{
                    "roles": {
                        "fields": ["name"],
                        // "filters": {  }
                    }
                }]
                //"lefts": [...]
            }
        },
        // paginantion
        {
            "users": {
                "fields": ["id","name"],
                "page": 1,
                "limit": 100
            }           
        },
        // group and functions
        {
            "users": {
                "fields": ["name", ["count(name)", "total_users"]],
                "group": ["name"]
            }           
        },
        // ordenation
        {
            "users": {
                "fields": ["id", "name"],
                "order": ["name", "asc"]
            }   
        },
        // unique result
        {
            "user": {
                "fields": ["id", "name"],
                "filter": { "id": 1 }
            } 
        }
    ],
    "mutations": [
        {
            "user": {
                "id": 1,
                "name": "paulo",
                "email": "teste@teste.com"
            }
        },
        {
            "user": {
                "filter": { "id": 1 },
                "values": {
                    "name": "Paulo Ricardo",
                    "email": "teste@teste.com.br"
                }
            }
        },
        {
            "user": {
                "filter": { "id": 1 },
                "values": {
                    "removed": true
                }
            }
        },
        {
            "user": {
                "filter": { "id": 1 }
            }
        }
    ]
}
```