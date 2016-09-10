<?php
require substr($_SERVER['DOCUMENT_ROOT'],0,-7)."/canvas.php";

function canvasReady()
{
	$canvas = new Canvas();
	foreach ($_POST as $key => $value)
	{
		$canvas->$key = $value;
	}
	$coolvalue[0] =
	[
		"MD5Hash" => $canvas->fingerprintValue("datastring"),
		"userid" => $_POST['userid']
	];
	return $coolvalue;
}
echo json_encode(canvasReady());
?>