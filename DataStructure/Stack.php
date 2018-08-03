<?php 
class Stackclass  
{


    protected $stack;
    protected $limit;

    public function __construct($limit = 10, $initial = array()) 
    {
            
        $this->stack = $initial;
       
        $this->limit = $limit;
    }

    public function push($item)            //add last
    {
       
        if (count($this->stack) < $this->limit)
         {
            array_push($this->stack, $item);        //insert at last array_push
        } else 
        {
            echo "Stack is full..\n";
        }
    }

    public function addFirst($item)
    {
        if(count($this->stack)<$this->limit)
        {
            array_unshift($this->stack, $item);         //insert at first array_unshift
        }
        else
        {
            echo "stack is full..\n";
        }
    }
    public function pop()           //delete last
     {
        if ($this->isEmpty()) 
        {
            throw new RunTimeException('Stack is empty!');
        } else 
        {
            return array_pop($this->stack);
        }
    }

    public function deleteFirst()
    {
        if($this->isEmpty())
        {
            echo "stack is empty..\n";
        }
        else 
        {
            return array_shift($this->stack);
        }
    }
    public function top() 
    {

        return current($this->stack);
        
    }

    public function isEmpty() 
    {
        return empty($this->stack);
    }

}
?>

