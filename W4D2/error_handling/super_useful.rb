# PHASE 2
def convert_to_int(str)
  Integer(str)
rescue => e
  puts "Something went wrong, the error message is: #{e}"
end

# PHASE 3
FRUITS = ["apple", "banana", "orange"]

class CoffeeError < StandardError
  def message
    puts "This isn't fruit...this is coffee! But I like coffee...try again!"
  end
end

class InvalidFruitError < StandardError
  def message
    puts "This isn't fruit! Goodbye!"
  end
end

def reaction(maybe_fruit)
  if FRUITS.include? maybe_fruit
    puts "OMG, thanks so much for the #{maybe_fruit}!"
  elsif maybe_fruit == "coffee"
    raise CoffeeError
  else
    raise InvalidFruitError
  end 
end

def feed_me_a_fruit
  puts "Hello, I am a friendly monster. :)"

  begin
    puts "Feed me a fruit! (Enter the name of a fruit:)"
    maybe_fruit = gets.chomp
    reaction(maybe_fruit) 
  rescue CoffeeError => e
    puts e.message
    retry
  rescue InvalidFruitError => e
    puts e.message
  end
end  

# PHASE 4
class NotEnoughYears < StandardError
  def message
    puts "Friendship isn't long enough! Best friends must be at least 5 years."
  end
end

class MissingName < StandardError
  def message
    puts "Name is missing!"
  end
end

class InputTooShort < StandardError
  def message
    puts "Input strings are too short!"
  end
end

class MissingPastime < StandardError
  def message
    puts "Pastime is missing!"
  end
end

class BestFriend
  def initialize(name, yrs_known, fav_pastime)
    raise NotEnoughYears if yrs_known < 5
    raise MissingName unless name
    raise MissingPastime unless fav_pastime
    raise InputTooShort unless name.length > 0 && fav_pastime.length > 0

    @name = name
    @yrs_known = yrs_known
    @fav_pastime = fav_pastime
  end

  def talk_about_friendship
    puts "Wowza, we've been friends for #{@yrs_known}. Let's be friends for another #{1000 * @yrs_known}."
  end

  def do_friendstuff
    puts "Hey bestie, let's go #{@fav_pastime}. Wait, why don't you choose. 😄"
  end

  def give_friendship_bracelet
    puts "Hey bestie, I made you a friendship bracelet. It says my name, #{@name}, so you never forget me." 
  end
end


