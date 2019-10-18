<?php
$servername="localhost:3306";
$username=
$password=
$dbname=;
//Creating the connection FUCK YOU PHP
$connection=new mysqli($dbservername,$dbusername,$dbpassword,$dbname);

//Check connection please for the love of god work
if($connection->connect_error){
  die("Connection Failed: ".$connection->connect_error);
}else{
  echo "Conenction Succeeded!";
}

//sql connection oh yeh
$sql="INSERT INTO new_users(firstname,lastname,email,password) VALUES ('".$_POST["firstname"]."','".$_POST["lastname"]."','".$_POST["email"]."','".$_POST["password"]."')";
$sql_hash="update new_users set password=SHA(password)";
if(mysqli_query($connection,$sql)&& mysqli_query($connection,$sql_hash)){
  echo("Username for HTML INPUT: ".$_POST['firstname']."<br/>\n"); //Used for testing here
  echo "\n\nRecords Added to the Database!";
}else{
  echo "ERROR: SQL Syntax Failed $sql.".mysqli_query($connection);
  //echo "Hashing Failed: $sql_hash".mysqli_query($connection);
}
mysqli_close($connection);

?>
