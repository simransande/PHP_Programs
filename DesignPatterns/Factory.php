<?php
class Automobile // This allows interfaces for creating objects,
                 // but allow subclasses to determine which class to instantiate
{
    private $vehicleMake;
    private $vehicleModel;

    public function __construct($make, $model)
    {
        $this->vehicleMake = $make;
        $this->vehicleModel = $model;
    }

    public function getMakeAndModel()
    {
        return $this->vehicleMake . "\n" . $this->vehicleModel . "\n";
    }
}

class AutomobileFactory
{
    public static function create($make, $model)
    {
        return new Automobile($make, $model);
    }
}



?>