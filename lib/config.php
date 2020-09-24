<?php
$servername = "localhost";
$username = "root";
$password = "";

$conn = new PDO("mysql:host=$servername;dbname=ecommerce", $username, $password);
$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);


function getPageContent($pageName){
    global $conn;

    $stmt = $conn->prepare("SELECT * FROM pages WHERE NAME='".$pageName."'");
    $stmt->execute();

    // set the resulting array to associative
    $result = $stmt->setFetchMode(PDO::FETCH_ASSOC);
    $result = $stmt->fetchAll();
    $result = $result[0];

    return $result;

}


function tableContent(){
    global $conn;

    $stmt = $conn->prepare("SELECT * FROM `content material` ");
      $stmt->execute();
  
    // set the resulting array to associative
    $result = $stmt->setFetchMode(PDO::FETCH_ASSOC);
    $result = $stmt->fetchAll(); var_dump($result); exit;
    $result = $result[0];

    return $result;
}
