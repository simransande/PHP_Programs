<?php
if (isset($_GET['firstname'])) {
    canDataGet($_GET['firstname']);
    
}
function canDataGet($firstname)
{
    $conn=new mysqli("localhost","root","root","MyGuests");//($servername, $username, $password, $dbname)
    if ($conn->connect_error) {
       
        die("Connection failed: " . $conn->connect_error);
    } 
    $sql1="SELECT * FROM MyGuests";
    $resultt = $conn->query($sql1);

//     }
$rows = array();
while($r = mysqli_fetch_assoc($resultt)) { //to return an associative array representing the next row 
    $rows[] = $r;
}
if(empty($rows)){
    $result=array('status'=>'error','data'=>$rows);
}else{
    $result=array('status'=>'success','data'=>$rows);
}
echo json_encode($result);

}
?>

