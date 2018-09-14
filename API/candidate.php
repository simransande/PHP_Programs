<?php
if (isset($_POST['store']) && function_exists($_POST['store'])) {
    canData();
    //canDataGet($_GET['fname']);
    
}
function canData()
{
   /**
    * @var string
    * @range(0, 20)
    */
    $x=$_POST['fname'];
    /**
    * @var string
    */
    $y=$_POST['lname'];
     /**
    * @var string
    */
    $z=$_POST['mname'];

     /**
      * @Inject
      * @var int
      *@range(0,100)
      */
    $a=$_POST['age'];

    $conn=new mysqli("localhost","root","root","MyGuests");//($servername, $username, $password, $dbname)
    if ($conn->connect_error) {
       
        die("Connection failed: " . $conn->connect_error);
    } 
    $sql = "INSERT INTO MyGuests (Fname,Lname,Mname,Age) VALUES('$x','$y','$z',$a)";
    echo $sql;
    // echo $x;
//     $x="";
//     // echo $x;
// $y="";

// $z="";

// $a="";

if (mysqli_query($conn, $sql)) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}

}


?>