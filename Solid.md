1. [Single Responsiblity Principle (Princípio da responsabilidade única)](#single-responsiblity-principle-princípio-da-responsabilidade-única)
  2. [Open-Closed Principle (Princípio Aberto-Fechado)](#open-closed-principle-princ%C3%ADpio-aberto-fechado)
  3. Liskov Substitution Principle (Princípio da substituição de Liskov)
  4. Interface Segregation Principle (Princípio da Segregação da Interface)
  5. Dependency Inversion Principle (Princípio da inversão da dependência)

Esses principios ajudam a escrever códigos mais eficiens, separando responsabilidades, diminuindo acoplamentos, facilitando na refatoração do codigo e estimulando o reaproveitamento.

# Single Responsiblity Principle (Princípio da responsabilidade única)
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
Considero o SRP um dos princípios mais importantes, ele acaba sendo a base para outros princípios e padrões porque aborda temas como acoplamento e coesão, características que todo código orientado a objetos deveria ter.
Aplicando esse princípio, automaticamente você estará escrevendo um código mais limpo e de fácil manutenção! Se você tem interesse nesse assunto, recomendo a leitura das boas práticas para escrever códigos impecáveis.



# Open-Closed Principle (Princípio Aberto-Fechado)

**Objetos ou entidades devem estar abertos para extensão, mas fechados para modificação**, ou seja, quando novos comportamentos e recursos precisam ser adicionados no software, devemos estender e não alterar o código fonte original.<br><br>
Exemplo prático do OCP:
Em um sistema hipotético de RH, temos duas classes que representam os contratos de trabalhos dos funcionários de uma pequena empresa, contratados e estágiários. Além de uma classe para processar a folha de pagamento.

```
<?php

class ContratoClt
{
    public function salario()
    {
        //...
    }
}

class Estagio
{
    public function bolsaAuxilio()
    {
        //...
    }
}

class FolhaDePagamento
{
    protected $saldo;
    
    public function calcular($funcionario)
    {
        if ( $funcionario instanceof ContratoClt ) {
            $this->saldo = $funcionario->salario();
        } else if ( $funcionario instanceof Estagio) {
            $this->saldo = $funcionario->bolsaAuxilio();
        }
    }
}
```
<br><br>
**Aplicando OCP na prática**
Voltando para o nosso exemplo, podemos concluir que o contexto que estamos lidando é a remuneração dos contratos de trabalho, aplicando as premissas de se isolar o comportamento extensível atrás de uma interface, podemos criar uma interface com o nome Remuneravel contendo o método remuneracao(), e fazer com que nossas classes de contrato de trabalho implementem essa interface. Além disso, iremos colocar as regras de calculo de remuneração para suas respectivas classes, dentro do método remuneracao(), fazendo com que a classe FolhaDePagamento dependa somente da interface Remuneravel que iremos criar.

```<?php

interface Remuneravel
{
    public function remuneracao();
}

class ContratoClt implements Remuneravel
{
    public function remuneracao()
    {
        //...
    }
}

class Estagio implements Remuneravel
{
    public function remuneracao()
    {
        //...
    }
}

class FolhaDePagamento
{
    protected $saldo;
    
    public function calcular(Remuneravel $funcionario)
    {
        $this->saldo = $funcionario->remuneracao();
    }
}
```

Open-Closed Principle também é base para o padrão de projeto Strategy — Falerei desse padrão em um próximo artigo. Particularmente esse é o princípio que eu mais admiro, a sua principal vantagem é a facilidade na adição de novos requisitos, diminuindo as chances de introduzir novos bugs — ou bugs de menor expressão — pois o novo comportamento fica isolado, e o que estava funcionando provavelmente continuara funcionando.
