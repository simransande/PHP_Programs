<?php
include "Factory.php";

// factory create the Automobile object
$result = AutomobileFactory::create('Bugatti', 'Veyron');

print_r($result->getMakeAndModel());
?>