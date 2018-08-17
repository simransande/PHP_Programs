<?php

interface ImageInterface
{
    public function display();
}
class Image implements ImageInterface
{
    protected $filename;
    public function  __construct($filename) {
        $this->filename = $filename;
        $this->load();
    }
    protected function load() {
        echo "Loading {$this->filename}\n";
    }
    public function display() {
        echo "Display {$this->filename}\n";
    }
}
class ProxyImage implements ImageInterface
{
    protected $id;
    protected $image;
    public function  __construct($filename) {
        $this->filename = $filename;
    }
    public function display() {
        if (null === $this->image) {
            $this->image = new Image($this->filename);
        }
        return $this->image->display();
    }
}

$filename = "monkey";
$image1 = new Image($filename); 
 echo $image1->display(); // loading unnecessary

 $image2 = new ProxyImage($filename); // loading unnecessary
 echo $image2->display(); 
 echo $image2->display(); // loading unnecessary