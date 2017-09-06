define(function (require) {
	const ClassicEditor = require( 'ckeditor' );

	ClassicEditor.ClassicEditor // WTF???
		.create( document.querySelector( '#text-editor' ) )
		.then( editor => {
			console.log( editor );
		} )
		.catch( error => {
			console.error( error );
		} );
});
