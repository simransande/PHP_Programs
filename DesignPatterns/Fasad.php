<?php

class Adder
{
    public function add($a, $b)
    {
        return $a + $b;
    }
}

class Subtractor
{
    public function subtract($a, $b)
    {
        return $a - $b;
    }
}

class Multiplier
{
    public function multiply($a, $b)
    {
        return $a * $b;
    }
}

class Divider
{
    public function divide($a, $b)
    {
        if ($b == 0) {
            throw new Exception('Division by zero.');
        }
        return $a / $b;
    }
}
$adder = new Adder();
echo "111 + 20 = ", $adder->add(111, 20), "\n";
$divider = new Divider();
echo "46 / 2 = ", $divider->divide(46, 2), "\n";
$mul = new Multiplier();
echo "2 * 2 = ", $mul->multiply(2, 2), "\n";


?>