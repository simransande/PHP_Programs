<?php
use Validation\Anotations as assert;

class school
{

    const CAPACITY=100;

    /**
     * @var int
     * 
     * @assert\Int
     */
    public $totalStudent=0;

    function __construct($student)
    {
        $this->totalStudent=$student;
    }
}

class name
{
 
    /**
     * @var string
     */

    protected $name;

    /**
     * @var int
     */
    protected $age;

    public function getName()
    {
        return $this->name;
    }
    public function getAge()
    {
        return $this->name;
    }
    public function setAge($age)
    {
        return $this->name;
    }

    

}






?>