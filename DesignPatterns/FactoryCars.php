<?php
include "Factory.php";

// factory create the Automobile object
$result = AutomobileFactory::create('BMW', 'X5');

print_r($result->getMakeAndModel());
?>