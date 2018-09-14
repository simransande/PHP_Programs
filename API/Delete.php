<?php
// if (isset($_GET['firstname'])) {
//     canDataGet($_GET['firstname']);
    
// }

if (isset($_POST['store']) && function_exists($_POST['store'])) {
    Delete();
    //canDataGet($_GET['fname']);
    
}
function Delete($firstname)
{
    /**
    * @var string
    * @range(0, 100)
    * @label('first name')
    */
    $x=$_POST['fname'];
    $conn=new mysqli("localhost","root","root","MyGuests");//($servername, $username, $password, $dbname)
    if ($conn->connect_error) {
       
        die("Connection failed: " . $conn->connect_error);
    } 
    $x=$_POST['fname'];
    $sql1="SELECT * FROM MyGuests WHERE Fname='$x'";
    

    $sql="DELETE FROM MyGuests WHERE Fname='$x'";

    if (mysqli_query($conn, $sql)) {
        echo "record deleted successfully";
    } else {
        echo "Error: " . $sql . "<br>" . mysqli_error($conn);
    }

    }
