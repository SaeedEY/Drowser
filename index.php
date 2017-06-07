<?php
	//var_dump($_SERVER);
	function isValid($param){
		$valid_params = array('x','y','t','f','v');
		foreach ($valid_params as $key => $val) {
			if ($val == $param)
				return true;
		}
		return false;
	}

	if(isset($_REQUEST['f']) and $_REQUEST['f'] == 'sshot'){
		$pic = file_get_contents($_SERVER['REQUEST_SCHEME']."://".$_SERVER['HTTP_HOST'].$_SERVER['REQUEST_URI'].'/py/index.py?f=sshot&v='.md5(time()).'.jpg');
		die($pic);
	}
	if(isset($_REQUEST) and count($_REQUEST) >= 2){
		$request = '';
		foreach ($_GET as $param => $val) {
			if(isValid($param)){
				$request .= " -".$param." ".$val;
			}
		}
		file_put_contents('py/f', $request);
		 die("request Was ".$request);
	}
	?>
<!DOCTYPE html>
<html>
<head>
	<meta name="viewport" content="width=320, initial-scale=1"/>
	<meta charset="utf-8"/>
	<title>online desktop</title>
	<link rel='stylesheet' type="text/css" href="<?php echo $_SERVER['REQUEST_SCHEME']."://".$_SERVER['HTTP_HOST'].$_SERVER['REQUEST_URI'];?>content/style.css">
	<script type="text/javascript" src="<?php echo $_SERVER['REQUEST_SCHEME']."://".$_SERVER['HTTP_HOST'].$_SERVER['REQUEST_URI'];?>content/script.js"></script>
</head>
<body onload="load()">
<div class="toolbar" id='toolbar' style="display:none;" onmouseleave="Onmouseleave()">
	<div class="t_menu">
			<li class="t_item clipboard">Clipboard &#128203;</li>
			<li class="t_item hotkey">Hotkey ◐</li>
			<li class="t_item screenshot"><span onclick="Post('?f=sshot');">Screenshot &#128247;</span></li>
	</div>
</div>
<div class="t_push" id='push' style="display: block;">
	<li class="t_item push" onclick="Onmouseover()">⯆⯆⯆</li>
</div>

<canvas id="videoCanvas">
	<p>
		Please use a browser that supports the Canvas Element, like
		<a href="http://www.google.com/chrome">Chrome</a>,
		<a href="http://www.mozilla.com/firefox/">Firefox</a>,
		<a href="http://www.apple.com/safari/">Safari</a> or Internet Explorer 10
	</p>
</canvas>
<script type="text/javascript" src="<?php echo $_SERVER['REQUEST_SCHEME']."://".$_SERVER['HTTP_HOST'].$_SERVER['REQUEST_URI'];?>content/jsmpg.js"></script>
<script type="text/javascript">
	var client = new WebSocket( "ws://<?php echo $_SERVER['HTTP_HOST'];?>:8088/" );
	var canvas = document.getElementById('videoCanvas');
	var player = new jsmpeg(client, {canvas:canvas});
</script>

</body>
</html>
