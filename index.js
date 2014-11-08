var distance = require("leven")

module.exports = function(a,b) {
  if (!a || !b || !a.length || !b.length) return 0
  if (a === b) return 1
  var d = distance(a,b)
  // var longest = a.length > b.length ? a : b
  var longest = Math.max(a.length, b.length)
  return (longest-d)/longest
}
