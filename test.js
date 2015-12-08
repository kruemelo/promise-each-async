// $ npm test
var assert = require('chai').assert;
var eachAsync = require('./promise-each-async.js');

/*global assert */
describe('promise-each-async', function () {

  it('should apply each in series', function (done) {
    
    var list = ['a', 'b', 'c'],
      called = [];

    eachAsync(
      // array list of items 
      list,
      // apply function iterator on each item
      function (item, callback) {
        called.push(item);
        callback();
      },
      // all items done
      function (err) {
        assert.isNull(err, 'should not have an error');
        assert.deepEqual(called, list);
        done();
      }
    );
  });


  it('should immediately stop iteration on error', function (done) {
    
    var list = ['a', 'b', 'c'],
      called = [];

    eachAsync(
      list,
      function (item, callback) {
        called.push(item);        
        callback(new Error('beep'));
      },
      function (err) {
        assert.instanceOf(err, Error, 'should have an error');
        assert.deepEqual(called, [list[0]], 'should have been called only once');
        done();
      }
    );
  });

  it('should work with callback omitted', function (done) {
    
    var list = ['a', 'b', 'c'],
      called = [];

    eachAsync(
      // array list of items 
      list,
      // apply function iterator on each item
      function (item, callback) {
        called.push(item);
        callback();
      }
      // omit callback
    );

    setTimeout(function () {
      assert.deepEqual(called, list);
      done();
    }, 10);

  });

}); // describe promise-each-async


