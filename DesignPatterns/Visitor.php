<?php
interface Component
{
    function accept(Visitor $visitor);
}

class A implements Component
{
    function accept(Visitor $visitor)
    {
        $visitor->visitA($this);
    }
    function MethodOfA()
    {
        return "A";
    }
}

class B implements Component
{
    function accept(Visitor $visitor)
    {
        $visitor->visitB($this);
    }

    function MethodOfB()
    {
        return "B";
    }
}
interface Visitor
{
    public function visitA(A $element);

    public function visitB(B $element);
}
class ConcreteVisitor1 implements Visitor
{
    public function visitA(A $element)
    {
        print($element->MethodOfA()." + ConcreteVisitor1\n");
    }

    public function visitB(B $element)
    {
        print($element->MethodOfB()." + ConcreteVisitor1\n");
    }
}

class ConcreteVisitor2 implements Visitor
{
    public function visitA(A $element)
    {
        print($element->MethodOfA()." + Visitor1\n");
    }

    public function visitB(B $element)
    {
        print($element->MethodOfB()." + Visitor2\n");
    }
}
function clientCode(array $components, Visitor $visitor)
{
    
    foreach ($components as $component) {
        $component->accept($visitor);
    }
   
}

$components = [
    new A(),
    new B(),
];

print("The client code works with all visitors via the base Visitor interface:\n");
$visitor1 = new ConcreteVisitor1();
clientCode($components, $visitor1);
print("\n");

print("It allows the same client code to work with different types of visitors:\n");
$visitor2 = new ConcreteVisitor2();
clientCode($components, $visitor2);

?>