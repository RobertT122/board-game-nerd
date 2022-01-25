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
tagline1 = "This game is the greatest game of all time..."
tagline2 = "This game is a classic and well known"
tagline3 = "This game is very popular and has a very good theme"

description = "This is a generic description of a game, with a bunch of words to make it look like its real. This is a generic description of a game, with a bunch of words to make it look like its real. This is a generic description of a game, with a bunch of words to make it look like its real. This is a generic description of a game, with a bunch of words to make it look like its real. This is a generic description of a game, with a bunch of words to make it look like its real.This is a generic description of a game, with a bunch of words to make it look like its real. This is a generic description of a game, with a bunch of words to make it look like its real."

# Game.create(
#   {
#     name: 'A Feast for Odin',
#     description: description,
#     designer: 'Uwe Rosenburg',
#     artist: 'Dennis Lohausen' ,
#     year: 2016,
#     tag_line: tagline1,
#     player_count_min: 1,
#     player_count_max: 4,
#     playtime_min: 30,
#     playtime_max: 120,
#     uploader_id: 1,
#   }
# )

# Game.create(
#   {
#     name: 'BattleShip',
#     description: description,
#     designer: 'Clifford Von Wickler',
#     artist:"Taavi Oolberg",
#     year: 1931,
#     tag_line: tagline2,
#     player_count_min: 2,
#     player_count_max: nil,
#     playtime_min: 30,
#     playtime_max: nil,
#     uploader_id: 1,
#   }
# )

# Game.create(
#   {
#     name: 'Catan',
#     description: description,
#     designer: 'Klaus Teuber',
#     artist:" Volkan Baga,
#     Tanja Donner,
#     Pete Fenlon,
#     Jason Hawkins,
#     Michaela Kienle,
#     Harald Lieske,
#     Michael Menzel,
#     Marion Pott,
#     Matt Schwabel,
#     Franz Vohwinkel,
#     Stephen Graham Walsh ",
#     year: 1995,
#     tag_line: tagline2,
#     player_count_min: 3,
#     player_count_max: 4,
#     playtime_min: 60,
#     playtime_max: 120,
#     uploader_id: 2,
#   }
# )

# Game.create(
#   {
#     name: 'Codenames',
#     description: description,
#     designer: 'Vlaada Chvátil',
#     artist: 'Stéphane Gantiez, Tomáš Kučerovský, Filip Murmak',
#     year: 2015,
#     tag_line: tagline3,
#     player_count_min: 2,
#     player_count_max: 8,
#     playtime_min: 15,
#     playtime_max: nil,
#     image_url: 'codenames.jpg',
#   }
# )

# Game.create(
#   {
#     name: 'Concordia',
#     description: description,
#     designer: 'Mac Gerdts',
#     artist: 'Marina Fahrenbach, Mac Gerdts, Dominik Mayer',
#     year: 2013,
#     tag_line: tagline1,
#     player_count_min: 2,
#     player_count_max: 5,
#     playtime_min: 100,
#     playtime_max: nil,
#     image_url: 'concordia.jpg',
#   }
# )

# Game.create(
#   {
#     name: 'Dominion',
#     description: description,
#     designer: 'Donald X. Vaccarino',
#     artist: 'Matthias Catrein, Julien Delval, Tomasz Jedruszek, Ryan Laukat',
#     year: 2008,
#     tag_line: tagline2,
#     player_count_min: 2,
#     player_count_max: 4,
#     playtime_min: 30,
#     playtime_max: nil,
#     image_url: 'dominion.jpg',
#   }
# )
# Game.create(
#   {
#     name: 'Dune',
#     description: description,
#     designer: 'Bill Eberle, Jack Kittredge, Peter Olotka',
#     artist: 'Ilya Baranovsky',
#     year: 1979,
#     tag_line: tagline3,
#     player_count_min: 2,
#     player_count_max: 6,
#     playtime_min: 60,
#     playtime_max: 180,
#     image_url: 'dune.jpg',
#   }
# )

# Game.create(
#   {
#     name: 'Eclipse',
#     description: description,
#     designer: 'Touko Tahkokallio',
#     artist: 'Noah Adelman, Jere Kasanen, Jukka Rajaniemi, Sampo Sikiö',
#     year: 2011,
#     tag_line: tagline1,
#     player_count_min: 2,
#     player_count_max: 6,
#     playtime_min: 60,
#     playtime_max: 180,
#     image_url: 'eclipse.jpg',
#   }
# )

# Game.create(
#   {
#     name: 'Ethnos',
#     description: description,
#     designer: 'Paolo Mori',
#     artist: 'John Howe',
#     year: 2017,
#     tag_line: tagline3,
#     player_count_min: 2,
#     player_count_max: 6,
#     playtime_min: 45,
#     playtime_max: 60,
#     image_url: 'ethnos.jpg',
#   }
# )

# Game.create(
#   {
#     name: 'Gaia Project',
#     description: description,
#     designer: 'Jens Drögemüller, Helge Ostertag',
#     artist: 'Dennis Lohausen',
#     year: 2017,
#     tag_line: tagline3,
#     player_count_min: 1,
#     player_count_max: 4,
#     playtime_min: 60,
#     playtime_max: 150,
#     image_url: 'gaia-project.jpg',
#   }
# )

# Game.create(
#   {
#     name: 'Gloomhaven',
#     description: description,
#     designer: 'Isaac Childres',
#     artist: 'Alexandr Elichev, Josh T. McDowell, Alvaro Nebot',
#     year: 2017,
#     tag_line: tagline1,
#     player_count_min: 1,
#     player_count_max: 4,
#     playtime_min: 60,
#     playtime_max: 120,
#     image_url: 'gloomhaven.jpg',
#   }
# )

# Game.create(
#   {
#     name: 'Inis',
#     description: description,
#     designer: 'Christian Martinez',
#     artist: 'Dimitri Bielak, Jim FitzPatrick',
#     year: 2016,
#     tag_line: tagline3,
#     player_count_min: 2,
#     player_count_max: 4,
#     playtime_min: 60,
#     playtime_max: 90,
#     image_url: 'inis.jpg',
#   }
# )

# Game.create(
#   {
#     name: 'Mage Knight',
#     description: description,
#     designer: 'Vlaada Chvátil',
#     artist: 'J. Lonnee, Chris Raimo, Milan Vavroň',
#     year: 2011,
#     tag_line: tagline2,
#     player_count_min: 1,
#     player_count_max: nil,
#     playtime_min: 60,
#     playtime_max: 240,
#     image_url: 'mage-knight.jpg',
#   }
# )

# Game.create(
#   {
#     name: 'Monopoly',
#     description: description,
#     designer: 'Charles Darrow, Elizabeth J. Magie (Phillips)',
#     artist: 'Edison Girard',
#     year: 1933,
#     tag_line: tagline2,
#     player_count_min: '2',
#     player_count_max: '8',
#     playtime_min: 60,
#     playtime_max: 180,
#     image_url: 'monopoly.jpg',
#   }
# )

# Game.create(
#   {
#     name: 'Risk',
#     description: description,
#     designer: 'Albert Lamorisse, Michael I. Levin',
#     artist: '(Uncredited)',
#     year: 1959,
#     tag_line: tagline1,
#     player_count_min: 2,
#     player_count_max: 6,
#     playtime_min: 120,
#     playtime_max: nil,
#     image_url: 'risk.jpg',
#   }
# )

# Game.create(
#   {
#     name: 'Root',
#     description: description,
#     designer: 'Cole Wehrle',
#     artist: 'Kyle Ferrin',
#     year: 2018,
#     tag_line: tagline3,
#     player_count_min: 2,
#     player_count_max: 4,
#     playtime_min: 60,
#     playtime_max: 90,
#     image_url: 'root.jpg',
#   }
# )

# Game.create(
#   {
#     name: 'Scrabble',
#     description: description,
#     designer: 'Alfred Mosher Butts',
#     artist: '(Uncredited)',
#     year: 1948,
#     tag_line: tagline2,
#     player_count_min: 2,
#     player_count_max: 4,
#     playtime_min: 90,
#     playtime_max: nil,
#     image_url: 'scrabble.jpg',
#   }
# )

# Game.create(
#   {
#     name: 'Star Wars Rebellion',
#     description: description,
#     designer: 'Corey Konieczka',
#     artist: 'Matt Allsopp, David Ardila, Balaskas, Tiziano Baracchi',
#     year: 2016,
#     tag_line: tagline1,
#     player_count_min: 2,
#     player_count_max: 4,
#     playtime_min: 180,
#     playtime_max: 240,
#     image_url: 'star-wars-rebellion.jpg',
#   }
# )

# Game.create(
#   {
#     name: 'Ticket to Ride',
#     description: description ,
#     designer: 'Alan R. Moon',
#     artist: 'Cyrille Daujean, Julien Delval',
#     year: 2004,
#     tag_line: tagline2 ,
#     player_count_min: 2,
#     player_count_max: 5,
#     playtime_min: 30,
#     playtime_max: 60,
#     image_url: 'ticket-to-ride.jpg',
#   }
# )

# Game.create(
#   {
#     name: 'Twilight Imperium',
#     description: description,
#     designer: 'Christian T. Petersen',
#     artist:"Bill Heagy",
#     year: 1997,
#     tag_line: tagline3,
#     player_count_min: 3,
#     player_count_max: 6,
#     playtime_min: 240,
#     playtime_max: 480,
#     image_url: 'twilight-imperium.jpg'
#   }
# )

# Game.create(
#   {
#     name: 'War of the Ring',
#     description: description,
#     designer: 'Roberto Di Meglio, Marco Maggi, Francesco Nepitello',
#     artist: 'John Howe, Matteo Macchi, Fabio Maiorana, Mizio Mencarini, Bob Naismith',
#     year: 2004,
#     tag_line: tagline1,
#     player_count_min: 2,
#     player_count_max: nil,
#     playtime_min: 120,
#     playtime_max: nil,
#     image_url: 'war-of-the-ring.jpg',
#   }
# )


# Review.create(
#   {
#     rating: 10,
#     game_id: 1,
#     body: "One of my favorite Games!",
#     user_id: 1
#   }
# )
# Review.create(
#   {
#     rating: 5,
#     game_id: 1,
#     body: "Its okay...",
#     user_id: 2
#   }
# )
# Review.create(
#   {
#     rating: 6,
#     game_id: 1,
#     user_id: 3
#   }
# )
# Review.create(
#   {
#     rating: 10,
#     game_id: 2,
#     body: "this is a greate Game!",
#     user_id: 1
#   }
# )
# Review.create(
#   {
#     rating: 3,
#     game_id: 2,
#     user_id: 2
#   }
# )

Category.create(
  name: 'strategy'
)

Category.create(
  name: 'euro'
)

Category.create(
  name: 'abstract'
)

GamesCategory.create(
  game_id: 1,
  category_id: 1
)

GamesCategory.create(
  game_id: 1,
  category_id: 2
)

GamesCategory.create(
  game_id: 2,
  category_id: 3
)

