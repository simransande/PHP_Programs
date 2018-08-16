<?php
abstract class Book  //creating standrd object for each class
{
    protected $title;
    protected $topic;
    abstract function __clone();
    function getTitle() 
    {
        return $this->title;
    }
    function setTitle($titleIn) 
    {
        $this->title = $titleIn;
    }
    function getTopic() 
    {
        return $this->topic;
    }
}

class PHPBook extends Book {
    function __construct() {
        $this->topic = 'PHP';
    }
    function __clone() {  //clone the object
    }
}

class SQLBook extends Book{
    function __construct() {
        $this->topic = 'SQL';
    }
    function __clone() {
    }
}
 
  echo "BEGIN TESTING PROTOTYPE PATTERN \n";
 

  $php = new PHPBook();
  $sql = new SQLBook();

  $book1 = clone $sql;
  $book1->setTitle('SQL For Cats');
  echo "Book 1 topic: ".$book1->getTopic()."\n";
  echo "Book 1 title: ".$book1->getTitle()."\n";
  echo "\n ";

  $book2 = clone $php;
  $book2->setTitle('OReilly Learning PHP 5');
  echo "Book 2 topic: ".$book2->getTopic()."\n";
  echo "Book 2 title: ".$book2->getTitle()."\n";
  echo "\n ";

  $book3 = clone $sql;
  $book3->setTitle('OReilly Learning SQL');
  echo "Book 3 topic: ".$book3->getTopic()."\n";
  echo "Book 3 title: ".$book3->getTitle()."\n";
  echo "\n ";

 echo "END TESTING PROTOTYPE PATTERN \n";
  




?>