window.FormListView = Backbone.View.extend({
	initialize: function() {
		
		this.template = _.template(tpl.get("form-list"));
		
		
		$(this).live($(".draggable").draggable({
			revert: true,
			helper: "clone",
			// helper: function(event) {
				// return "<div class='dottedDiv'></div>";
			// },
			
			drag: function (event, ui) {
				
				var $droppable = $(this).data("current-droppable");
	            if ($droppable) {
	                updateHighlight(ui, $droppable);
	            }
			},
			
			//connectToSortable: "ul#listSortable"
			
		}));
		
		// $(".draggable").bind("drag", function(event, ui) {
		    // ui.helper.css("background-color", "red");
		// });


		_.bindAll(this);
		this.model.bind("change", this.modelOnChanged);
		this.model.bind("destroy", this.modelOnDestroy);

	},
	_selectedIndex: 0,
	_currentModelSelected: {},
	render: function (event) {
		
		$(this.el).html(this.template({model:this.model.models}));
		return this;
		
	},
	events: {
		"click #btnNew": "btnNewOnClick",
		"click #btnEdit": "btnEditOnClick",
		"click #btnDelete": "btnDeleteOnClick",
		"change #cmbDatabases": "cmbDatabasesChange"
	},
	btnNewOnClick : function( event ) {

		eventManager.trigger("showModal", new FormModel(), false);

	},

	btnEditOnClick : function( event ) {

		eventManager.trigger("showModal", this.model.models[this._selectedIndex], true);
		
	},
	
	btnDeleteOnClick : function( event ) {
		
		_currentModelSelected = this.model.models[this._selectedIndex];
		
		if ( _currentModelSelected != null  ) {
			_currentModelSelected.destroy( {
				success: function() {
					alert("Si se eliminó");
				},
				error: function() {
					alert("No se eliminó");
				}
			});
		} else {
			alert("No hay base de datos seleccionada.");
		}
		
		eventManager.trigger("reloadCombos", null);
		
	},
	cmbDatabasesChange: function( event ) {
		
		this._selectedIndex = event.currentTarget.selectedIndex;
		eventManager.trigger("renderFields", this._selectedIndex);
		
	},
	modelOnChanged: function ( event ) {
		alert("model changed");
	},
	modelOnDestroy: function ( event ) {
		alert("model destroy");
	},

	
});