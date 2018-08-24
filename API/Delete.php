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
    if ($result->num_rows > 0) {
        
    $sql1="DELETE * FROM MyGuests WHERE Fname='$firstname'";
    if($conn->query($sql1)==TRUE)
    {

    }
}
    }
