describe("Tic Tac Toe Game", function() {
  var game;

  beforeEach(function() {
    game = new Game();
  })

  it("allows only first player to start", function() {
    expect(game.currentPlayer()).toEqual("first");
  })

  it("switches player after first turn", function() {
    game.put("first", [1, 1]);
    expect(game.currentPlayer()).toEqual("second");
  })

  it("switches player after each turn", function() {
    game.put("first", [1, 1]);
    game.put("second", [1, 2]);

    expect(game.currentPlayer()).toEqual("first");
  })

  describe("winColumn(fields)", function() {
    it("is not a win when fields is empty", function() {
      expect(game.winColumn([])).toEqual(false);
    })

    it("is a win when fields has a full column", function() {
      for (var y = 1; y <= 3; ++y) {
        var fields = [[1, y], [2, y], [3, y]]
        expect(game.winColumn(fields)).toEqual(true)
      }
    })

    it("is not a win when fields has only one field", function() {
      var fields = [[1, 2]]
      expect(game.winColumn(fields)).toEqual(false)
    })

    it("is not a win when fields has no full column", function() {
      var fields = [[1, 2], [2, 2], [3, 3]]
      expect(game.winColumn(fields)).toEqual(false)
    })

    it("is not a win when fields has no full column", function() {
      var fields = [[1, 2], [2, 2], [3, 3]]
      expect(game.winColumn(fields)).toEqual(false)
    })
  })

  describe("finished()", function() {
    it("checks for finish", function() {
      expect(game.finished()).toEqual(false);
    })

    it("is finished when first player won", function() {
      game.put("first", [1, 1]);
      game.put("second", [1, 2]);
      game.put("first", [2, 1]);
      game.put("second", [2, 2]);
      game.put("first", [3, 1]);

      expect(game.finished()).toEqual(true);
    })

    it("is finished when second player won", function() {
      game.put("first", [1, 1]);
      game.put("second", [1, 2]);
      game.put("first", [2, 1]);
      game.put("second", [2, 2]);
      game.put("first", [3, 3]);
      game.put("second", [3, 2]);

      expect(game.finished()).toEqual(true);
    })

    it("checks for finish after one turn", function() {
      game.put("first", [1, 1]);
      expect(game.finished()).toEqual(false);
    })

    it("checks for finish after eight turn", function() {
      game.put("first", [1, 1]);
      game.put("second", [1, 2]);
      game.put("first", [2, 1]);
      game.put("second", [2, 2]);
      game.put("first", [2, 3]);
      game.put("second", [3, 1]);
      game.put("first", [1, 3]);
      game.put("second", [2, 3]);

      expect(game.finished()).toEqual(false);
    })
  })

  describe("put(player, field)", function() {
    // it*()
  })

})
