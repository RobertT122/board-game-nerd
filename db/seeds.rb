# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

demoUser = User.create({username: 'DemoBuddy', email: 'demo@mail.com', password: 'password'})

Game.create(
  {
    name: 'Catan',
    description: 'Picture yourself in the era of discoveries: after a long voyage of great deprivation, your ships have finally reached the coast of an uncharted island. Its name shall be Catan!',
    designer_name: 'Klaus Teuber',
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
    designer_name: 'Christian T. Petersen',
    player_count_min: 6,
    playtime_min: 360,
    image_url: 'twilight-imperium.jpeg'
  }
)
Game.create(
  {
    name: 'BattleShip',
    description: "Battleship is the classic naval combat game that brings together competition, strategy, and excitement. In head-to-head battle, you search for the enemy's fleet of ships and destroy them one by one. No ship is safe in this game of stealth and suspense. Try to protect your own fleet while you annihilate your opponent's. It's a battle that you must win!",
    designer_name: 'Clifford Von Wickler',
    player_count_min: 2,
    playtime_min: 20,
    playtime_max: 40,
    image_url: 'battleship.jpeg'
  }
)