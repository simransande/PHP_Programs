<?php
include "Utility.php";
function createAccount()
{
    $name=null;
    $balance=null;

    echo "enter the name of json file:\n";
    $str=Utility::inputString();
    $str=strtolower($str);
    $str=$str.".json";

    echo "Enter the name of customer:\n";
    $name=Utility::inputString();

    echo "Enter the balance:\n";
    $balance=Utility::inputInteger();

    $data='[ {"Name":"'.$name.'","Balance":"' . $balance .'"}]';


    $project=fopen($str,"w")or die("file could not open");
    fwrite($project,$data);
    fclose($project);
    return $str;
}

function buyShare()
{

$s=file_get_contents("Companyshare.json");
$json=json_decode($s,true);
echo "Enter the symbol of company:\n";
$symbol=Utility::input();
$file=file_get_contents("sim.json");

$file1=json_decode($file,true);

preg_match($symbol, $file1);
print_r($matches);

$a=array("TATA","BAJAJ","WIPRO");
$n=sizeof($json);

for($i=0;$i<$n;$i++)
    {
        $k=$a[$i];
        $sum1=0;
        $n1=sizeof([$k]);

        for($j=0;$j<$n1;$j++)
        {
        
        }


    }

}

?>