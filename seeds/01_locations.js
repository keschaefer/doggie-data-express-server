
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('locations').del()
    .then(function () {
      // Inserts seed entries
      return knex('locations').insert([
        {
          location_name: "Ace Hardware",
          location_address: "1030 E 9th Ave, Denver, CO 80218",
          description: "Shop for all your home repair needs with your pup at your side!",
          category: "retail",
          ranking: 3,
          image: "https://dl.dropboxusercontent.com/s/hjwyykdtwyhe49x/Ace_Hardware.jpg"
       },
       {
          location_name: "Denver Beer Company",
          location_address: "1695 Platte St, Denver, CO 80202",
          description: "Sip a beer with your pup on the sun-filled patio at Denver Beer Co.!",
          category: "brewery",
          ranking: 3,
          image: "https://dl.dropboxusercontent.com/s/yeqcxq1r66ct896/Denver_Beer.jpg"
       },
       {
          location_name: "Mount Falcon Castle Trail",
          location_address: "Castle Trail, Morrison, CO 80465",
          description: "Take your pup along on this beautiful and low-impact hike right outside of Denver",
          category: "trail",
          ranking: 3,
          image: "https://dl.dropboxusercontent.com/s/lj0oiz6lrj3awg5/Mount_Falcon.jpeg"
       }
      ]);
    });
};
