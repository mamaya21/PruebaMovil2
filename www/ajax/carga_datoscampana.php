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

	$sql= "SELECT c.IdCampana as idcampana, c.Descripcion as nombrecampana, c.NuevoProducto as nuevo, 
			c.ModificaProducto as modificar, c.BajaProducto as baja, cc.RenovarPlan as renovar, 
			cc.Portabilidad as portabilidad, 
			CONVERT(VARCHAR(19),c.FechaInicio, 3) as fechainicio, 
			CONVERT(VARCHAR(19),c.FechaFin,3) as fechafin, 
			CONVERT(VARCHAR(19),c.FechaInicioPedido,3) as finiciopedido, 
			CONVERT(VARCHAR(19),c.FechaInicioEntrega,3) as finicioentrega
			FROM MOV_CAM_Campana c
			INNER JOIN MOV_CAM_CampanaConfiguracion cc
			ON c.IdCampanaConfiguracion = cc.IdCampanaConfiguracion
			WHERE c.IdEstado = 1 and c.btActivo = 1";

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