# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


user_1 = User.create(username: "user_1")
user_2 = User.create(username: "user_2")
user_3 = User.create(username: "user_3")

artwork_1 = Artwork.create(title: "artwork_1", image_url: "artwork_1.com", artist_id: 1)
artwork_2 = Artwork.create(title: "artwork_2", image_url: "artwork_2.com", artist_id: 1)
artwork_3 = Artwork.create(title: "artwork_3", image_url: "artwork_3.com", artist_id: 1)

share_1_2 = ArtworkShare.create(artwork_id: 1, viewer_id: 2)
share_1_3 = ArtworkShare.create(artwork_id: 1, viewer_id: 3)