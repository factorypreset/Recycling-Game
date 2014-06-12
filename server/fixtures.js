if (Hiscores.find().count() === 0) {
	Hiscores.insert({
		name: 'Melody',
		score: 1500
	});
	Hiscores.insert({
		name: 'Bo',
		score: 500
	});
	Hiscores.insert({
		name: 'Kelly',
		score: 250
	});
}

if (Items.find().count() === 0) {
  Items.insert({ bin: "recycling", src: "/aluminum-cans.png" });
  Items.insert({ bin: "compost", src: "/cutlery-compostable.png" });
  Items.insert({ bin: "recycling-compost", src: "/paperbag-sm.png" });
  Items.insert({ bin: "compost", src: "/paper-take-away-container.png" });
  Items.insert({ bin: "recycling", src: "/plastic-cup.png" });
  Items.insert({ bin: "recycling", src: "/foil-wrapper.png" });
  Items.insert({ bin: "compost", src: "/tea-bag.png" });
  Items.insert({ bin: "trash", src: "/wrapper-granola.png" });
  Items.insert({ bin: "recycling", src: "/bleach.png" });
  Items.insert({ bin: "compost", src: "/chopsticks.png" });
  Items.insert({ bin: "compost", src: "/pizza-box.png" });
  Items.insert({ bin: "recycling-compost", src: "/brownbag.png" });
  Items.insert({ bin: "compost", src: "/sushi.png" });
  Items.insert({ bin: "recycling", src: "/aluminum-foil.png" });
  Items.insert({ bin: "trash", src: "/cutlery.png" });
  Items.insert({ bin: "trash", src: "/chip_bag.png" });
  Items.insert({ bin: "compost", src: "/napkin.png" });
  Items.insert({ bin: "trash", src: "/styrofoam.png" });
  Items.insert({ bin: "compost", src: "/compostable_plasticcup.png" });
  Items.insert({ bin: "compost", src: "/compostable_plate.png" });
  Items.insert({ bin: "compost", src: "/papercoffeecup.png" });
  Items.insert({ bin: "compost", src: "/apple.png" });
  Items.insert({ bin: "trash", src: "/ketchup_mustard_packets.png" });
  Items.insert({ bin: "trash", src: "/styrofoam_coffeecup.png" });
  Items.insert({ bin: "trash", src: "/creamer.png" });
  Items.insert({ bin: "recycling-compost", src: "/cuptray.png" });
  Items.insert({ bin: "recycling", src: "/glassbottle.png" });
  Items.insert({ bin: "recycling-compost", src: "/glovebox.png" });
  Items.insert({ bin: "recycling", src: "/ojcarton.png" });
  Items.insert({ bin: "recycling", src: "/waterbottle.png" });
}

