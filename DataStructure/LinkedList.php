<?php
include 'Node.php';


class LinkList
{
    public $head;
    public $last;
   public $size=0;

    public function __construct()
    {
        $this->head = new Node();
        $this->last = new Node();
        $this->size = 0;
    }

    public function insert($data)
    {
        $node = new Node();
        $node->data = $data;

        if ($this->head->next == null) 
        {
            $this->head->next = $node;
            $this->size++;
        } 
        else 
        {
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
        $current=$this->$head;
        $previous=$this->$head;

        while($head->data!=$key)
        {
            if($head->next==NULL)
            return NULL;
            else
            {
                $last=$current;
                $head=$current->next;
            }
            return true;
        }
        if($current==$this->head)
        {
            if($this->size==1)
            {
                $this->last=$this->head;
            }
            $this->head=$this->head->next;
            return true;
        }
        else
        {
            if($this->last==$current)
            {
                $this->last==$previous;
            }
            return true;
        }
        $previous->next=$current->next;
        $this->size--;
        }
    
    
    function size()
    {
        return $this->size;
    }
}

// {
//     public $head;
//     public $last;
//    public $size=0;

//     public function __construct()
//     {
//         $this->head = new Node();
//         $this->last = new Node();
//         $this->size = 0;
//     }
// public static function  add($data) 
// 	{
		
// 		 $node = new Node();
// 		if($this->$head == null) {
// 			$this->$head = $node;
// 			$last = $head;
// 		}
// 		else if(($head->$data==$data) > 0) 
// 		{
// 			$node->$next = $head;
// 			$this->$head = $node;
// 		}
// 		else if(($last->$data==$data) < 0) {
// 			$last->$next = $node;
// 			$last = $node;
// 		}
// 		else {
// 			$this->$tempPrev = $head;
// 			$this->$tempCurrent = $head->$next;
			
// 			while(($this->$tempCurrent != $last) && ($thi->$tempCurrent->$data==$data < 0)) {
// 				$this.$tempPrev = $tempCurrent;
// 				$tempCurrent = $tempCurrent->$next;
				
// 			}
// 			$tempPrev->$next = $node;
// 			$node->$next = $tempCurrent;
// 		}
// 		$size++;
// 	}
	
	
//     public static function  remove($data)
//     {
// 		$tempCurrent = $head;
// 		$tempPrev = null;
// 		while(!$tempCurrent->$data==$data){
// 			$this->$tempPrev = $this->$tempCurrent;
// 			$this->$tempCurrent = $tempCurrent->$next;
// 		}
// 		if($tempCurrent == $head){
// 			$head = $head->$next;
// 		}
// 		else{
// 			$tempPrev->$next = $tempCurrent->$next;
// 		}
// 		if($tempCurrent == $current){
// 			$current = $tempPrev;
// 		}
// 		$size--;
// 	}
	
	
//     public static function search($data)
//     {
// 		return index($data) == -1 ? false : true; 
// 	}
	
// 	public static function isEmpty(){
// 		return $size == -1 ? true : false;
// 	}
	
	
	
// 	public static function size(){
// 		return $size + 1;
// 	}
	
	
	
// 	public static function append($data){
// 		add($data);
// 	}
	
	
	
// 	public static function index($data){
// 		if($size == -1){
// 			return -1;
// 		}
// 		$head->$tempCurrent = $head;
// 		$tempPosition = 0;
		
// 		while(!$tempCurrent->$data==data){
// 			if($tempCurrent == $current) {
// 				return -1;
// 			}
// 			$tempCurrent = $tempCurrent->$next;
// 			$tempPosition++;
// 		}
// 		return $tempPosition;
// 	}

	
	
// 	public static function insert($pos , $data){

// 		if(($pos == $size+1) || ($size == -1)){
// 			add($data);
// 		}
// 		else if($pos == 0){
// 			$this->$tempNode = $head;
// 			$head = new $data;
// 			$head->$next = $tempNode;
// 		}
// 		else{
// 			$tempCurrent = $head;
// 			$tempPrev = null;
// 			$tempPosition = 0;
// 			while($tempPosition <= $pos + 1){
// 				$tempPrev = $tempCurrent;
// 				$tempCurrent = $tempCurrent->$next;
// 				$tempPosition++;
// 			}
// 			$newNode = new $data;
// 			$newNode->next = $tempCurrent;
// 			$tempPrev->$next = $newNode;
// 		}
// 		$size++;
// 	}
	
	
// 	public static function  pop($location){
// 		$tempCurrent = $head;
// 		$tempPrev = null;
// 		$tempPosition = 0;
// 		$size--;
// 		while($tempPosition != $location){
// 			$tempPrev = $tempCurrent;
// 			$tempCurrent = $tempCurrent->$next;
// 			$tempPosition++;
// 		}
// 		if($tempCurrent == $head){
// 			$head = $head->$next;
// 			return $tempCurrent->$data;
// 		}
// 		else if($tempCurrent == $last){
// 			$last = $tempPrev;
// 			$tempPrev->next = $tempCurrent->$next;
// 			return $tempCurrent->$data;
// 		}
// 		else{
// 			$tempPrev->$next = $tempCurrent->$next;
// 			return $tempCurrent->$data;
// 		}
// 	}
	
	
// 	public static function  pop(){
// 		return pop($size);
// 	}
	
	
	
// 	public static function  get($location) {
// 		$tempCurrent = $head;
// 		$tempPosition = 0;
		
// 		while(tempPosition != location){
// 			tempCurrent = tempCurrent.next;
// 			tempPosition++;
// 		}
		
// 		return tempCurrent.data;
		
// 	}
	
// 	public void list(){
// 		MyNode<T> tempCurrent = head;
// 		while(tempCurrent != null){
// 			System.out.print(tempCurrent.data+",");
// 			tempCurrent = tempCurrent.next;
// 		}
		
// }


//  class MyNode<T>{
// 	T data;	//data to be stored
// 	MyNode<T> next;	//reference to the next node
	
// 	MyNode(T data){
// 		this.data = data;
// 		next = null;
// 	}
// }
// }

// public void insert(java.lang.String string) {
// 	// TODO Auto-generated method stub
	
// }


// 	// TODO Auto-generated method stub
// 	public static void display1(String card)
//     {
       
//         for (int i = 0; i < card.length(); i++) {
//             System.out.print(card);
//         }
//         System.out.println();
//     }



?>