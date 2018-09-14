<?php

class Add
{
     private $a;
    private $b;
    function __construct($ax, $bx) {
        $this->a = $ax;
        $this->b  = $bx;
    }
       public function getA() {
          return $this->a;
      }
    public  function getB() {
          return $this->b;
      }
    
}
    class additionn 
    {
      public static function inputInteger()
      {
          fscanf(STDIN,"%s",$num);
          if(filter_var($num, FILTER_VALIDATE_INT))
          {
              return $num;
          }
          else{ 
          
              echo "Error..plz enter only integer value.\n";
              return ClassB::inputInteger();
          }
      }
      private $add;
      function __construct(Add $Addition) {
          $this->add = $Addition;
      }
    public  function getAandB() {
          return $this->add->getB()+$this->add->getA()."\n";
      }
  
    }
  echo "enter the number";
  $a=additionn::inputInteger();

  echo "enter the 2nd number";
  $b=additionn::inputInteger();
    
    $Sum = new Add("$a", "$b");
    $example = new additionn($Sum);
    echo"sum:".$example->getAandB();
     