var createCard = function(name, description, priority) {
  
  var card = {
    name: name,
    description: description,
    priority: priority
  };

  return card;

};

var createWall = function() {

  var wall = {
    cards: [],
    addCard: function(card) {
      if(this.cards.length === 0){ 
        this.cards.push(card);
      } else {
        this.cards.unshift(card);
      }
    }
  };

  return wall;

};
