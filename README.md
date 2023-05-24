# __Servidor Métricas GraphQL__
Este repositório contém um servidor GraphQL desenvolvido em Golang que permite coletar métricas de consultas de links encurtados.

## __Funcionalidade__
O servidor GraphQL é projetado para coletar métricas de consultas de links encurtados, permitindo que você acompanhe o desempenho e a utilização de links encurtados em sua aplicação ou serviço.

## __Teste de Carga__
No diretório /scripts, você encontrará um teste de carga implementado usando o k6, uma ferramenta de teste de carga escrita em Go.

Certifique-se de ter o k6 instalado em sua máquina antes de executar o teste de carga.

Para executar o teste de carga, siga as etapas abaixo:

Abra um terminal na raiz do projeto.
Navegue até o diretório /scripts.
Execute o seguinte comando:

```shell
k6 run load-test.js
```
Isso iniciará o teste de carga e fornecerá métricas e estatísticas sobre o desempenho do servidor GraphQL durante a carga simulada.

## __Contato__
Pedro Cardozo - `p-cardozo@hotmail.com` ou `609455@univem.edu.br`
