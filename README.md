# GraphQL com a sintax do ORM Sequelize
## Tradicional (Múltiplos canais)
    - C = POST
    - R = GET 
    - U = PUT
    - D = DELETE

## GraphQl (Canal único)
    - mutations = POST / PUT / DELETE
    - queries = GET 

## Melhorias possíveis do modelo GraphQl
    - 1º: Evitar o carregamento de campos desnecessários do BD
    - 2º: Uma estrutura base, com crud default

### 1º Objetivo: Considerando os campos retornados na execução das consultas
### 2º Objetivo: Padronizar a criação de rotas, ex:
    Entidade users:
        - user        = Um usuário
        - users       = Uma lista de usuários
        - user-insert = Novo usuário
        - user-update = Atualiza usuário
        - user-delete = Remover / Soft delete do usuário

    Fluxo:
        - permitted: Se o usuário tem permissão para executar
        - execute: Processa a opetação

    A responsabilidade de consulta seria extendida para o front-end,
    ficando no banckend a configuração e permissões.
    Desse modo uma a conhecida controller do backend poderia ser implementada no front-end, como um Store, que a medida que mutations vão sendo submetidas, vai salvando no LocalStorage do usuário, e um commando especial emvia tudo para o servidor (commit), tornando mais simples o gerenciamento de estado da aplicação e possível sincronização em desconexão;

## Considerações
  - Centralizar em uma classe as validações de campo, e atributos que não podem ser consultados com o uso de decoradores.
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
        // apenas um usuário
        ["user"]: [{ /* sintaxe sequelize */ }],

        // lista de usuários
        ["users"]: [{ /* sintaxe sequelize */ }]
    ],
    "mutations": [
        ["user-insert"]: [{ /* propriedades do objeto */ }],
        ["user-update"]: [{
            "values": { /* propriedades do objeto */ },
            "filter": { /* sintaxe sequelize */ } 
        }],
        ["user-delete"]: [{ /* sintaxe sequelize */ }]
    ]
}
```

## Exemplo de configuração de entidade com restrições e validações
### Validadores das Mutations e Queries
```
    required
    writeonly
    readonly
    length
    unique
    regex
```

### Tratamento de valores
```
    default
    writecast
```

#### writeonly
    Um campo que não pode ser lido, apenas escrito. a senha por exemplo

#### writecast(() => {})
    Conversão dos dados de entrada do cliente, a senha por exemplo, que pode ser encripada

#### Unique(key?)
    Será contruída uma consulta para validar se existe outra entidade com o mesmo valor do campo, ex: (login, email)

#### length({ len: , min: , max: })
    Validador de compimento

## Entidade
```
    @Entity({ filter: { removed: false } })
    export class User {
        @Validators([Validators.required, Validators.length({ max: 8 })])
        id: string;

        @Validators([Validators.required, Validators.regex(\[0-9]{11}\gi), Validators.length({ len: 11 })])
        cpf: string;

        @Validators([Validators.required, Validators.unique, Validators.length({ max: 200 })])
        name: string;
        
        @Validators([Validators.required, Validators.unique, Validators.length({ max: 200 })])
        email: string;

        @Validators([Validators.required, Validators.unique, Validators.length({ min: 50, max: 10 })])
        login: string;
        
        @Validators([Validators.required, Validators.unique])
        birth: Date;

        @Values([Values.writecast(toHash(p))])
        @Validators([Validators.required, Validators.writeonly, Validators.length({ min: 10, max: 50 })])
        password: string;
        
        @Values([Values.default(false)])
        removed: boolean;
    }
```

#### Exemplos de retorno
```
{
    "queries": [
        // apenas um usuário
        ["user"]: [ /* usuários */ ],

        // lista de usuários
        ["users"]: [ /* listas */ ]
    ],
    "mutations": [
        ["user-insert"]: [{ 
            Validator: { ["id"]: ["required"] },
        }, 
        { }],
        ["user-update"]: [{ 
            Validator: { ["name"]: ["unique"] },
        }, 
        { }],
        ["user-delete"]: [{ 
            Error: "not-found",  
        }, 
        { }]
    ]
}
```