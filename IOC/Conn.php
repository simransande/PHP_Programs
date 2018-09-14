<?php

class Add
{
     private $a;
    private $b;
    public  function __construct($ax, $bx) 
    {
        $this->a = $ax;
        $this->b  = $bx;
    }
    
    public function getA() 
    {
          return $this->a;
     }
    public  function getB() 
    {
          return $this->b;
    }
    
}

$x=new Add(2,3);
echo $x->getA()
?>