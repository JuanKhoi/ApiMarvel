$(function(){
	var template ='<div class="card">'+
				   '<img src=":img:" alt="" class="card-img">'+
				   '<p class="card-name">:name:</p>'+
			       '</div>';
$.ajax({
	url: 'https://gateway.marvel.com/v1/public/characters',
	data:{
		ts: 1,
		apikey: '70fb478f08bf211702bebef970ebf5a3',
		hash: 'c305bb7efc69a5358916ba27c77b8cb8'
	}
})
.done(function(response){
	var personajes = response.data.results;
	personajes.forEach(function(personaje){
    var card = template
    .replace(':name:', personaje.name)
    .replace(':img:', personaje.thumbnail.path+'.'+personaje.thumbnail.extension)
    $('#app-body').find('.cards').append($(card))
	})

	console.log('peticion exitosa')
})
.fail (function(){
	console.log('error')
})

})