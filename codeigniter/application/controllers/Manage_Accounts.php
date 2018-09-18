<?php
defined('BASEPATH') OR exit('No direct script access allowed');
class Manage_Accounts extends CI_Controller
{

    public function index() {

    //$this->load->view('template/header');
    // $this->load->view('Login');


    }
    public function register()
    {
       
        $name=$_POST['username'];
       $hashed_password=$_POST['password'];
       $phone=$_POST['phone'];
       $mail=$_POST['email'];
       $pass = crypt($hashed_password);
       // $mail = test_input($email);
        // check if e-mail address is well-formed
        if (!filter_var($mail, FILTER_VALIDATE_EMAIL)) {
        echo "Invalid email format"; 
        }
   
        else{
       $conn=new mysqli("localhost","root","root","fundooNotes");//($servername, $username, $password, $dbname)
       if ($conn->connect_error) {

           die("Connection failed: " . $conn->connect_error);
          
       }
        
       $duplicate="SELECT * From user where email='$mail' and uname='$name'";
       
       $result=mysqli_query($conn, $duplicate);
       if($result->num_rows>=1)
        {
        echo "User name or Email id already exists.";
        }

        else{
        $sql = "INSERT INTO user(uname,email,password,phone) VALUES('$name','$mail','$pass',$phone)";
       echo $sql;
        if (mysqli_query($conn, $sql)) {
       echo "New record created successfully";
        }
         else 
         {
       echo "Error: " . $sql . "<br>" . mysqli_error($conn);
        }
        
    }
    }
}


    public function login()
    {
        // $emailErr ="";
        // if (empty($_POST["email"])) {
        //     $emailErr = "Email is required";
        //   } else {
        //     $mail = test_input($_POST["email"]);
        //     // check if e-mail address is well-formed
        //     if (!filter_var($mail, FILTER_VALIDATE_EMAIL)) {
        //       $mail = "Invalid email format"; 
        //     }
        //   }
        //$login=$_POST;
        
        $mail=$_POST['email'];
       $pass=$_POST['password'];
       $pass = crypt($pass1);
    //    if (hash_equals($hashed_password, crypt($user_input, $hashed_password))) {
    //     echo "Password verified!";
    //  }


        //  $mail = test_input($_POST["email"]);
        //  if (filter_var($mail, FILTER_VALIDATE_EMAIL)) {
        //      $mail = "valid email format"; 
        //  }

        //  function createUser($email){
        //     $sql = "SELECT count(email) FROM user WHERE email='$email'" ;
         
        //     $result = mysql_result(mysql_query($sql),0) ;
         
        //     if( $result > 0 ){
        //      die( "There is already a user with that email!" ) ;
        //     }//end if
        //  }
      

        $conn=new mysqli("localhost","root","root","fundooNotes");//($servername, $username, $password, $dbname)
        if ($conn->connect_error) {

            die("Connection failed: " . $conn->connect_error);
        }
         $sql = "SELECT * From user where email='$mail' and password='$pass'";
        //echo $sql;
        $result = mysqli_query($conn, $sql);
        //echo $result;
    if ($result->num_rows>=1) {

        echo "record found successfully";
        header("Location: http://localhost:4200/fundoo-notes", true, 301);
exit();
        // include 'test.html';
        

    } else {
        echo "Error: " . $sql . "<br>" . mysqli_error($conn);
    }

    
}

    public function forgotpassword()
    {
        session_start();
        //$login=$_POST;
        $mail=$_POST['email'];
        $conn=new mysqli("localhost","root","root","fundooNotes");//($servername, $username, $password, $dbname)
        if ($conn->connect_error) {

            die("Connection failed: " . $conn->connect_error);
        }
        else{

        
         $sql = "SELECT * From user where email='$mail'";
        //echo $sql;
        $result = mysqli_query($conn, $sql);


        $row = mysqli_fetch_assoc($result);
        $fetch_user_id=$row['email'];

        $email_id=$row['email'];
        $password=$row['password'];
        //echo $result;
       
        if($mail==$fetch_user_id) {
        $to = $email_id;
        $subject = "Password";
        $txt = "Your password is : $password.";
        $headers = "From: simransande.a@gmail.com" . "\r\n" .
        "CC: ankitaunhalkar19@gmail.com";
        mail($to,$subject,$txt,$headers);
        }
        else{
        echo 'invalid userid';
        }
    }
        }






        
    // if ($result->num_rows>=1) {
    //     echo "record found successfully";
    //     // include 'test.html';

    // } else {
    //     echo "Error: " . $sql . "<br>" . mysqli_error($conn);
    // }

    




    


}