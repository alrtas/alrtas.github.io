# Proxy Reverso
![image](https://user-images.githubusercontent.com/32065208/111626749-21cc1380-87cd-11eb-8c98-89051257056e.png)

Um proxy reverso é um servidor de rede geralmente instalado para ficar na frente de um servidor Web. Todas as conexões originadas externamente são endereçadas para um dos servidores Web através de um roteamento feito pelo servidor proxy, que pode tratar ele mesmo a requisição ou encaminhar a requisição toda ou parcialmente a um servidor Web, que tratará dela.

Um proxy reverso repassa o tráfego de rede recebido para um conjunto de servidores, tornando-o a única interface para as requisições externas. Por exemplo, um proxy reverso pode ser usado para balancear a carga de um cluster de servidores Web. O que é exatamente o oposto de um proxy convencional, que age como um despachante para o tráfego de saída de uma rede, representando as requisições dos clientes internos para os servidores externos à rede a qual o servidor proxy atende.

## Principais caracteristicas 
- **Segurança**: O servidor proxy pode oferecer uma camada adicional de defesa através da separação ou isolamento do servidor que está por trás de um proxy reverso. Essa configuração pode inclusive proteger os demais servidores da rede, principalmente pela obscuridade.
- **Criptografia**: A criptografia SSL pode ser delegada ao próprio servidor proxy, em vez dos servidores Web. Nesse caso, o servidor proxy pode ser dotado de aceleradores criptográficos de alta performance.
- **Balanceamento de carga**: O proxy reverso pode distribuir a carga para vários servidores, cada servidor responsável por sua própria aplicação. Dependendo da arquitetura da rede onde o servidor proxy reverso está instalado, o proxy reverso pode ter que modificar as URLs válidas externamente, para os endereços da rede interna.
- **Cache**: Um proxy reverso pode aliviar a carga dos servidores Web através de um cache para o conteúdo estático, como, por exemplo, imagens, e também conteúdo dinâmico, como, por exemplo, uma pagina HTML gerada por um Sistema de Gerenciamento de Conteúdo. Um cache desse tipo pode satisfazer uma quantidade considerável de requisições, reduzindo de forma significativa o servidor Web. Outro termo utilizado é Acelerador Web. Essa técnica é utilizada nos servidores da Wikipédia.
- **Compressão**: Um servidor proxy pode otimizar e comprimir o conteúdo, tornando o acesso mais rápido.

## As Vantagens de Usar Proxy Reverso Nginx
 - É simples de implementar e proporcionar ao usuário segurança de ponta contra ataques a servidores web como DDoS e DoS
 - O Proxy Reverso Nginx ajuda a criar uma carga equilibrada entre vários servidores back-end e proporciona cache para um servidor back-end mais lento
 - O Nginx não exige a configuração de um novo processo para cada nova solicitação da web vinda do cliente. Ao invés disso, a configuração padrão é para incluir apenas um processo de trabalho por CPU
 - Pode agir como um servidor Proxy Reverso para vários protocolos como HTTP, HTTPS, TCP, UDP, SMTP, IMAP e POP3
 - Ele pode operar mais de 10000 conexões com uma pequena pegada de memória. O Nginx pode operar múltiplos servidores da internet através de um único endereço de IP e entregar cada solicitação para o servidor dentro de uma LAN
 - O Nginx é um dos melhores servidores da web para melhorar o desempenho de conteúdo estático. Adicionalmente, pode ser útil servir conteúdo em cache e executar criptografia SSL para diminuir a carga do servidor
 - Pode ser útil na hora de otimizar conteúdos ao comprimi-los para melhorar o tempo de carregamento
 - O Nginx pode executar experimentos aleatórios ou testes A/B sem posicionar códigos JavaScript nas páginas.


# API Gateway
