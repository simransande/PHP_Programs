<?php

if (isset($_POST['store']) && function_exists($_POST['store'])) {
    Update();//$_POST['firstname'],$_POST['Agee']);
    //canDataGet($_GET['fname']);
    
}
function Update()
{ 
    /**
    * @var string
    * @range(0, 100)
    * @label('first name')
    */
     $x=$_POST['fname'];
     /**
    * @var int
    * @label('age')
    */
     $y=$_POST['age'];
    
    

    $conn=new mysqli("localhost","root","root","MyGuests");//($servername, $username, $password, $dbname)
    $sql="UPDATE MyGuests SET Age='$y'  WHERE Fname='$x'";
    $sql1="SELECT * FROM MyGuests WHERE Fname='$x'";
    
    
    if (mysqli_query($conn, $sql)) {
        echo "record updated successfully";
    } else {
        echo "Error: " . $sql . "<br>" . mysqli_error($conn);
    }



}

?>