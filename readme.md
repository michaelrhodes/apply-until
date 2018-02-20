# apply-until

## install
```sh
pnpm install michaelrhodes/apply-until#1.0.0
```

## use
```js
var apply = require('apply-until')

apply(sum, [[1,1],[40,2],[38,3]], function (err, result) {
  err ? console.error(err) : open(result)
})

function sum (a, b, cb) {
  a + b !== 41 ?
    cb(new Error('Sum !41'))
    cb(null, 'https://youtu.be/emGri7i8Y2Y')
}
```

## obey
[MIT](https://opensource.org/licenses/MIT)
