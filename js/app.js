
var provider = new firebase.auth.GoogleAuthProvider();

$('#loginGoogle').click(function(){
	firebase.auth()
  		.signInWithPopup(provider)
  		.then((result) => {
  			console.log(result.user);
  			console.log("Google: Sesion iniciada")
  		}).catch((error) => {
		    // Handle Errors here.
		    var errorCode = error.code;
		    var errorMessage = error.message;
		    // The email of the user's account used.
		    var email = error.email;
		    // The firebase.auth.AuthCredential type that was used.
		    var credential = error.credential;
		    // ...
		    console.log("Error inicio de sesión");
		  });
});


// login facebook
var providerFace = new firebase.auth.FacebookAuthProvider();

$('#loginFacebook').click(function(){
	//console.log("hola mundo");
	firebase.auth()
		.signInWithPopup(providerFace)
		.then((result) => {
			console.log(result.user);
			console.log("Facebook: Sesion iniciada");
		}).catch((error) => {
			console.log(error);
			console.log("Error inicio de sesión");
		})
});

	 
//comprobar si esta iniciada la sesion o no 
firebase.auth().onAuthStateChanged(user => {
	if (user) {
		console.log("auth: sesion iniciada");
		$('#root').append("<img width='50px' src='"+user.photoURL+"' class='rounded img-fluid  d-flex m-auto m-0 pt-3' />");
  		$('#name').append(" <p class='display-4 text-center'> "+user.displayName+" </p> ");
  		$('#modalSesion').hide();
  		$('#cerrarSesion').show(); 

	} else {
		console.log("auth: no se ha iniciado sesion");
		$('#cerrarSesion').hide();		
	}
});


// cerrar sesion
const cerrar = document.querySelector('#cerrarSesion');

cerrar.addEventListener('click', e => {
	e.preventDefault();
	firebase.auth().signOut().then(() =>{
		location.reload() //funcion para reiniciar automaticamente la paginas
	})
	
});

