<?php
echo $_POST['dat'];
if (isset($_POST['dat']) && !empty($_POST['dat'])) {
$updatedData = $_POST['dat'];
file_put_contents('./js/data.json', $updatedData);
}
?>