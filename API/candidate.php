<?php
if (isset($_POST['store']) && function_exists($_POST['store'])) {
    canData();
    //canDataGet($_GET['fname']);
    
}
function canData()
{
   /**
    * @var string
    * @range(0, 100)
    * @label('first name')
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
    * @var int
    */
    $a=$_POST['age'];

    $conn=new mysqli("localhost","root","root","MyGuests");//($servername, $username, $password, $dbname)
    if ($conn->connect_error) {
       
        die("Connection failed: " . $conn->connect_error);
    } 
    $sql = "INSERT INTO MyGuests (Fname,Lname,Mname,Age) VALUES ('$x','$y','$z',$a)";

if (mysqli_query($conn, $sql)) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}

}

// function canDataGet($firstname)
// {
//     /**
//     * @var string
//     * @range(0, 100)
//     * @label('first name')
//     */
//     $x=$_POST['fname'];
//     $conn=new mysqli("localhost","root","root","MyGuests");//($servername, $username, $password, $dbname)
//     if ($conn->connect_error) {
       
//         die("Connection failed: " . $conn->connect_error);
//     } 
//     $sql="SELECT * FROM MyGuests.MyGuests WHERE Fname=$firstname";
//     $result = $conn->query($sql);

// if ($result->num_rows > 0) {
//     //echo "<table><tr><th>ID</th><th>Name</th></tr>";
//     // output data of each row
//     while($row = $result->fetch_assoc()) {
//         echo "firstname:".$row["fname"]."lastname:".$row["lastname"]." middlename:".$row["middlename"]."age:".$row["Age"];
//     }
//     }
    
// }


?>