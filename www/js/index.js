/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');
		listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');
		console.log('Received Event: ' + id);
    }
};


/*RURBINA - AGREGADO RECIENTEMENTE*/
var serviceURL = "http://192.168.0.11/ajax/";
var datos;

function mostrar(destino) {
	window.frames[0].location = destino;
}

$('#pagina').bind('pageinit', function(event) {
	getDatos();
});

function getDatos() {
	$.getJSON(serviceURL + 'carga_datoscampana.php', function(data) {
		datos = data.items;
		$.each(datos, function(index, datos) {
			$('#id_footer').append('<p><table align="center">'+
				'<tr>'+
					'<td>Fecha Inicio:</td>'+
					'<td>'+datos.fechainicio+'</td>'+
					'<td>|</td>'+
					'<td>Fecha Fin:</td>'+
					'<td>'+datos.fechafin+'</td>'+
				'<tr>'+
			'</table></p>'
			);
		});
		
		$.each(datos, function(index, datos) {
			$('#bottomsheet').append(
				'<div class="row around-xs">'+
				'<div class="col-xs-auto" id="id_nuevo">'+
					"<a href='#' onclick=mostrar('Pedidos/Pedido_Nuevo.html') "+
					'class="ui-bottom-sheet-link ui-btn ui-btn-inline waves-effect waves-button waves-effect waves-button" '+
					'data-ajax="false"><i class="zmdi zmdi-assignment zmd-2x"></i><strong>Nuevo</strong></a>'+
				'</div>'+
				'<div class="col-xs-auto" id="id_renovacion">'+
					"<a href='#' onclick=mostrar('Pedidos/Pedido_Renovacion.html') "+
					'class="ui-bottom-sheet-link ui-btn ui-btn-inline waves-effect waves-button waves-effect waves-button" '+
					'data-ajax="false"><i class="zmdi zmdi-fire zmd-2x"></i><strong>Renovación</strong></a>'+
				'</div>'+
				'<div class="col-xs-auto" id="id_baja">'+
					"<a href='Pedidos/Pedido_DarBajan.html' "+
					'class="ui-bottom-sheet-link ui-btn ui-btn-inline waves-effect waves-button waves-effect waves-button" '+
					'data-ajax="false"><i class="zmdi zmdi-cloud-outline-alt zmd-2x"></i><strong>Dar de Baja</strong></a>'+
					'</div>'+
				'<div class="col-xs-auto" id="id_portabilidad">'+
					"<a href='#'' "+
					'class="ui-bottom-sheet-link ui-btn ui-btn-inline waves-effect waves-button waves-effect waves-button" '+
					'data-ajax="false"><i class="zmdi zmdi-format-color-fill zmd-2x"></i><strong>Portabilidad</strong></a>'+
				'</div>'
			);
			if(datos.nuevo == 0){
				$('#id_nuevo').hide();
			}
			if(datos.renovar == 0){
				$('#id_renovacion').hide();
			}
			if(datos.baja == 0){
				$('#id_baja').hide();
			}
			if(datos.portabilidad == 0){
				$('#id_portabilidad').hide();
			}
		});

	});
}

	

