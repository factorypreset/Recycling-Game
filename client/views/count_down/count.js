Template.counter.count = function() {
  return Session.get('count') || 0;
}

Template.counter.score = function() {
  return Session.get('score') || 0;
}

