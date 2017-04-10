# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movies.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


# 1
Movies.create(title: 'The Shawshank Redemption',
             released_date: Date.new(1994, 10, 14),
             genre: 'Crime, Drama',
             duration: 142,
             rating: 9.3,
             description: 'Two imprisoned men bond over a number of years,
                          finding solace and eventual redemption through acts of common decency.')
# 2
Movies.create(title: 'The Godfather',
             released_date: Date.new(1972, 3, 24),
             genre: 'Crime, Drama',
             duration: 175,
             rating: 9.2,
             description: 'The aging patriarch of an organized crime dynasty transfers
                         control of his clandestine empire to his reluctant son.')
# 3
Movies.create(title: 'The Godfather: Part II',
             released_date: Date.new(1974, 12, 20),
             genre: 'Crime, Drama',
             duration: 202,
             rating: 9.0,
             description: 'The early life and career of Vito Corleone in 1920s
                          New York is portrayed while his son, Michael,
                          expands and tightens his grip on the family crime syndicate.')
# 4
Movies.create(title: 'The Dark Knight',
             released_date: Date.new(2008, 7, 18),
             genre: 'Action, Crime, Drama',
             duration: 152,
             rating: 9.0,
             description: 'When the menace known as the Joker wreaks havoc and
                          chaos on the people of Gotham, the Dark Knight must
                          come to terms with one of the
                          greatest psychological tests of his ability to fight injustice.')
# 5
Movies.create(title: '12 Angry Men',
             released_date: Date.new(1957, 4, 1),
             genre: 'Crime, Drama',
             duration: 96,
             rating: 8.9,
             description: 'A jury holdout attempts to prevent a miscarriage of
                          justice by forcing his colleagues to reconsider the evidence.')

