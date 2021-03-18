  1. [Single Responsiblity Principle (Princípio da responsabilidade única)](#single-responsiblity-principle-princípio-da-responsabilidade-única)
     - Uma classe deve ter um, e somente um, motivo para mudar
  2. [Open-Closed Principle (Princípio Aberto-Fechado)](#open-closed-principle-princ%C3%ADpio-aberto-fechado)
     - Objetos ou entidades devem estar abertos para extensão, mas fechados para modificação
  3. [Liskov Substitution Principle (Princípio da substituição de Liskov)](#liskov-substitution-principle-princípio-da-substituição-de-liskov)
     - Uma classe derivada deve ser substituível por sua classe base
  4. [Interface Segregation Principle (Princípio da Segregação da Interface)](#interface-segregation-principle-princípio-da-segregação-da-interface)
     - Uma classe não deve ser forçada a implementar interfaces e métodos que não irão utilizar.
  5. Dependency Inversion Principle (Princípio da inversão da dependência)
     - Dependa de abstrações e não de implementações.

Esses principios ajudam a escrever códigos mais eficiens, separando responsabilidades, diminuindo acoplamentos, facilitando na refatoração do codigo e estimulando o reaproveitamento.

[Aritgo original](https://medium.com/desenvolvendo-com-paixao/o-que-%C3%A9-solid-o-guia-completo-para-voc%C3%AA-entender-os-5-princ%C3%ADpios-da-poo-2b937b3fc530)
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

Open-Closed Principle também é base para o padrão de projeto Strategy a sua principal vantagem é a facilidade na adição de novos requisitos, diminuindo as chances de introduzir novos bugs — ou bugs de menor expressão — pois o novo comportamento fica isolado, e o que estava funcionando provavelmente continuara funcionando.






# Liskov Substitution Principle (Princípio da substituição de Liskov)

***Uma classe derivada deve ser substituível por sua classe base.****

se S é um subtipo de T, então os objetos do tipo T, em um programa, podem ser substituídos pelos objetos de tipo S sem que seja necessário alterar as propriedades deste programa. 
```
<?php

class A 
{
    public function getNome()
    {
        echo 'Meu nome é A';
    }
}

class B extends A 
{ 
    public function getNome()
    {
        echo 'Meu nome é B';
    }
}

$objeto1 = new A;
$objeto2 = new B;

function imprimeNome(A $objeto)
{
    return $objeto->getNome();
}

imprimeNome($objeto1); // Meu nome é A
imprimeNome($objeto2); // Meu nome é B
```
# Interface Segregation Principle (Princípio da Segregação da Interface)
***Uma classe não deve ser forçada a implementar interfaces e métodos que não irão utilizar.***<br><br>

Em um cenário fictício para criação de um game de animais, teremos algumas aves que serão tratadas como personagens dentro do jogo. Sendo assim, criaremos uma interface Aves para abstrair o comportamento desses animais, depois faremos que nossas classes implementem essa interface, veja:

```
<?php

interface Aves
{
    public function setLocalizacao($longitude, $latitude);
    public function setAltitude($altitude);
    public function renderizar();
}

class Papagaio implements Aves
{
    public function setLocalizacao($longitude, $latitude)
    {
        //Faz alguma coisa
    }
    
    public function setAltitude($altitude)
    {
        //Faz alguma coisa   
    }
    
    public function renderizar()
    {
        //Faz alguma coisa
    }
}

class Pinguim implements Aves
{
    public function setLocalizacao($longitude, $latitude)
    {
        //Faz alguma coisa
    }
    
    // A Interface Aves está forçando a Classe Pinguim a implementar esse método.
    // Isso viola o príncipio ISP
    public function setAltitude($altitude)
    {
        //Não faz nada...  Pinguins são aves que não voam!
    }
    
    public function renderizar()
    {
        //Faz alguma coisa
    }
}
```
Percebam que ao criar a interface Aves, atribuímos comportamentos genéricos e isso acabou forçando a classe Pinguim a implementar o método setAltitude()do qual ela não deveria ter, pois pinguins não voam! Dessa forma, estamos violando o Interface Segregation Principle — E o LSP também!
Para resolver esse problema, devemos criar interfaces mais específicas, veja:
```
<?php

interface Aves
{
    public function setLocalizacao($longitude, $latitude);
    public function renderizar();
}

interface AvesQueVoam extends Aves
{
    public function setAltitude($altitude);
}

class Papagaio implements AvesQueVoam
{
    public function setLocalizacao($longitude, $latitude)
    {
        //Faz alguma coisa
    }
    
    public function setAltitude($altitude)
    {
        //Faz alguma coisa   
    }
    
    public function renderizar()
    {
        //Faz alguma coisa
    }
}

class Pinguim implements Aves
{
    public function setLocalizacao($longitude, $latitude)
    {
        //Faz alguma coisa
    }
    
    public function renderizar()
    {
        //Faz alguma coisa
    }
}
```
No exemplo acima, retiramos o método setAltitude() da interface Aves e adicionamos em uma interface derivada AvesQueVoam. Isso nos permitiu isolar os comportamentos das aves de maneira correta dentro do jogo, respeitando o princípio da segregação das interfaces.
