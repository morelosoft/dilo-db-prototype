window.LoginModel = Backbone.Model.extend({
	urlRoot: "http://192.168.24.182:8098/login/d1l0",
	defaults : {
		"id": null,
   		"name": "",
   		"last1":"",
   		"last2": "",
   		"fullName":"",
   		"email":"",
   		"password": "",
	},
	
});

window.LoginCollection = Backbone.Collection.extend({
	model:LoginModel,
	url:"http://192.168.24.182:8098/login/d1l0"
});