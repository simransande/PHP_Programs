<?php
include "Utility.php";
include "LinkedList.php";

echo "Enter any string:\n";
$str=Utility::input();

//Utility::palindrome($str);

		
		$q=new LinkList();
		$front;
		$rear;
		$f = 0;
		for($i=0;$i<strlen($str);$i++)
		{
		 $q->getInsertStatus(substr($str,$i));
		}
		do
		{	
		$front =$q->remove_front();
		if($q->isEmpty())
		{	
		break;
		}	
		$rear =$q->remove_back();
		if($front!=$rear)
		{	
		$f = 1;
		break;
		}

		}while(!$q->isEmpty());
		if( $f == 1 )
		{
		echo "strings is not palindrome";
		}	
		else
		{
		echo "strings is palindrome";
		

		
		}

?>