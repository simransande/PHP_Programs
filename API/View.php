<?php
if (isset($_GET['firstname'])) {
    canDataGet($_GET['firstname']);
    
}
function canDataGet($firstname)
{
    /**
    * @var string
    * @range(0, 100)
    * @label('first name')
    */
    $conn=new mysqli("localhost","root","root","MyGuests");//($servername, $username, $password, $dbname)
    if ($conn->connect_error) {
       
        die("Connection failed: " . $conn->connect_error);
    } 
    $sql1="SELECT * FROM MyGuests WHERE Fname='$firstname'";
    $resultt = $conn->query($sql1);
    //$res = mysqli_fetch_row($resultt);

// if ($resultt->num_rows > 0) {
//     //echo "<table><tr><th>ID</th><th>Name</th></tr>";
//     // output data of each row
//     while($row = $resultt->fetch_assoc()) {
//         $res = "firstname:".$row["Fname"].","."lastname:".$row["Lname"].","." middlename:".$row["Mname"].","."age:".$row["Age"];
//     }
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
// print json_encode($rows);


// $result=[];
// if(empty($res)){
//     $result=array('status'=>'error','data'=>$res);
// }else{
//     $result=array('status'=>'success','data'=>$res);
// }
// echo json_encode($result);}
}
?>

