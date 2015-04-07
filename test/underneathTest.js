var _ = require('../src/underneath');
describe("each", function() {
  it("should give us the value and iteration count", function() {
    var letters = ['a', 'b', 'c'];
    var iterations = [];

    _.each(letters, function(letter, index, collection) {
      iterations.push([letter, index, collection]);
    });

    expect(iterations).to.eql([
      ['a', 0, letters],
      ['b', 1, letters],
      ['c', 2, letters]
    ]);
  });
});

