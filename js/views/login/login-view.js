var userName = localStorage.getItem('userName');
var userPass = localStorage.getItem('userPass');

window.LoginView = Backbone.View.extend({
	initialize:function () {
		this.template = _.template(tpl.get('login-view'));
		this.model.set({"email":userPass,"password":userPass});
	},
	render:function (eventName){
		$(this.el).html(this.template(this.model.toJSON()));
		return this;
	},
	events:{
		//"change #ckbRemember" : "ckbRememberOnChange", 
		"click #btnSend" : "btnSendOnClick"
	},
	
	btnSendOnClick: function ()
	{
		//onLocalStorage();
		
		this.model.fetch({
			success: function( event ){
				
				alert(event);
				 // alert( event.attributes[0].email );
// 				
// 				
				// if( event.attributes[0].email == $("input#txtUsername").attr('value') 
				// && event.attributes[0].password == $("input#txtLoginPassword").attr('value'))
				// {
					// //alert("Cambiando pagina")
					// this.app.routes = "#designer";
					// //AppRouter.route[Backbone.history.fragment]
				// }
				// else{
					// alert("Usuario o contraseña incorrecta");
				// }
			    // alert( event.attributes[0].email +"\n"+event.attributes[0].password);
			    // alert('success');
			},
			error: function( event ){
				alert('Error');
			}
			
		});
		// this.model.save ( null, {
			// success: function( event ) {
				// alert("success");
				// //alert(event.target);
    			// //Backbone.history.start();
    			// //eventManager.trigger("showLogin", null);
    			// // eventManager.trigger("reloadCombos", null);
    		// }, 
    		// error: function( event ) {
    			// alert('Error');
    		// }
    	// });
		
		// var newLoginModel = new LoginModel();
// 		
		// //READ
		// newLoginModel.fetch({
			// success: function (argument) {
// 			  
			// }
		// });
// 		
		// newLoginModel.save({
			// success: function (argument) {
// 			  
			// }
		// });
// 		
		// newLoginModel.destroy();
		
	}
});

function onLocalStorage(){
	var userName = $("input#txtUsername").attr('value');
	var userPass = $("input#txtLoginPassword").attr('value');
	var userRemember = $("#ckbRemember:checked").val();
	
	if( userName!="" && userPass!="" )
		if( userRemember == "true" )
		{
			localStorage.setItem('userName', userName);
			localStorage.setItem('userPass', userPass);
			localStorage.setItem('userRemember', userRemember);
		}
		else{
			localStorage.removeItem('userName');
			localStorage.removeItem('userPass');
			localStorage.removeItem('userRemember');
		}
}

// function setCookie(cookieName,cookieValue) {
	// document.cookie = escape(cookieName)+'='+escape(cookieValue);
// } 
// 
// function getCookie(cookieName) {
	// var cookieValue=null;
	// var posName=document.cookie.indexOf(escape(cookieName)+'=');
	// if (posName!=-1) {
		// var posValue=posName+(escape(cookieName)+'=').length;
		// var endPos=document.cookie.indexOf(';',posValue);
		// if (endPos!=-1) 
			// cookieValue=unescape(document.cookie.substring(posValue,endPos));
		// else 
			// cookieValue=unescape(document.cookie.substring(posValue));
	// }
	// return cookieValue;
// } 
// 
// function eraseCookies(cookieName){
	// setCookie( cookieName,"" );
// }