<?php
defined('BASEPATH') OR exit('No direct script access allowed');
class Manage_Accounts extends CI_Controller
{
   
    public function index() {

    //$this->load->view('template/header');
    $this->load->view('Login');


    }
    public function register()
    {

        $name=$_POST['username'];
       $pass=$_POST['password'];
       $mail=$_POST['email']; 
       $phone=$_POST['phone'];

       $conn=new mysqli("localhost","root","root","fundooNotes");//($servername, $username, $password, $dbname)
       if ($conn->connect_error) {
          
           die("Connection failed: " . $conn->connect_error);
       }     $sql = "INSERT INTO user (uname,email,password,phone) VALUES('$name','$mail','$pass',$phone)";
       echo $sql;
   if (mysqli_query($conn, $sql)) {
       echo "New record created successfully";
   } else {
       echo "Error: " . $sql . "<br>" . mysqli_error($conn);
   }
        $this->load->view('Register');
    }


    public function login()
    {
        //$login=$_POST;
        $mail=$_POST['email']; 
        $pass=$_POST['password'];
    
        $conn=new mysqli("localhost","root","root","fundooNotes");//($servername, $username, $password, $dbname)
        if ($conn->connect_error) {
           
            die("Connection failed: " . $conn->connect_error);
        }     $sql = "SELECT * From user (password,email) VALUES('$mail','$pass')";
        echo $sql;
    if (mysqli_query($conn, $sql)) {
        echo "New record created successfully";
        
    } else {
        echo "Error: " . $sql . "<br>" . mysqli_error($conn);
    }
        $this->load->view('Login');
    }
}