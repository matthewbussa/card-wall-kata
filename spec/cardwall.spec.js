describe("Cardwall", function() {

  describe("Card", function() {

    it("has a name, description and priority", function(){
      var card = createCard("name", "desc", 1);
      expect(card.name).toBe("name");
      expect(card.description).toBe("desc");
      expect(card.priority).toBe(1); 
    });
 

  });

  describe("Wall", function() {
    var wall;

    beforeEach(function() {
      wall = createWall(); 
    });

    it("has no cards when created", function(){
      expect(wall.cards).toEqual([]);
    });

    it("has one card", function() {
      var card = createCard("name", "desc");
      wall.addCard(card);
      expect(wall.cards.length).toBe(1);      
    });

    // describe("a two card scenario", function() {

    // });
    it("create 2 cards", function(){
      var cardOne = createCard("w00t", "desc1", 1);
      var cardTwo = createCard("Dos", "desc2", 4);
      wall.addCard(cardOne);
      wall.addCard(cardTwo);
      expect(wall.cards.length).toBe(2); 
    });
  
    it("orders 2 cards based on priority", function(){

      var cardOne = createCard("w00t", "desc1", 1);
      var cardTwo = createCard("Dos", "desc2", 4);
      wall.addCard(cardOne);
      wall.addCard(cardTwo);
      expect(wall.cards).toEqual([cardTwo, cardOne]);
    });

    it("orders 3 cards based on priority", function(){

      var cardOne = createCard("w00t", "desc1", 1);
      var cardTwo = createCard("Dos", "desc2", 4);
      var cardThree = createCard("Sherief", "desc3", 6);
      wall.addCard(cardOne);
      wall.addCard(cardThree);
      wall.addCard(cardTwo);
      expect(wall.cards).toEqual([cardThree, cardTwo, cardOne]);
    });


  });

});
