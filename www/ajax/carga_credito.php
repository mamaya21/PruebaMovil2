<?php
	 error_reporting(E_ALL ^ E_DEPRECATED);
	/*-------------------------
	Autor: Marco Amaya
	Web: -
	Mail: marco1021tam@gmail.com
	---------------------------*/
	require_once ("../config/db.php");//Contiene las variables de configuracion para conectar a la base de datos
	require_once ("../config/conexion.php");//Contiene funcion que conecta a la base de datos


	//$username = $_GET['us'];

	$sql= "SELECT CT.Descripcion as tipocredito, CE.Aprobado as craprobado, 
			CE.Utilizado as crutilizado, CE.Disponible as crdisponible,
			(CE.Utilizado/CE.Aprobado)*100 as porcentaje
			FROM MOV_CAM_CampanaCreditoEmpleado CE
			INNER JOIN MOV_CAM_CreditoTipo CT
			ON CE.IdTipoCredito = CT.IdTipoCredito
			WHERE IdEmpleado = '10123468' AND IdCampana = 1";

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