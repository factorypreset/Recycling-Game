Meteor.publish('hiscores', function() {
	return Hiscores.find();
});

Meteor.publish('items', function() {
  return Items.find();
});
