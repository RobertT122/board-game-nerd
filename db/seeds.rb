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
    designer_name: 'Klaus Teuber'
  }
)
Game.create(
  {
    name: 'Twilight Imperium',
    description: 'Picture yourself in the era of discoveries: after a long voyage of great deprivation, your ships have finally reached the coast of an uncharted island. Its name shall be Catan!',
    designer_name: 'Christian T. Petersen'
  }
)
Game.create(
  {
    name: 'BattleShip',
    description: 'Picture yourself in the era of discoveries: after a long voyage of great deprivation, your ships have finally reached the coast of an uncharted island. Its name shall be Catan!',
    designer_name: 'not Klaus Teuber'
  }
)