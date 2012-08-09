var s = require('superagent-ender')
ender.ender(s)
ender.ender({
    get: s.get
  , head: s.head
  , del: s.del
  , patch: s.patch
  , post: s.post
  , put: s.put
})