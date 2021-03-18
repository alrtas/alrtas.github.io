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


