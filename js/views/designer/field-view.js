window.FieldGenericView = Backbone.View.extend ({
	
	tagName: "ul",
	
	className: "span12 sortable",
	
	initialize:function () {
		
		var self = $(this);
		var selfEl = $(this.el);
		
		var sortOptions = {
			axis: "y",
			cursor: "move",
			distance: 30
		};
		
		
        $(this.el).sortable(sortOptions);
        

        
        
        $(this.el).attr('id', 'listSortable');
    },
    
    updateHighlight: function(ui, currentTarget) {
    	currentTarget.removeClass("droppable-below").addClass("droppable-above");
    },
    
    render:function (eventName) {
    	
    	var objModelJSON = this.model.toJSON();
    	var arrModelFields =objModelJSON.fields;
    	
    	_.each( arrModelFields, function() {

        	$(this.el).append( new FieldGenericItemView( {model: this.model} ).render().el );
    		
    	} , this ); 
        
        return this;
    },
	
	
});

window.FieldGenericItemView = Backbone.View.extend ({
	
	tagName: "li",
	className: "thumbnail",
	
	initialize:function () {
        var self = this
		var selfEl = $(this.el);
		
        this.template = _.template(tpl.get('field-generic-view'));
        
        $(this.el).droppable({
        	
			//activeClass: 'droppable-active',
			//hoverClass: 'droppable-hover',
        	over: function(event, ui) {
				var $this = $(this);
                updateHighlight(ui, $this);
                ui.draggable.data("current-droppable", $this);		    	
		    },
		   	out: function(event, ui) {
		    	cleanupHighlight(ui, selfEl);
		    },
		    drop: function(event, ui) {
		    	
		    	var $this = $(this);
		    	
                cleanupHighlight(ui, $this);
                
                // var $new = $this.clone().children("div:first")
                                // .html(ui.draggable.html()).end();
                
                //var $new = $this.clone();
                
                if (isInUpperHalf(ui, $this)) {
                    //$new.insertBefore(this);
                } else {
                    //$new.insertAfter(this);
                }
                
                //initDroppable($new);
		    	
		    }
        });
        
    },
    
    render:function (eventName) {
    	
        $(this.el).html( this.template({model:this.model.toJSON()}) );
        
        return this;
    },
	
	
});


