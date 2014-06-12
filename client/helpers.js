UI.registerHelper('setNewItem', function() {
  var items = Items.find();
  var i = Math.floor(Math.random() * items.count());
  var item = items.fetch()[i];
  Session.set("itemBin", item.bin);
  Session.set("itemSrc", item.src);
  return item;
});
