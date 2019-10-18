<?php
$servername="localhost:3306";
$username=
$password=
$dbname=;

//Creating the connection FUCK YOU PHP
$connection=new mysqli($servername,$username,$password,$dbname);

//Check connection please for the love of god work
if($connection->connect_error){
  die("Connection Failed: ".$connection->connect_error);
}else{
  echo "Conenction Succeeded!";
}

//sql connection oh yeh
$sql="INSERT INTO users (username,email) VALUES ('".$_POST["username1"]."','".$_POST["email"]."')";
if(mysqli_query($connection,$sql)){
  //echo("Username for HTML INPUT: ".$_POST['username1']."<br/>\n"); Used for testing here
  echo "\n\nRecords Added to the Database!";
}else{
  echo "ERROR: SQL Syntax Failed $sql.".mysqli_query($connection);
}
mysqli_close($connection);

?>
