describe("Cardwall", function() {

  describe("Card", function() {

    it("has a name", function() {
      var card = createCard();
      card.name = "Bob";
      expect(card.name).toBe("Bob");
    });

  });

});
