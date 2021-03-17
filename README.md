# Meli Interview

## SOLID
  1. [Single Responsiblity Principle (Princípio da responsabilidade única)](#Single Responsiblity Principle (Princípio da responsabilidade única))
  2. Open-Closed Principle (Princípio Aberto-Fechado)
  3. Liskov Substitution Principle (Princípio da substituição de Liskov)
  4. Interface Segregation Principle (Princípio da Segregação da Interface)
  5. Dependency Inversion Principle (Princípio da inversão da dependência)

Esses principios ajudam a escrever códigos mais eficiens, separando responsabilidades, diminuindo acoplamentos, facilitando na refatoração do codigo e estimulando o reaproveitamento.

### Single Responsiblity Principle (Princípio da responsabilidade única)
**Uma classe deve ter um, e somente um, motivo para mudar**

Esse principio declara que uma classe deve ser especializada em um único assunto e apenas possuir uma responsabilidade, ou seja, a classe deve ter uma única tarefa ou ação para executar.
Exemplo
```
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

## OOP

## SQL vs NoSQL

## MicroServiços

## Reverse Proxy/ API Gateway

