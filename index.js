var singer = {
  name: "Joanne",
  age: 34,
  height: "150 CM",
  hometown: "Quad City, IL",
  printHometown: function() {
      console.log(this.hometown);
  },
  favoriteSong: [
      {
          songName: "love you softly",
          bandInfo: [
              {
                  practiceDay: "Saturday",
                  locationName: "3rd Door Down Bar",             },
          ]
      },
  ],
  singerFriends: [
      {
          name: "Mike",
          age: 8,
          height: "121.9 CM",
          hometown: "San Diego, CA",
          favoriteSong: [
              {
                  songName: "The Gambler",
                  bandInfo: [
                      {
                          practiceDay: "Wednesday",
                          locationName: "Mikes house",
                      }
                  ]
              },
          ],
      },
      {
          name: "Todd",
          age: 19,
          height: "192 CM",
          hometown: "Bacon, Indiana",
          favoriteSong: [
              {
                  songName: "Boogie Wonderland",
                  bandInfo: [
                      {
                          practiceDay: "Tuesday",
                          locationName: "Hyde Park Park",
                      }
                  ]
              },
          ]
      }
  ]
}




singer.favoriteColor = 'Blue';
singer.talent = "baritone";
singer.othertalent = "cowboy poetry"
singer.partner = "Joe"


singer.singerFriends.push({
  name: "Jon",
  age: 54,
  height: "190 CM",
  hometown: "Bee Lick, Kentucky",
  favoriteSong: [
      {
          songName: "love you softly",
          bandInfo: [
              {
                  practiceDay: "Monday",
                  locationName: "Bee Lick Bar",
              }
          ]
      },
  ],
});

singer.singerFriends.push({
  name: "Mike",
  age: 34,
  height: "200 CM",
  hometown: "Chicken, Alaska",
  favoriteSong: [
      {
          songName: "Eye of the Tiger",
          bandInfo: [
              {
                  practiceDay: "Tuesday",
                  locationName: "Bugscuffle Bar",
              }
          ]
      },
  ],
})

console.log(singer)