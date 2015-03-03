$('.start-over-btn').hide();

var userNumber;

var responses = ['Ping', 'Pong!'];

$('.start-btn').on('click', function() {
	userNumber = $('.number-input').val();
	$('.lead').empty();
	$('.number-input, .start-btn').hide();
	$('.start-over-btn').show();
	for(var i = 1; i <= userNumber; i++) {
	if(i % 3 === 0 && i % 5 === 0) {
		$('.answer-list').append('<li><b class="ping-small">'+responses[0]+'-</b>'+'<b class="pong-small">'+responses[1]+'</b></li>');
	}
	else if(i % 3 === 0) {
		$('.answer-list').append('<li><b class="ping-small">'+responses[0]+'!</b></li>');
	}
	else if(i % 5 === 0) {
		$('.answer-list').append('<li><b class="pong-small">'+responses[1]+'</b></li>');
	}
	else {
		$('.answer-list').append('<li><b>'+i+'</b></li');
	}
	}
});

$('.start-over-btn').on('click', function() {
	location.reload();
})