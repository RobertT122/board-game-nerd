# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

demoUser = User.create({username: 'DemoBuddy', email: 'demo@mail.com', password: 'password'})
otherUser = User.create({username: 'OtherBuddy', email: 'other@mail.com', password: 'password'})
anotherUser = User.create({username: 'AnotherBuddy', email: 'another@mail.com', password: 'password'})


Game.create(
  {
    name: 'Catan',
    description: 'Picture yourself in the era of discoveries: after a long voyage of great deprivation, your ships have finally reached the coast of an uncharted island. Its name shall be Catan!',
    designer: 'Klaus Teuber',
    artist:" Volkan Baga,
    Tanja Donner,
    Pete Fenlon,
    Jason Hawkins,
    Michaela Kienle,
    Harald Lieske,
    Michael Menzel,
    Marion Pott,
    Matt Schwabel,
    Franz Vohwinkel,
    Stephen Graham Walsh ",
    year: 1995,
    tag_line: "Collect and trade resources to build up the island of Catan in this modern classic",
    player_count_min: 3,
    player_count_max: 6,
    playtime_min: 45,
    playtime_max: 90,
    image_url: 'catan.jpg'
  }
)
Game.create(
  {
    name: 'Twilight Imperium',
    description: "Mecatol Rex. The center of the known galaxy and seat of the former Lazax Empire. Scarred by the flames of betrayal, Rex is a specter of a fallen empire and of ages long forgotten, yet it remains an object of reverence— and desire—in a galaxy of conflict and uncertainty.",
    designer: 'Christian T. Petersen',
    artist:"Bill Heagy",
    year: 1997,
    tag_line: "The old empire has fallen. Build your forces and wrest control of the galaxy!",
    player_count_min: 6,
    playtime_min: 360,
    image_url: 'twilight-imperium.jpeg'
  }
)
Game.create(
  {
    name: 'BattleShip',
    description: "Battleship is the classic naval combat game that brings together competition, strategy, and excitement. In head-to-head battle, you search for the enemy's fleet of ships and destroy them one by one. No ship is safe in this game of stealth and suspense. Try to protect your own fleet while you annihilate your opponent's. It's a battle that you must win!",
    designer: 'Clifford Von Wickler',
    artist:"Taavi Oolberg",
    year: 1931,
    tag_line: "Detect the enemy fleet and sink it",
    player_count_min: 2,
    playtime_min: 20,
    playtime_max: 40,
    image_url: 'battleship.jpeg'
  }
)

Review.create(
  {
    rating: 10,
    game_id: 1,
    body: "One of my favorite Games!",
    user_id: 1
  }
)
Review.create(
  {
    rating: 5,
    game_id: 1,
    body: "Its okay...",
    user_id: 2
  }
)
Review.create(
  {
    rating: 6,
    game_id: 1,
    user_id: 3
  }
)
Review.create(
  {
    rating: 10,
    game_id: 2,
    body: "this is a greate Game!",
    user_id: 1
  }
)
Review.create(
  {
    rating: 3,
    game_id: 2,
    user_id: 2
  }
)