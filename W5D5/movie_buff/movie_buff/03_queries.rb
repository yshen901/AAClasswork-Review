def what_was_that_one_with(those_actors)
  # Find the movies starring all `those_actors` (an array of actor names).
  # Show each movie's title and id.

  Movie
    .joins(:actors)
    .where("actors.name IN (?)", those_actors)
    .group("movies.id")
    .having("COUNT(*) = ?", those_actors.length)
    .select("movies.title, movies.id")
end

def golden_age
  # Find the decade with the highest average movie score.

  Movie
    .group("yr / 10")
    .order("AVG(score) DESC")
    .select("(yr / 10) * 10 as decade")
    .first
    .decade
end

def costars(name)
  # List the names of the actors that the named actor has ever
  # appeared with.
  # Hint: use a subquery

  relevant_movies = Movie.joins(:actors).where("actors.name = ?", name).pluck(:title)

  Actor
    .joins(:movies)
    .where("actors.name != ? AND movies.title IN (?)", name, relevant_movies)
    .group("name")
    .pluck(:name)
end

def actor_out_of_work
  # Find the number of actors in the database who have not appeared in a movie

  Actor
    .left_outer_joins(:movies)
    .where("movies.title IS NULL")
    .count
end

def starring(whazzername)
  # Find the movies with an actor who had a name like `whazzername`.
  # A name is like whazzername if the actor's name contains all of the
  # letters in whazzername, ignoring case, in order.

  # ex. "Sylvester Stallone" is like "sylvester" and "lester stone" but
  # not like "stallone sylvester" or "zylvester ztallone"

  new_name = whazzername.split("").join("%")

  Movie
    .joins(:actors)
    .where("LOWER(actors.name) LIKE LOWER(?)", "%#{new_name}%")
    .group("movies.id")
end

def longest_career
  # Find the 3 actors who had the longest careers
  # (the greatest time between first and last movie).
  # Order by actor names. Show each actor's id, name, and the length of
  # their career.

  Actor
    .select("actors.id, actors.name, MAX(movies.yr) - MIN(movies.yr) as career")
    .joins(:movies)
    .group("actors.id")
    .order("career DESC, actors.name ASC")
    .limit(3)
end
