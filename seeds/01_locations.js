exports.seed = function(knex, Promise) {
  return knex('locations').del()
    .then(function () {
      return knex('locations').insert([
        {
          location_name: "Ace Hardware",
          location_address: "1030 E 9th Ave, Denver, CO 80218",
          description: "Shop for all your home repair needs with your pup at your side!",
          category: "retail",
          image: "https://dl.dropboxusercontent.com/s/hjwyykdtwyhe49x/Ace_Hardware.jpg"
       },
       {
          location_name: "Denver Beer Company",
          location_address: "1695 Platte St, Denver, CO 80202",
          description: "Sip a beer with your pup on the sun-filled patio at Denver Beer Co.!",
          category: "brewery",
          image: "https://dl.dropboxusercontent.com/s/yeqcxq1r66ct896/Denver_Beer.jpg"
       },
       {
          location_name: "Mount Falcon Castle Trail",
          location_address: "Castle Trail, Morrison, CO 80465",
          description: "Take your pup along on this beautiful and low-impact hike right outside of Denver",
          category: "trail",
          image: "https://dl.dropboxusercontent.com/s/lj0oiz6lrj3awg5/Mount_Falcon.jpeg"
       },
       {
          location_name: "Walgreens",
          location_address: "2000 E Colfax Ave, Denver, CO 80206",
          description: "Browse the drug store aisles alongside your pup",
          category: "retail",
          image: "https://dl.dropboxusercontent.com/s/d0ost6382rhsfqu/Walgreens.jpeg"
        },
        {
          location_name: "Fuller Dog Park",
          location_address: "2801 N Williams St, Denver, CO 80205",
          description: "This small dog park is nothing special, but allows your dog to roam free off-leash",
          category: "dog park",
          image: "https://dl.dropboxusercontent.com/s/4z6r9xvwem6jeub/Fuller.jpg"
        },
        {
          location_name: "Hotel Monaco",
          location_address: "1717 Champa St, Denver, CO 80202",
          description: "Travel in style with your pup at this downtown Denver hotel",
          category: "lodging",
          image: "https://dl.dropboxusercontent.com/s/tewwe2ps49m5rwl/monaco.jpg"
        }
     ]);
    });
};
