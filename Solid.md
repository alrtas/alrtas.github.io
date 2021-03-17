1. [Single Responsiblity Principle (Princípio da responsabilidade única)](#single-responsiblity-principle-princípio-da-responsabilidade-única)
  2. Open-Closed Principle (Princípio Aberto-Fechado)
  3. Liskov Substitution Principle (Princípio da substituição de Liskov)
  4. Interface Segregation Principle (Princípio da Segregação da Interface)
  5. Dependency Inversion Principle (Princípio da inversão da dependência)

Esses principios ajudam a escrever códigos mais eficiens, separando responsabilidades, diminuindo acoplamentos, facilitando na refatoração do codigo e estimulando o reaproveitamento.

### Single Responsiblity Principle (Princípio da responsabilidade única)
**Uma classe deve ter um, e somente um, motivo para mudar**

Esse principio declara que uma classe deve ser especializada em um único assunto e apenas possuir uma responsabilidade, ou seja, a classe deve ter uma única tarefa ou ação para executar.
Exemplo

Abaixo segue um exemplo de um codigo `spaghetti` onde a classe order possui 3 violações ao SRP
 -  Falta de coesão, uma classe não deve assumir responsabilidades que não são suas
 -  Alto acoplamento, mais responsabilidades geram um maior nível de dependências, deixando o sistema engessao e frágil para mudanças
 -  Dificuldaeds na implementação de testes automatizados
 -  Dificuldades de reaproveitar o código, já que para trazer um metodo especifico da Order eu preciso trazer todos os outros metodos que não serão utilizados
```

############# SPAGHETTI CODE
<?php

class Order
{
    public function calculateTotalSum(){/*...*/}
    public function getItems(){/*...*/}
    public function getItemCount(){/*...*/}
    public function addItem($item){/*...*/}
    public function deleteItem($item){/*...*/}

    public function printOrder(){/*...*/}
    public function showOrder(){/*...*/}

    public function load(){/*...*/}
    public function save(){/*...*/}
    public function update(){/*...*/}
    public function delete(){/*...*/}
}
```
```
############# THE RIGHT WAY

<?php

class Order
{
    public function calculateTotalSum(){/*...*/}
    public function getItems(){/*...*/}
    public function getItemCount(){/*...*/}
    public function addItem($item){/*...*/}
    public function deleteItem($item){/*...*/}
}

class OrderRepository
{
    public function load($orderID){/*...*/}
    public function save($order){/*...*/}
    public function update($order){/*...*/}
    public function delete($order){/*...*/}
}

class OrderViewer
{
    public function printOrder($order){/*...*/}
    public function showOrder($order){/*...*/}
}

```
