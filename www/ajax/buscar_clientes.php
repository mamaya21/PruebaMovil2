<?php
	 error_reporting(E_ALL ^ E_DEPRECATED);
	/*-------------------------
	Autor: Marco Amaya
	Web: -
	Mail: marco1021tam@gmail.com
	---------------------------*/
	require_once ("../config/db.php");//Contiene las variables de configuracion para conectar a la base de datos
	require_once ("../config/conexion.php");//Contiene funcion que conecta a la base de datos


	$username = $_GET['us'];

	$sql= "SELECT USUA_P_inCODUSU as id,USUA_vcNOMUSU as nombre,USUA_vcNOMUSU,USUA_vcNOMCTO,USUA_F_vcCODINT as codint
            FROM M_USUA
            WHERE USUA_vcNOMUSU='".$username."';";

	if($con){
		$rcn= odbc_exec($con,$sql);
		$contador=0;

		while ($algo=odbc_fetch_array($rcn)) { 
			//$contador++;
			$filas[] = $algo;
		} 
		odbc_free_result($rcn);
		odbc_close($conexion);
		//print(json_encode($filas));
		echo '{"items":'. json_encode($filas) .'}'; 
	}else{
		echo "No conectado";
	}
	
?>