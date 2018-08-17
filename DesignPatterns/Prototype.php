<?php
abstract class Book  //creating standrd object for each class
{
    protected $author;
    protected $topic;
    abstract function __clone();
    function getAuthor() 
    {
        return $this->author;
    }
    function setAuthor($authorIn) 
    {
        $this->author = $authorIn;
    }
    function getTopic() 
    {
        return $this->topic;
    }
}

class PHPBook extends Book {  //new instance
    function __construct() {
        $this->topic = 'PHP';
    }
    function __clone() {  //clone the object
    }
}

class GOBook extends Book{
    function __construct() {
        $this->topic = 'GO';
    }
    function __clone() {
    }
}

  $php = new PHPBook();
  $go = new GOBook();

  $book1 = clone $go;
  $book1->setAuthor("Brian Kernighan");
  echo "Book 1 topic: ".$book1->getTopic()."\n";
  echo "Book 1 title: ".$book1->getAuthor()."\n";
  

  $book2 = clone $php;
  $book2->setAuthor("Luke Welling");
  echo "Book 2 topic: ".$book2->getTopic()."\n";
  echo "Book 2 title: ".$book2->getAuthor()."\n";
  
  $book3 = clone $go;
  $book3->setAuthor("Alan A. A. Donovan");
  echo "Book 3 topic: ".$book3->getTopic()."\n";
  echo "Book 3 title: ".$book3->getAuthor()."\n";
 
?>