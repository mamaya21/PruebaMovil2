var serviceURL = "http://192.168.1.21/PruebaMovil2/www/ajax/";

var lineas;

$('#id_head').append(
	'<link rel="stylesheet" href="http://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.3.0/css/font-awesome.min.css" />'+
	'<link rel="stylesheet" href="http://ajax.googleapis.com/ajax/libs/jquerymobile/1.4.5/jquery.mobile.min.css" />'+
	'<link rel="stylesheet" href="https://cdn.datatables.net/1.10.13/css/jquery.dataTables.min.css" />'
);

$('#pag_principalid').bind('pageinit', function(event) {
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
		//$('#dataLineas').listview('refresh');

		$('#id_body').append(
			'<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>'+
			'<script src="https://code.jquery.com/ui/1.11.4/jquery-ui.min.js"></script>'+
			'<script src="https://ajax.googleapis.com/ajax/libs/jquerymobile/1.4.5/jquery.mobile.min.js"></script>');
	});
}