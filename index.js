module.exports = until

function until (fn, xargs, cb) {
  var l = xargs.length

  ;(function next (i) {
    if (i === l) return cb(new Error(
      '0 of ' + l + ' function calls were successful'
    ))

    var args = [].concat(xargs[i])
    args.push(check)

    args.length === 2 ? fn(args[0], args[1]) :
    args.length === 3 ? fn(args[0], args[1], args[2]) :
    fn.apply(null, args)

    function check (err) {
      err ? next(i + 1) :
      cb.apply(null, arguments)
    }
  })(0)
}
