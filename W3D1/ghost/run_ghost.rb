require_relative "./game.rb"

print "Enter m for Multiplayer, s for Singleplayer: "
single_player = gets.chomp == 's'

names = []
if single_player
  print "Enter enter player name: "
  names << gets.chomp
  ai = true
else
  names = []
  while names.length < 2
    print "Enter enter player names separated with spaces: "
    names = gets.chomp.split(' ')
  end
  print "Add an AI opponent (y/s)? "
  ai = gets.chomp.downcase == 'y'
end

game = Game.new(names, ai)
game.run