<?php

class Queue
{
    public $queue;
    public $size;
    public $rear;
    public $front;


    public function __construct()
    {
        $this->queue=array();
        $this->size=150;
        $this->rear=0;
        $this->front=0;

    }
    public function enqueue($data)
    {
        if($this->rear < $this->size)
        {
            $this->queue[$this->rear]=$data;
            $this->rear++;
            return $this->rear;
        }else{
            echo "queu is full";
        }
    }   
    public function deque()
    {
        if($this->front<$this->size)
        {
            return array_shift($this->queue);
        }
    }
    public function isEmpty()
    {
        if(count($this->queue)==0)
           {
                return true;
            }
            else{
                return false;
            }
            }

            public function sizeOfQue()   
            {
     // echo $front;
    $result= $this->rear - $this->front;
    return $result;
   }

   public function removeFirst()
   {
       $x=$this->front;

   }
        }
    
// $q=new Queue();
// $q->enqueue(10);



?>