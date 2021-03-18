# SQL vs NoSQL

### Diferenças gerais
 * NoSQL tem esquema dinamico para dados não estruturados.
    * Você crie documentos sem ter que definir sua estrutura primeiro;
    * Cada documento tenha sua própria estrutura única;
    * A sintaxe varie de base de dados para base de dados;
    * Você adicione campos sempre que precisar.  
* SQL  são estruturadas em linguagem de consulta (SQL) para definição e manipulação de dados. Por um lado, isso é extremamente poderoso: o SQL é uma das opções mais versáveis e mais utilizadas, sendo uma escolha segura e especialmente ótima para consultas complexas. Por outro lado, ele pode ser restritivo. O SQL exige que você use esquemas (arquiteturas visuais e lógicas de uma base de dados) pré-definidos para determinar a estrutura dos seus dados antes de trabalhar com eles.
  * Além disso, todos os seus dados devem seguir a mesma estrutura 

### Escalbilidade
 * NoSQL é horizontal (suporta trafego por sharing entre as instancias)
 * SQL é vertical (melhorando o servidor com mais CPU, RAM, SSD)

### Estruturas
 * NoSQL são baseados em Documentos, pares de chave-valor, grafos ou orientados a colunas
 * SQL são baseadas em tabelas.

 
### Beneficios
 * SQL
    * **Maturidade**: base de dados extremamente estabelecida, o que significa que há uma grande comunidade por trás, testes extensos e muita estabilidade.
    * **Compatibilidade**: está disponível para todas as plataformas mais utilizadas, inclusive Linux, Windows, Mac, BSD e Solaris. Ele também tem conectores para linguagens padrão de mercado
    * **Custo-benefício**: é open source e gratuita.
    * **Replicável**: pode ser replicada através de vários nós, significando que a carga de trabalho pode ser reduzida e a escalabilidade e disponibilidade da aplicação podem ser aumentadas.
    *  **Sharding**: Apesar do sharding (termo comum das bases de dados não-relacionais que significa divisão de dados entre vários servidores) não poder ser feito na maioria das bases de dados SQL, ele pode ser feito em servidores MySQL. Isso é tanto economicamente viável quanto bom para a empresa.
  * NoSQL
    *  **Esquema dinâmico:** isso te dá flexibilidade para mudar seu esquema de dados sem modificar nenhum outro dado existente.
    *  **Gerenciamento:** não requer um administrador. Isso facilita o uso do sistema, já que ele pode ser usado tanto pelos desenvolvedores quanto administradores
    *  **Escalabilidade:** é horizontamente escalável, o que ajuda a reduzir a carga de trabalho e escalar seu negócio com facilidade.
    *  **Velocidade:** Tem performance alta para consultas simples.
    * **Flexibilidade:** Flexibilidade

### Qual escolher:
 * SQL é uma escolha de peso para qualquer negócio que vai se beneficiar de sua estrutura e esquema pré-definidos. Por exemplo, aplicações que requerem transações de várias linhas — como sistemas de contabilidades ou sistemas que monitoram inventário — ou rodam em sistemas legados vão prosperar com a estrutura MySQL.
* O NoSQL, por outro lado, é uma boa escolha para negócios que têm crescimento rápido ou bases de dados sem definições claras de esquemas. Mais especificamente, se você não conseguir definir um esquema para o seu banco de dados, se perceber que está sempre desnormalizando esquemas de dados ou se o seu esquema passa constantemente por mudanças — como costuma ser o caso de apps mobile, análises em tempo real, sistemas de gerenciamento de conteúdo etc — o MongoDB pode ser a escolha certa para você.


# Otimizações SQL

Extraido do [seguinte artigo](https://imasters.com.br/banco-de-dados/sql-server-estudo-de-performance-tuning)

## Analise do banco SQL
 - Rotinas com duração de tempo alto
 - Rotinas que possuem um tempo de CPU alto
 - Rotinas com volume de I/O alto (reads/writes)
 - Análise de logs do servidor
 - Análise dos eventos de wait da instância
 - Análise de histórico de blocks e deadlocks
 - Análise de histórico de rotinas em execução no momento da lentidão
 - Análise de histórico de blocks e deadlocks
 - Relatórios de fragmentação de índices e tabelas
 - Relatórios de tabelas sem atualização de estatísticas
 - Relatórios de missing index
 - Está utilizando índice?
 - Qual índice foi utilizado?
 - Trabalho paralelizado?
 - Qual o volume dos dados?
 - Qual a operação de maior custo?
 - Qual o operador que foi utilizado? 
 - Para que seja possível entender e identificar o problema, é necessário que você tenha todos (ou boa parte) dos controles indicados acima. Eles vão te fornecer dados e informações sobre o que acontece na sua instância quando um problema de performance ocorre.

## Elaborar o diagnóstico
 - Análise do plano de execução, para identificar como a consulta está sendo feita internamente (e identificar possíveis anomalias, como conversão implícita)
 - Análise dos índices utilizados, para garantir que eles estão cobrindo as consultas mais pesadas (covering index)
 - Uso de SET STATISTICS IO e TIME, para medir a quantidade de leituras/escritas que são realizadas para cada objeto consultado, bem como o tempo de resposta de cada operação
 - Em muitos casos, a estrutura do banco está otimizada, mas a query está mal escrita. Sendo assim, a consulta pode sofrer alterações para otimizar o uso dos índices já existentes
 - Analisar os histogramas do índice, para validar se ele está realmente sendo eficaz e fazendo sentido

## Tunning
   - Alteração de Querys
   - Criação e alteração dos índices
   - Atualização de estatística
      
