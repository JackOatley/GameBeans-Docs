function showExample( e ) {
    var x = e.nextElementSibling;
	console.log( e, e.nextElementSibling );
    if ( x.style.display === "block" ) {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}