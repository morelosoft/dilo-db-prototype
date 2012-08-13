var sync = Backbone.sync;
Backbone.sync = function (method, model, options) {
	var resp;
	
    var new_option =  _.extend({
    	beforeSend: function(xhr){
    		var token = "nuevoToken";
    		xhr.setRequestHeader('dilo-token',token);
    	}
    },options);
    
    //console.log("Dentro del Sync");
    alert( "metodo: " + method + "\n" + "Modelo: " +model + "\n"  + "option: " + new_option );
    
    sync(method, model, new_option);
};