var eventManager = {};

Backbone.View.prototype.close = function () {
    console.log('Closing view ' + this);
    if (this.beforeClose) {
        this.beforeClose();
    }
    this.remove();
    this.unbind();
};


var AppRouter = Backbone.Router.extend({ 
	 	
 	initialize:function () {
   		
    //$('#tab3').html(new SidebarFormPropView().render().el);
   		
   		
	},
	
	routes:{
	    "":"login",
	    "designer":"designer"
	},
	login:function () {
        
        var loginModel = new LoginModel();
        
        $('#appContainer').html(new LoginView({model:loginModel}).render().el);
        
        
    },
	designer: function() {
		
		$('#appContainer').html(new DesignerView().render().el);
		$('#header').html(new HeaderView().render().el);
   		$('#footer').html(new FooterView().render().el);
   		//$('#tab1').html(new SidebarMainView().render().el);
   		//$('#tab2').html(new SidebarFieldPropView().render().el);
   		
		
		var forms = new FormsCollection();
		
		forms.fetch ({
			success: function( event ) {
				$('#formListContainer').html(new FormListView({model:forms}).render().el);
				
				var idForm = $("#cmbDatabases").prop('selectedIndex');
				eventManager.trigger("renderFields", idForm);
			}
		});
		

		
		
	}
});


$(document).ready(function () {
	
	var sortOptions = {
		axis: "y",
		cursor: "move",
		distance: 30
	};
	
	$('.sortables').sortable(sortOptions);
	$('#myModal').modal({show:false});
	
	_.extend(eventManager, Backbone.Events);
	
	eventManager.on("showModal", function ( paramModel, isEdit ){
		
		$('#myModal').html(new FormPropertiesView({model:paramModel, editMode:isEdit}).render().el);
		$('#myModal').modal('show');
		//$('.formName').focus();
	});
	
	eventManager.on("hideModal", function ( paramModel, msg ){
		
		$('#myModal').modal('hide');
		//$('.formName').focus();
	});
	
	eventManager.on("reloadCombos", function ( paramModel, msg ){
		var forms = new FormsCollection();
		
		
		forms.fetch ({
			success: function( event ) {
				$('#formListContainer').html(new FormListView({model:forms}).render().el);
			}
		});
	});
	
	eventManager.on("renderFields", function ( idForm ){
		
		//console.log("Busca fields de form: " + idForm)
		
		var forms = new FormsCollection();
		
		forms.fetch ({
			success: function( event ) {
				
				this._currentModelSelected = forms.models[idForm];
 				$("#content").html(new FieldGenericView({model:_currentModelSelected}).render().el);
			

			},
			error: function() {
				
				alert("Error: No se encontraron celdas para esta base de datos.");
			}
		});
		
	});
	
	
	
});

/** Funciones que controlan el estilo de drag and drops **/
function isInUpperHalf(ui, $droppable)
{
    var $draggable = ui.draggable || ui.helper;
    return (ui.offset.top + $draggable.outerHeight() / 2
            <= $droppable.offset().top + $droppable.outerHeight() / 2);
}

function updateHighlight(ui, $droppable)
{
    if (isInUpperHalf(ui, $droppable)) {
        $droppable.removeClass("droppable-below")
                  .addClass("droppable-above");
    } else {
        $droppable.removeClass("droppable-above")
                  .addClass("droppable-below");
    }
}
    
function cleanupHighlight(ui, $droppable)
{
    ui.draggable.removeData("current-droppable");
    $droppable.removeClass("droppable-above droppable-below");
}


// Aquí se añade el array de vistas que se vayan a renderizar
tpl.loadTemplates(['header-view', 'footer-view', 'sidebar-view', 'sidebar-field-prop-view', 'sidebar-form-prop-view', 'form-list', 'form-properties',
                   'field-generic-view', 'designer-view', 'login-view'], function () {
    app = new AppRouter();
    Backbone.history.start();
});