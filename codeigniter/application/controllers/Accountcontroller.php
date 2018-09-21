<?php
defined('BASEPATH') OR exit('No direct script access allowed');
//include "models/responseModel.php";

class Accountcontroller extends CI_Controller
{
//     public function __construct(){
//         parent::__construct();

//         $this->load->model('responseModel'); //Load the Model here   

// }
    public function index() 
    {
    }
   
    //regester a new user with name,email,password and phone number

    public function register()
    {
        /**
        * @var string
        * @range(4, 128)
        * @label('Name of user')
        */
       $name=$_POST['username'];

       /**
        * @var integer
        *@range(4,8)
        *@label('password')
        */
       $pass=$_POST['password'];

         /**
        * @var integer
        *@label('phone number')
        */
       $phone=$_POST['phone'];
       
        
       $mail=$_POST['email'];
 
        // check if e-mail address is well-formed
        if (!filter_var($mail, FILTER_VALIDATE_EMAIL)) 
        {
         echo "Invalid email format"; 
        }
   
        else
        {
       $conn=new mysqli("localhost","root","root","fundooNotes");//($servername, $username, $password, $dbname)
       if ($conn->connect_error) 
       {

           die("Connection failed: " . $conn->connect_error);
          
       }
        
       $duplicate="SELECT * From user where email='$mail' and uname='$name'";
       
       $result=mysqli_query($conn, $duplicate);
       if($result->num_rows>=1)
        {
             echo "User name or Email id already exists.";
        }

        else
        {
         $sql = "INSERT INTO user(uname,email,password,phone) VALUES('$name','$mail','$pass',$phone)";
         echo $sql;
         if (mysqli_query($conn, $sql))
            {
           // echo "New record created successfully";
            
             }
            else 
            {
           // echo "Error: " . $sql . "<br>" . mysqli_error($conn);
            }
        
        }
        }
    }

    //login the user using email id and password

    public function login()
    {     
     //  $res=new Response_model();
        // $res=new responseModel();
       // $this->load->model('Response_model'); //Load the Model here   
        $flag=0;

            /**
         * @Assert\Email(
         *     message = "The email '{{ value }}' is not a valid email.",
         *     checkMX = true
         * )
         */
        $mail=$_POST['email'];

        /**
        * @var integer
        *@range(8,14)
        *@label('password')
        */
        $pass=$_POST['password'];
   
        $conn=new mysqli("localhost","root","root","fundooNotes");//($servername, $username, $password, $dbname)
        if ($conn->connect_error) {

            die("Connection failed: " . $conn->connect_error);
        }   
         $sql = "SELECT * From user where email='$mail' and password='$pass'";
    
        $result = mysqli_query($conn, $sql);

        // $row = mysqli_fetch_assoc($result);
        //  //$fetch_user_id=$row['email'];
        //  $email_id=$row['email'];

        if ($result->num_rows>=1) 
        {  
            $mail=$_POST['email'];              
            $flag++;            
            $myjson='{"email":'.'"'.$mail.'","status":'.$flag."}"  ;           
            print $myjson;  
        } 
        else
        {
            //echo "Error: " . $sql . "<br>" . mysqli_error($conn);
            $flag--;
            print  $flag;
        }
        
    }


    //if user forget password then with using mail id it will recover the password

    public function forgotpassword()
    {

        header('Access-Control-Allow-Origin: *');
        header('Access-Control-Allow-Headers: X-Requested-With');
        header('Access-Control-Allow-Methods: POST, GET, OPTIONS');

        // echo 'id' . $this->post('username');

        if (!empty($_POST["email"])) 
        {

          /**
           * @Assert\Email(
           *     message = "The email '{{ value }}' is not a valid email.",
           *     checkMX = true
           * )
           */
            $email = $_POST["email"];
            $conn = mysqli_connect("localhost", "root", "root", "fundooNotes");//($servername, $username, $password, $dbname)
            $sql = "Select * from user where email='$email'";
            $result = mysqli_query($conn, $sql);
            $user = mysqli_fetch_array($result);
            if (!empty($user)) 
            {
                require_once("forgot-password-recovery-mail.php");
            } else {
                $error_message = 'No User Found';
            }
        }
    
    }

    public function resetpassword()
    {     
      
    
        $mail=$_POST['email'];
        $pass=$_POST['password'];

        $conn=new mysqli("localhost","root","root","fundooNotes");//($servername, $username, $password, $dbname)
        if ($conn->connect_error) {

            die("Connection failed: " . $conn->connect_error);
        }   
         $sql = "update user SET password='$pass' where email='$mail'";
    
        $result = mysqli_query($conn, $sql);

        if ($result) 
        {                
          // consol.log("updated successfully") ;
            // $flag++;

        } 
        else
        {
              //  echo "Error: " . $sql . "<br>" . mysqli_error($conn);
            //    $flag--;
            //    print  $flag;
        }
        
    }

   public function notes()
   {
        /**
        * @var string
        * @label('title')
        */
        $title=$_POST['title'];

        /**
         * @var string
         *@range(0,10000)
         *@label('description')
         */
        $des=$_POST['description'];
 
        //   /**
        //  * @var integer
        //  *@label('phone number')
        //  */
        // $phone=$_POST['phone'];
        
        $conn=new mysqli("localhost","root","root","fundooNotes");//($servername, $username, $password, $dbname)
        if ($conn->connect_error) 
        {
 
            die("Connection failed: " . $conn->connect_error);
           
        }
         
          $sql = "INSERT INTO note (title,description) VALUES('$title','$des')";
          echo $sql;
        //  $result=mysqli_query($conn, $sql);
          $result = mysqli_query($conn, $sql);
          if($result->num_rows>=1)
             {
                $title=$_POST['title'];
                $des=$_POST['description'];

                $mail=$_POST['email'];              
                $flag++;            
                $myjson='{"title":'.'"'.$title.'","description":'.$des."}"  ;           
                print $myjson;  
                 //$flag++;
            // echo "New record created successfully";
             
              }
             else 
             {
                 $flag--;
            // echo "Error: " . $sql . "<br>" . mysqli_error($conn);
             }
            // }
         }
        // }
         
     
 
   


}