<?php
include 'Node.php';
class LinkList
{
    public $head;
    public $last;
   public $size=0;
    // public function __construct()
    // {
    //     $this->head = new Node();
    //     $this->last = new Node();
    //     $this->size = 0;
    // }
    public function insert($data)
    {
        
        
        if ($this->head == null) 
        {
            $node = new Node($data);
            $this->head = $node;
            $this->size++;
        } 
        else 
        {
            $node = new Node($data);

            $temp = $this->head;
            while ($temp->next != null) 
            {
                $temp = $temp->next;
            }
            $temp->next = $node;
            $this->size++;
        }
    }
    public function show()
    {
        $node = $this->head;
        while ($node->next != null) 
        {
            echo $node->data . "\n";
            $node = $node->next;
        }
        echo $node->data . "\n";
    }
    public function search($target)
    {
        $node = $this->head;
        while ($node != null)
         {
        if (($node->data) == ($target))
        {
             
           
            return true;
            
         }
        $node = $node->next;
    }
        return false;
    }
  
    
    public function delete($key)
    {

        $current=$this->head;
        $previous=$this->head;
        if($current->data==$key)
        {
            $this->head=$current->next;
        }else{

        
        while($current->data!=$key)
        {
            $previous = $current;
            $current=$current->next;
        }
        if($current->data==$key)
        {
            $previous->next=$current->next;

        }
    }
        
    }

    public function addFirst()
    {
        $current->data=$data;
        $current->data=$current->next;

    }

    public function removeFirst()
    {
         $current = $this->head;
        $thus->head=$current->next;
    }
    public function getFirst()
    {
        return $this->head->data;
    }

        public function removeLast()
        {
            $current=$this->head;
            $previous=$this->head;
            while($current->next!=null)
            {
                $previous=$current;
                $current=$current->next;
                }
                $privious->next=null;
                

        }
        

        public function getLast()
        {
          $current=$this->head;
            $previous=$this->head;

        while($current->next!=null)
        {
            $previous=$current;
            $current=$current->next;
        }
        return $cureent->data;
        }
    function size()
    {
        return $this->size;
    }
    function isEmpty()
    {
        $current=null;
    }
}