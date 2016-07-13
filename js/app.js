$(function(){
$.ajax({
	url: 'https://gateway.marvel.com/v1/public/characters',
	data:{
		ts: 1,
		apikey: '70fb478f08bf211702bebef970ebf5a3',
		hash: 'c305bb7efc69a5358916ba27c77b8cb8'
	}
})
.done(function(response){
	debugger
	console.log('peticion exitosa')
})
.fail (function(){
	console.log('error')
})

})