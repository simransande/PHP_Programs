<?php 

class Element
{
  public $value;
  public $next;
  
}

class Queue
{
  private $font = null;
  private $back = null; 
  public static  $size;
  
  
  function __construct()
  {
    $this->size=0;
  }
  public function isEmpty()
  {
    return $this->font == null;
  }
  
  
  public function enqueue($value)
  {
     $oldBack = $this->back;
     $this->back = new Element(); 
     $this->back->value = $value;
     if($this->isEmpty())
     {
       $this->font = $this->back; 
       $this->size++;
     }else
     {
       $oldBack->next = $this->back;
       $this->size++;
     }
  }
  
  public function dequeue()
  {
    if($this->isEmpty())
    {
      
      return null; 
    }
    $removedValue = $this->font->value;
    $this->font = $this->font->next;
    $this->size--;
    return $removedValue;
  }

  public function sizeOfQue() 
  {
     // echo $font;
    //$result= $this->back - $this->font;
    return $this->size;
  }
  
 
}