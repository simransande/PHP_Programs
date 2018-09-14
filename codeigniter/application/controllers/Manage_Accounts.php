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
        $this->load->view('Register');
    }

    public function login()
    {
        $this->load->view('Login');
    }
}