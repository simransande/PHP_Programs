<?php


class Deque{
 private $deque = NULL;
 private $limit ;
 function __construct($limit = -1){
     $this->deque = array();
     $this->limit = $this->getLimit($limit);
     echo $this->limit;
 }
function insert_front($item){
     if($this->getInsertStatus()) {
         array_unshift($this->deque, $item);
     }else {
        throw new Exception("Deque is already full");
     }
 }
 function insert_back($item){
     if($this->getInsertStatus()) {
         array_push($this->deque,$item);
     }else {
         throw new Exception("Deque is already full");
     }
 }
 function remove_front(){
      if(!empty($this->deque)){
          array_shift($this->deque);
      }else {
          throw new Exception("Trying to pop element from empty deque");
     }
 }
 function remove_back(){
      if(!empty($this->deque)){
          array_pop($this->deque);
      }else {
         throw new Exception("Trying to pop element from empty deque");
      }
 }
 function isEmpty(){
      $isEmpty = empty($this->deque);
      return $isEmpty;
 }
 function size(){
      $size = count($this->deque);
      return $size;
 }
  function getInsertStatus(){
     $isInfiniteQueue        = ($this->limit == -1);
     $isSizeSmallerThanLimit = (count($this->deque) < ($this->limit));
     $status = ($isInfiniteQueue) || ((!$isInfiniteQueue) && $isSizeSmallerThanLimit);
     return $status;
 }
private function getLimit($limit){
     if(!((gettype($limit) == 'integer') &&  ($limit > 0))){
         $limit = -1;
     }
        return $limit;
     }
    }
 
?>