<?php
session_start();

?>
<!DOCTYPE HTML>
<html>
<head>
	<title>Hello Canvas</title>
</head>
<body>
	<h1>Hello Canvas!</h1>
	<div id="testcanvas">
	</div>
	<script type="text/javascript">
	var session_id = "<?php echo session_id(); ?>";
	</script>
	<script type="text/javascript" src="/js/canvas.js">
	</script>
</body>
</html>