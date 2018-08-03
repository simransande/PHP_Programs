<?php

include "Utility.php";
include "Stack.php";


	echo "Enter max size: \n";
    $n=Utility::input();
            
	//creating Stack     
	$stack = new Stackclass ($n);
	echo "Enter expression:\n ";
	$exp = Utility::inputString();        
			
		$len = strlen($exp);
		echo "Matches and Mismatches: \n";
			for ($i = 0; $i < $len; $i++)
			{    
				$ch = $exp[$i];

				if ($ch == '(')
				{
					$stack->push($i);
					
				}
				else if ($ch == ')')
				{
				try
				{
					$p = $stack->pop()+1;
					echo "')' at index " .($i+1). " matched with '(' at index ". ($p) . "\n";
				}
				catch(Exception $e)
				{
					echo "')' at index " .($i+1). " is unmatched";
				}
				} 
            }
            
			if (!$stack->isEmpty() )
			{
                echo "'(' at index " .($stack->pop() +1) . " is unmatched\n";
			    echo "\n---unbalenced expression---\n";
			}
			else
			{
				echo "\n---balenced expression---\n";
			}
	

?>