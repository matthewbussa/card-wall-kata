describe("Wall", function() {
  afterEach(function() {
    delete localStorage.cards;
  });

  var wall;

  beforeEach(function() {
    wall = createWall();
  });

  it("has no cards when created", function() {
    expect(wall.allCards()).toEqual([]);
  });

  it("can block a card", function() {
    var cardOne = createCard("MavisCard", "Desc", 7);
    wall.addCard(cardOne);
    wall.blockCard(cardOne);
    expect(cardOne.blocked).toBe(true);
  });

  it("has one card", function() {
    var card = createCard("name", "desc");
    wall.addCard(card);
    expect(wall.allCards().length).toBe(1);
  });

  it("create 2 cards", function() {
    var cardOne = createCard("w00t", "desc1", 1);
    var cardTwo = createCard("Dos", "desc2", 4);
    wall.addCard(cardOne);
    wall.addCard(cardTwo);
    expect(wall.allCards().length).toBe(2);
  });

  it("orders 2 cards based on priority", function() {

    var cardOne = createCard("w00t", "desc1", 1);
    var cardTwo = createCard("Dos", "desc2", 4);
    wall.addCard(cardOne);
    wall.addCard(cardTwo);
    expect(wall.allCards()).toEqual([cardTwo, cardOne]);
  });

  it("orders 3 cards based on priority", function() {

    var cardOne = createCard("w00t", "desc1", 1);
    var cardTwo = createCard("Dos", "desc2", 4);
    var cardThree = createCard("Sherief", "desc3", 6);
    wall.addCard(cardOne);
    wall.addCard(cardThree);
    wall.addCard(cardTwo);
    expect(wall.allCards()).toEqual([cardThree, cardTwo, cardOne]);
  });

  it("sets a card to done", function() {
    var cardOne = createCard("w00t", "desc1", 1)
    wall.addCard(cardOne);
    wall.completeCard(cardOne);
    expect(cardOne.done).toBe(true);
  });


  it("can filter on completeness", function() {
    var cardOne = createCard("w00t", "desc1", 1);
    var cardTwo = createCard("Dos", "desc2", 4);
    var cardThree = createCard("Sherief", "desc3", 6);
    wall.addCard(cardOne);
    wall.addCard(cardThree);
    wall.addCard(cardTwo);

    wall.completeCard(cardTwo);

    expect(wall.completedCards()).toEqual([cardTwo]);
  });

  it("can filter on completeness part 2", function() {
    var cardOne = createCard("w00t", "desc1", 1);
    var cardTwo = createCard("Dos", "desc2", 4);
    var cardThree = createCard("Sherief", "desc3", 6);
    wall.addCard(cardOne);
    wall.addCard(cardThree);
    wall.addCard(cardTwo);

    wall.completeCard(cardTwo);
    wall.completeCard(cardThree);

    expect(wall.completedCards()).toEqual([cardThree, cardTwo]);
  });

  it("can filter on blockedness", function() {
    var cardOne = createCard("w00t", "desc1", 1);
    var cardTwo = createCard("Dos", "desc2", 4);
    var cardThree = createCard("Sherief", "desc3", 6);
    wall.addCard(cardOne);
    wall.addCard(cardThree);
    wall.addCard(cardTwo);

    wall.blockCard(cardTwo);
    wall.blockCard(cardThree);

    expect(wall.blockedCards()).toEqual([cardThree, cardTwo]);
  });

  it("has a 'start work' function", function() {
    var before = Date.now();
    var cardOne = createCard("w00t", "desc1", 1);
    wall.addCard(cardOne);
    wall.startWork(cardOne);
    var after = Date.now();
    
    expect(cardOne.startDate.getTime()).toBeBetween(before, after);
  });

  it("can remove cards", function() {
    var cardOne = createCard("w00t", "desc1", 1);
    wall.addCard(cardOne);
    wall.removeCard(cardOne);
    expect(wall.allCards()).toEqual([]);
  });

  it("can add statuses", function() {
    wall.addStatus("TODO");
    expect(wall.cards[0].name).toBe("TODO");
  });

});