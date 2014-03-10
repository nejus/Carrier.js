<?
/*
 * CARRIER
 *
 * ASync file upload.
 *
 * @author	Miguel Conejeros - nejus
 * @email mike@nejus.com
 * @version	1.0
 * @date 03.2014
 *
 */
 
$act = $_REQUEST['act'];
$v = $_REQUEST;

if($act == 'CARRIER_UPLOAD'){
	
	session_start();
	
	$o = new stdClass();
	$id = $_REQUEST['id'];
	$name = generateRandomString(16);
	$uploadto = $_REQUEST['uploadto'];
	$f = $_FILES["carrierfile".$id];
	$pathinfo = pathinfo($f['name']);
	
	$o->id = $id;
	$o->error = $f['error'];
	$o->temp_name = $f['tmp_name'];
	$o->original_name = $f['name'];
	$o->name = $name;
	$o->uploadto = $uploadto;
	$o->size = $f['size'];
	$o->type = $f['type'];
	$o->path = $uploadto.$name.'.'.$pathinfo['extension'];
	$o->file = $name.'.'.$pathinfo['extension'];
	
	move_uploaded_file($f["tmp_name"], $o->path);
	
	$_SESSION['carrier'][$o->id] = $o;
	
	echo json_encode($o);

}elseif($act == "CARRIER_STATUS"){
	
	session_start();
	$id = $_REQUEST['id'];
	$o = $_SESSION['carrier'][$id];
	echo json_encode($o);
}

function generateRandomString($length = 10) {
    $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    $randomString = '';
    for ($i = 0; $i < $length; $i++) {
        $randomString .= $characters[rand(0, strlen($characters) - 1)];
    }
    return $randomString;
}
?>