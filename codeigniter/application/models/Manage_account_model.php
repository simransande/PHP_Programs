<?php
if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Manage_account_model extends CI_Model {
    public function get_users(){

        $data = array();
        $query = $this->db->get('detail');
        $res   = $query->result();        
        return $res;
    
     }
     
    }
?>