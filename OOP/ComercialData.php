<?php
include "Utility.php";
function createAccount()
{
    $name=null;
    $balance=null;

    // echo "enter the name of json file \n";
    // $str=Utility::inputString();
    
    $inp = file_get_contents('customer.json');
    $tempArray = json_decode($inp);
    $i=0;
    if($i<=sizeof($tempArray))
    {
    echo "want to add user:\n";
    echo "yes or no;";
    $result=Utility::inputString();
    if($result=='yes')
    {

    echo "Enter the name of customer:\n";
    $name=Utility::inputString();

    echo "Enter the balance:\n";
    $balance=Utility::inputInteger();
    echo "enter the share count:\n";
    $sharecount=Utility::inputInteger();

    // $data= '{Name:'.$name.',Balance:' . $balance .'}';

    // $myObj->name = "$name";
    // $myObj->balance = $balance;

    $data=array('name'=>$name,'balance'=>$balance,'count'=>$sharecount);
    
    array_push($tempArray, $data);
    $jsonData = json_encode($tempArray);
    file_put_contents('customer.json', $jsonData);

    $project=fopen($data,"w")or die("file could not open");
    fwrite($project,$data);
    fclose($project);
    
}

    }
    }

 function buyShare()
    {

        // echo "enter the ammount:\n";
        // $ammount=Utility::inputInteger();
        // echo "enter the symbol:\n";
        // $symbol=Utility::input();
        $company = file_get_contents("Companyshare.json");
        $custemor = file_get_contents("customer.json");
        $json = json_decode($company,true);
        $json1 = json_decode($custemor, true);

        echo "enter the user:\n";
        $user=Utility::inputString();
        $n = sizeof($json1);
        for ($i = 0; $i < $n; $i++) 
        {
            $k = $json1[$i]["name"];
            $s1 = 0;
            if (strcmp($user, $k) == 0)
             {
                 echo "enter the share symbol to buy [@,#,!]:\n";
                 $sym=Utility::input();
                 $n1 = sizeof($json);
                 for ($i = 0; $i < $n1; $i++) 
                 {
                    $k1 = $json[$i]["Symbol"];
                    $s1 = 0;
                     if (strcmp($sym, $k1) == 0)
                      {
                          echo "enter the ammount:\n";
                          $amt=Utility::inputInteger();

                          $bal = $json1[$i]["balance"]; //custemer
                          $price = $json[$i]["Price"];  //company
                          $noShare=$json1[$i]["count"];  //custemer
                          $stockshare=$json[$i]["NumShare"];  //company

                          $noOfShare=$amt/$price;
                         // echo $noOfShare."\n";

                          $newbal = floor($bal-$amt);
                          //echo $newbal."\n";

                          $sharecountcus =floor( $noShare+$noOfShare);
                         // echo $sharecountcus."\n";

                          $sharecountstcompany = floor($stockshare-$noOfShare);
                          //echo $sharecountstcompany."\n";

                          $custemor = file_get_contents("customer.json");
                          $custemorstring = json_decode($custemor,true);

                          $company= file_get_contents("Companyshare.json");
                          $companystring = json_decode($company,true);

                         // print_r($newtring);
                          $custemorstring[$i]['balance']=$newbal;
                           $custemorstring[$i]['count']=$sharecountcus;
                         $companystring[$i]['NumShare']=$sharecountstcompany;


                         $newJsonString = json_encode($custemorstring);
                         file_put_contents("customer.json", $newJsonString);

                         $newJsonString1 = json_encode($custemorstring);
                         file_put_contents("customer.json", $newJsonString1);

                          $newJsonString2 = json_encode($companystring);
                          file_put_contents("Companyshare.json", $newJsonString2);

                        }
                    }
                }else
                echo "symbol not found:\n";
            }
        }

     function sellShare()
    {
       $company = file_get_contents("Companyshare.json");
        $custemor = file_get_contents("customer.json");
        $json = json_decode($company,true);
        $json1 = json_decode($custemor, true);

        echo "enter the user:\n";
        $user=Utility::inputString();
        $n = sizeof($json1);
        for ($i = 0; $i < $n; $i++) 
        {
            $k = $json1[$i]["name"];
            $s1 = 0;
            if (strcmp($user, $k) == 0)
             {
                 echo "enter the share symbol to buy [@,#,!]:\n";
                 $sym=Utility::input();
                 $n1 = sizeof($json);
                 for ($i = 0; $i < $n1; $i++) 
                 {
                    $k1 = $json[$i]["Symbol"];
                    $s1 = 0;
                     if (strcmp($sym, $k1) == 0)
                      {
                       
                          echo "enter the number of share to sell:\n";
                          $count=Utility::inputInteger();

                          $bal = $json1[$i]["balance"]; //custemer
                          $price = $json[$i]["Price"];  //company
                          $noShare=$json1[$i]["count"];  //custemer
                          $stockshare=$json[$i]["NumShare"];  //company

                          $selprize=$count*$price;
                          $newBal=$bal+$selprize;
                          $sharecountcus=$noShare-$count;

                          $sharecountstcompany=$stockshare+$count;

                          if($sharecountstcompany>0 && $noShare>0)
                          {
                            $custemor = file_get_contents("customer.json");
                            $custemorstring = json_decode($custemor,true);
  
                            $company= file_get_contents("Companyshare.json");
                            $companystring = json_decode($company,true);

                                 // print_r($newtring);
                          $custemorstring[$i]['balance']=$newBal;
                          $custemorstring[$i]['count']=$sharecountcus;
                          $companystring[$i]['NumShare']=$sharecountstcompany;


                         $newJsonString = json_encode($custemorstring);
                         file_put_contents("customer.json", $newJsonString);

                         $newJsonString1 = json_encode($custemorstring);
                         file_put_contents("customer.json", $newJsonString1);

                          $newJsonString2 = json_encode($companystring);
                          file_put_contents("Companyshare.json", $newJsonString2);



                          }

                        }
                    }
                    
                }
      
            }
    }
     function printReport()
    {
        $custemor = file_get_contents("customer.json");
        $json = json_decode($custemor, true);
        echo "Your name is " . $json[0]['name'] . "\n";
        echo "Balance left in your account Rs" . $json[0]["balance"] . "\n";
        for ($i = 1; $i < sizeof($json); $i++) 
        {
        echo "The name of comapany is " . $json[$i]["Company name"] . " and the symbol
        of purchsed stock is " . $json[$i]["Symbol"] . " and the no of share is " .
        $json[$i]["NumShare"] . "\n";
        }
    }

    function exitProcessing()
    {
        echo "Thank you..\n";
        exit;
    }

    
    

?>