define([], function() {
  describe('Member Data', function () {
    describe('save', function () {
      it("should save successfully.", function() {
        var someValue = 50;
        expect(true).to.equal(true);
      })
    });
  });


  describe('karma tests with sinon', function() {
    return it('can spy on objects', function() {
      var foo;
      foo = {
        bar: function() {}
      };
      sinon.spy(foo, 'bar');
      foo.bar('baz');
      return foo.bar.should.have.been.calledWith('baz');
    });
  });

});