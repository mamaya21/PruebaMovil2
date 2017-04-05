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

	$sql= "SELECT L.P_vcNum as numero, L.F_inCodOpe as codope, O.COMP_vcNOMCIA as compania, 
			MD.vcNom as equipo, L.F_inCodPla as codplan, PL.vcNom as nombre_plan
			FROM MOV_Linea L
			INNER JOIN MOV_Plan PL
			ON L.F_inCodPla = PL.P_inCod
			INNER JOIN MOV_Dispositivo D
			ON L.F_vcCodIMEI = D.P_vcCodIMEI 
			INNER JOIN MOV_ModeloDispositivo MD
			ON D.F_inCodModDis = MD.P_inCod
			INNER JOIN M_COMP O
			ON L.F_inCodOpe = O.p_inCodOpe
			WHERE L.F_vcCodEmp = 000001 AND L.F_inCodTip = 2";

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