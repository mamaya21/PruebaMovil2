var serviceURL = "http://192.168.0.11/ajax/";
var lineas;
var credito;

$('#id_head').append(
	'<link rel="stylesheet" href="http://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.3.0/css/font-awesome.min.css" />'+
	'<link rel="stylesheet" href="http://ajax.googleapis.com/ajax/libs/jquerymobile/1.4.5/jquery.mobile.min.css" />'+
	'<link rel="stylesheet" href="https://cdn.datatables.net/1.10.13/css/jquery.dataTables.min.css" />'+
	'<link rel="stylesheet" href="vendor/waves/waves.min.css" />'+
	'<link rel="stylesheet" href="vendor/wow/animate.css" />'+
	'<link rel="stylesheet" href="css/nativedroid2.css" />'
);

$('#pag_principalid').bind('pageinit', function(event) {
	getCreditoEmpleado();
	getLineasList();
});

function getLineasList() {
	$.getJSON(serviceURL + 'carga_principal.php', function(data) {
		//$('#dataLineas li').remove();
		lineas = data.items;
		$.each(lineas, function(index, linea) {
			$('#dataLineas').append('<div data-role="collapsible">'+
				'<h3>'+linea.numero+'</h3>'+
				'<div role="main" class="ui-content wow fadeIn" data-wow-delay="0.2s" data-inset="false">'+
					'<table data-role="table" id="table-column-toggle" data-mode="column" class="ui-responsive table-stroke">'+
						'<thead>'+
							'<tr>'+
								'<th>Plan</th>'+
								'<th>Operador</th>'+
								'<th>Equipo</th>'+
							'</tr>'+
						'</thead>'+
						'<tbody>'+
							'<tr>'+
								'<td>'+linea.nombre_plan+'</td>'+
								'<td>'+linea.compania+'</td>'+
								'<td>'+linea.equipo+'</td>'+
							'</tr>'+
						'</tbody>'+
					'</table>'+
				'</div>'+
			'</div>');
		});
		$('#id_body').append(
				'<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>'+
				'<script src="https://code.jquery.com/ui/1.11.4/jquery-ui.min.js"></script>'+
				'<script src="https://ajax.googleapis.com/ajax/libs/jquerymobile/1.4.5/jquery.mobile.min.js"></script>');
		//$('#dataLineas').listview('refresh');
	});
}

function getCreditoEmpleado() {
	$.getJSON(serviceURL + 'carga_credito.php', function(data) {
		//$('#dataLineas li').remove();
		credito = data.items;
		$.each(credito, function(index, credito) {
			$('#datacreditoempleado').append('<label for="'+credito.tipocredito+'">'+credito.tipocredito+':</label>'+
				'<input type="range" name="'+credito.tipocredito+'" id="'+credito.tipocredito+
				'" value="'+Math.round(credito.porcentaje*1)/1+'" min="0" max="100"'+
				'data-highlight="true" disabled="true">');
		});

		$('#datacreditoempleado').append('<table data-role="table" id="table-column-toggle" data-mode="column" class="ui-responsive table-stroke" data-mini="true">'+
				'<thead>'+
					'<tr>'+
						'<th></th>'+
						'<th>Asignado</th>'+
						'<th>Disponible</th>'+
						'<th>Utilizado</th>'+
					'</tr>'+
				'</thead>'+
				'<tbody id="cuerpo">')

		$.each(credito, function(index, credito) {
			$('#cuerpo').append('<tr>'+
				'<th>'+credito.tipocredito+'</th>'+
				'<td>'+parseFloat(Math.round(credito.craprobado*100)/100).toFixed(2)+'</td>'+
				'<td>'+parseFloat(Math.round(credito.crutilizado*100)/100).toFixed(2)+'</td>'+
				'<td>'+parseFloat(Math.round(credito.crdisponible*100)/100).toFixed(2)+'</td>');
		});
		$('#datacreditoempleado').append('</tbody></table>')
	});
}
