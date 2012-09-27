jQuery(function($) {

    var wall = createWall();
/*
    wall.addCard(createCard("our first card", "our first card", 1));
    wall.addCard(createCard("our second card", "our second card", 2));
*/

    var refresh = function() {
	var outer = $('.outer');
	outer.empty();
	_(wall.allCards()).each(function(card) {
	    var container = $('<div class="bordered"/>');
	    container.html("card has description " + card.description).appendTo(outer);
	});

    };

    refresh();

    $('.add').click(function(ev) {
	var input = $(ev.target).closest('div').find('input');
	var name = input.val();
	var card = createCard(name, name, 100);
	wall.addCard(card);
	refresh();
    });

});