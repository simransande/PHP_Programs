<?php
class Utility
{
    public static function input()
    {
        fscanf(STDIN,"%s\n",$value);
        return $value;
    }
public static function inputString()
{
    fscanf(STDIN,"%s",$str);
    if(is_numeric($str))
    {
        echo "Enter the character only...\n";
        return Utility::inputString();
        
    }else
    return $str;
}
  public static function inputBoolean()
  {
    fscanf(STDIN,"%s",$num);
    if(filter_var($num, FILTER_VALIDATE_BOOLEAN))
    {
        return $num;
    }
    else{ 
    
        echo "Error..plz enter only boolean value.\n";
        return Utility::inputBoolean();
    }
  }
public static function inputInteger()
{
    fscanf(STDIN,"%s",$num);
    if(filter_var($num, FILTER_VALIDATE_INT))
    {
        return $num;
    }
    else{ 
    
        echo "Error..plz enter only integer value.\n";
        return Utility::inputInteger();
    }
}

public static function inputFloat()
{
    fscanf(STDIN,"%f",$fNum);
    if(filter_var($fNum, FILTER_VALIDATE_FLOAT))
    {
    return $fNum;
    }
    else {
        echo "Error..plz enter only float value.\n";
        return Utility::inputFloat();
    }
}

public static function inputLine()
{
    $line=stream_get_line(STDIN, 1024 ,PHP_EOL);
    return $line;
}

//banking

public static function banking($q,$person,$balance)
{
    $count = 0;
		while ($count < $person) {
			$flag;
			echo "Bank Counter:\n";
			do {
				echo "";

				echo "1.Deposit\n";
				echo "2.Withdraw\n";
				echo "3.check Current Balance is \n";
				echo "4.Number of person in queue\n";
				echo "5.Dequeue\n";
				echo "6.Enqueue\n";
				echo "Enter your choice\n";
				$choice = Utility::inputInteger();
                switch ($choice) 
                {

				case 1:
					echo "Enter the amt to deposit:\n";
					$amt =Utility::inputInteger();
					$balance = $balance + $amt;
					echo "Balance is ". $balance ."\n";
					break;

				case 2: {
					echo "Enter the amt to withdraw:\n";
					$withdrawal = Utility::inputInteger();
                    if ($withdrawal < $balance)
                     {

						$bal = $balance - $withdrawal;
					        $balance = $balance - $withdrawal;
							echo "Balance is: ".$balance."\n";
						

                    }
                    else 
                    {
                        echo " U dont have sufficient balance...\n";
                    }
				}
					// else { System.out.println("Insufficient balance"); }
					break;

				case 3:
					echo "Current balance is " .$balance."\n";
					break;

				case 4:
					$number = $q->sizeOfQue();
					echo "Number of person in Queue" . " " .$number."\n";
					break;

				case 5:
					$q->dequeue();
					$number = $q->sizeOfQue();
					echo "Number of person in Queue" . " " .$number."\n";
					break;

				case 6:
					$q->enqueue();
					$number = $q->sizeOfQue();
					echo "Number of person in Queue" . " " .$number."\n";
					break;

				default:
					echo "Invalid choice";
					break;

				}
				echo "Do you want to continue the transaction..\n";
				echo "Press true or false:\n";

				$flag = Utility::inputBoolean();
			} while ($flag);
			$q->deQue();
		}

	}

}
?>