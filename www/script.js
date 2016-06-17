var splitURL = window.location.href.split("https://www.youtube.com/watch?v=cp2Ot-QXBmw")

// ---o Display main container
var container = $('<div></div>');
container.css({
	'position': 'fixed',
	'top': '0px',
	'right': '0px',
	'z-index': 9999999,
	'width': '400px',
	'height': '100%',
	'background': '#FFFFFF',
	'transition': 'transform 700ms cubic-bezier(0.190, 1.000, 0.220, 1.000) 0ms',
	'transform': 'translate3d(100%, 0, 0)'
});

$('body').append(container);

// ---o Display main button
var youtubeTitle = $('#eow-title');
var titleButtonSrc = chrome.extension.getURL('img/title-button.png');

var titleButton = $('<img src="' + titleButtonSrc + '">');
youtubeTitle.append(titleButton);

titleButton.css({
	'float': 'right',
	'display': 'block',
	'height': '30px',
	'cursor': 'pointer'
});

titleButton.on('click', function(){
	openPopup("");
});

// ---o Display logo on video
var videoContainer = $('#player-api');
var logoSrc = chrome.extension.getURL('icon.png');
var videoIcon = $('<img src="' + logoSrc + '">');

videoIcon.css({
	'position': 'absolute',
	'top': '15px',
	'left': '15px',
	'z-index': 999999,
	'cursor': 'pointer',
	'opacity': 0,
	'transition': 'opacity 700ms cubic-bezier(0.190, 1.000, 0.220, 1.000) 0ms',
});

videoIcon.on('click', function(){
	openPopup();
});

videoContainer.on('mouseenter', function(){
	videoIcon.css('opacity', 1);
});

videoContainer.on('mouseleave', function(){
	videoIcon.css('opacity', 0);
});

videoContainer.append(videoIcon);


// ---o Methods

function openPopup () {

	container.css('transform', 'translate3d(0, 0, 0)');

}
