window.FormModel = Backbone.Model.extend ({
	urlRoot: "http://192.168.24.182:8098/users/create",
	defaults: {
		"id": null,
		"name": "",
		"description": "",
		"password": "",
		"fielsd": [] // of FieldModel ?
	},
	validate: function(attrs ){
		
		
	}
	
});

window.FieldModel = Backbone.Model.extend({
	urlRoot: "http://192.168.24.182:8098/users/create",
	//urlRoot: "api/fields",
	defaults: {
		"id": null,
		"title": "",
		"instructions": "",
		"typeOf": "",
		"width": 0,
		"heigth": 0,
		"isUnique": false,
		"isPrivate": false,
	}
});

window.FormsCollection = Backbone.Collection.extend({
    model:FormModel,
    url:"api/forms"
    //url: "http://192.168.24.182:8098/users/create",
});

window.FieldsCollection = Backbone.Collection.extend({
    model:FieldModel,
    url:"api/fields"
    //url: "http://192.168.24.182:8098/users/create",
});