<?php
include "Utility.php";
function createAccount()

{
$fname=Null;
$lname=Null;
$mobile=0;
$dname=Null;
$zipno=0;
$idno=Null;

    
    echo "enter the name of json file \n";
    $str=Utility::inputString();
    $str=strtolower($str);
    $str=$str.".json";
 
    echo "Enter the First name \n";
    $fname=Utility::inputString();

    echo "Enter the last name \n";
    $lname=Utility::inputString();

    echo "Enter the mobile number \n";
    $mobile=Utility::inputInteger();
   
    echo "Enter the district name \n";
    $dname=Utility::inputString();

    echo "Enter the Zip code \n";
    $zipno=Utility::inputInteger();

    echo "Enter your Aadhar number \n";
    $idno=Utility::inputInteger();

//var JSONString = '[{"name":"Jonathan Suh","gender":"male"},{"name":"William Philbin","gender":"male"},{"name":"Allison McKinnery","gender":"female"}]';   

    $txt = '[ {"First name":"'.$fname.'","Last name":"' . $lname .'","Mobile number":' . $mobile.
         ',"District name":"' . $dname . '","Zip code":' . $zipno .',"Aadhar number":' . $idno .     '}]';
         
         //echo $txt;

        $project=fopen($str,"w");
        fwrite($project,$txt);
        fclose($project);

    
  }

  function update()
 {
   
    echo "enter the name of json file \n";
    $str=Utility::inputString();
    
    $str=strtolower($str);
    $str=$str.".json";
    //$json = file_get_contents('./student_data.json');
    $filecontent=file_get_contents($str);
    //$json_data = json_decode($json,true);
    $json=json_decode($filecontent,true);
    $i=0;
    if($i<sizeof($json))
    {
    echo "update the information \n";
    echo "1.First name \n";
    echo "2 Last name \n";
    echo "3 Mobile number \n";
    echo "4 District name \n";
    echo "5 State name \n";
    echo "6 Zip code \n";
    
    $n=Utility::inputInteger();
    
    switch($n)
    {
        case 1:echo "Enter the updated first name \n";
              $txt=Utility::inputString();
              $json[$i]['First name']=$txt;
              break;

        case 2:echo "Enter the last name to update information \n";
                $txt=Utility::inputString();
                $json[$i]['Last name']=$txt;
                break;

        case 3:echo "Enter the update mobile number \n";
                $txt=Utility::inputInteger(); 
                $json[$i]['Mobile number']=$txt;
                break;

        case 4:echo "Enter the updated District name \n";
                $txt=Utility::inputString();
                $json[$i]['District name']=$txt;
                break;

        case 5:echo "Enter the updated State name \n";
                $txt=Utility::inputString();
                $json[$i]['State name']=$txt;
                break;

        case 6:echo "Enter the updated Zip code \n";
                $txt=Utility::inputInteger();
                $json[$i]['Zip code']=$txt;
                break;

        default :echo "You have chosen wrong option \n";
    }
    $newJsonString = json_encode($json);
    file_put_contents($str, $newJsonString);
                                    
    }
    else
    echo "Please enter correct option \n";
    
}

function view()
{
    echo "enter the name of json file:\n";
    $str=Utility::inputString();
    $str=strtolower($str);
    $str=$str.".json";
    $filecontent=file_get_contents($str);
    // if($filecontent==true){
    $json=json_decode($filecontent,true);
    {
    $i=0;
    while($i<sizeof($json))
     {
         
    echo "First name :".$json[$i]['First name']."\n";
    echo "Last name :".$json[$i]['Last name']."\n";
    echo "Mobile number :".$json[$i]['Mobile number']."\n";
    echo "District name :".$json[$i]['District name']."\n";
    echo "Zip code :".$json[$i]['Zip code']."\n";
    echo "Aadhar number :".$json[$i]['Aadhar number']."\n";
    break;
    }
    
    }
}
   



function delete()
{

   echo "enter the name of json file:\n";
   $str=Utility::inputString();
   $str=strtolower($str);
   $str=$str.".json";
   $filecontent=file_get_contents($str);
   $json=json_decode($filecontent,true);
   $i=0;
  
   if($i<sizeof($json))
   {
   echo "Select the option to update the information \n";
   echo "1 first name \n";
   echo "2 last name \n";
   echo "3 mobile number \n";
   echo "4 district name \n";
   echo "5 state name \n";
   echo "6 Zip code \n";
  
   $n=Utility::inputInteger();
  
    switch($n)
    {
        case 1:
            $json[$i]['First name']=Null;
            break;

        case 2:echo 
            $json[$i]['Last name']=Null;
            break;

        case 3:echo   
            $json[$i]['Mobile number']=Null;
            break;

        case 4: 
            $json[$i]['District name']=Null;
            break;

        case 5:
            $json[$i]['State name']=Null;
            break;

        case 6:
            $json[$i]['Zip code']=Null;
            break;
       default :echo " default option \n";
    }
    $newJsonString = json_encode($json);
    file_put_contents($str, $newJsonString);
                                  
   }
   else
   echo "Enter the correct option \n";

}
