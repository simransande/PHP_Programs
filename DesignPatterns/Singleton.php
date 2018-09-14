<?php
class Database
{
    public static $connection;
    private function __construct()
    {
        echo "connection created:\n";
    }
    
    public static function connect()
    {
        if(!isset(self::$connection))
        {
            self::$connection=new DataBase;
        }
        return self::$connection;
    }
}
$obj=Database::connect();

?>