# Deploy
Para aplicações 0 Down Time apresento duas abordagens

- Blue-Green
  - A implantação Blue-Green é um modelo de lançamento de aplicações que transfere gradualmente o tráfego de usuários de uma versão anterior da aplicação ou do microsserviço para uma nova versão praticamente idêntica, estando ambas em execução em ambiente de produção. 
  - A versão antiga pode ser chamada de ambiente *Blue*, enquanto a versão nova é chamada de ambiente *Green*. Depois que o tráfego de produção é totalmente transferido do ambiente azul para o verde, o azul pode ser mantido para fins de reversão ou retirado da produção e atualizado para tornar-se o template para a próxima atualização.  
- Canary
  - Canary é uma aplicação que consiste em colocar a versão nova em produção, mas liberar o experimento dessa versão apenas para pequenos grupos. Em outras palavras, o acesso não é liberado para todos ao mesmo tempo.
  - Em Canary, o ambiente antigo segue ativo simultaneamente ao novo ambiente. Por isso, pode-se liberar uma parcela dos usuários para acessar o novo ambiente e ver como ele se comporta com usuários reais. Assim é possível identificar se vão existir problemas no dia a dia.
  - É comum que quando o desenvolvedor está testando uma nova aplicação internamente, tudo funcione e dê certo. Com Canary, é possível saber o momento ideal de disponibilizar uma nova versão para todos. Essa, aliás, é uma boa estratégia de gerenciamento de projeto. 


## Quando escolher qual?
- Blue-Green
  - Confiante na nova versão
  - Realase de pequenas features
  - Necessidade de atualizar todos os clientes de um vez 

- Canary
  - Não estamos 100% confiantes da nova versão, acreditamos que ocorrerão alguns bugs
  - Preocupação com relação a escalabilidade e performance
  - Grandes updates com funcções experimentais
  - Estamos OK com um rollout mais demorado  
