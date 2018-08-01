<?php
include 'Node.php';

class LinkList
{
    public $head;
    public $last;
    public $size;

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

        if ($this->head->next == null) {
            $this->head->next = $node;
            $this->size++;
        } else {
            $temp = $this->head;
            while ($temp->next != null) {
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


    function size()
    {
        return $this->size;
    }
}
?>