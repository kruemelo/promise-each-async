# promise-each-async

applies a function iterator to each list item in series using promises

similar to [async.each(arr, iterator, [callback])](https://github.com/caolan/async#eacharr-iterator-callback)

## eachAsync(arr, iterator, [callback])

```
// array list of items 
var list = ['a', 'b', 'c'];

eachAsync(

  list,

  // apply function iterator on each item
  function (item, callback) {
    // process item
    ..
    callback();
  },

  // all items done
  function (err) {
    ..
  }

);
```

# download

```
$ git clone git://github.com/kruemelo/promise-each-async.git
```

# install

```
$ cd promise-each-async
$ npm install
```

# test

requires mocha installed globally

```
$ mocha
```

License
-------
[WTFPL](http://www.wtfpl.net/)
