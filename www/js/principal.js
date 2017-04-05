var serviceURL = "http://192.168.1.21/PruebaMovil2/www/ajax/";

var lineas;

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
	});
}