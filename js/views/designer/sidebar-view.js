window.SidebarMainView = Backbone.View.extend({
	initialize: function() {
		this.template = _.template(tpl.get("sidebar-view"));
		
		// $(".draggable").draggable({
			// helper: function() {
				// return $( "<li class='dynamic'>Dynamic element</li>" )[0];
			// },
			// revert: true
		// });
	},
	render: function(eventName) {
		
		$(this.el).html(this.template());
		
		return this;
	}
	
	
});

window.SidebarFieldPropView = Backbone.View.extend({
	initialize: function() {
		this.template = _.template(tpl.get("sidebar-field-prop-view"));
	},
	render: function(eventName) {
		
		$(this.el).html(this.template());
		
		return this;
	}
	
	
});

window.SidebarFormPropView = Backbone.View.extend({
	initialize: function() {
		this.template = _.template(tpl.get("sidebar-form-prop-view"));
		
		
	},
	render: function(eventName) {
		
		$(this.el).html(this.template());
		
		return this;
	}
	
	
});


