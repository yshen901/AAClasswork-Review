require_relative "./game.rb"

names = []
while names.length < 2
  print "Enter enter two or more player names separated with spaces: "
  names = gets.chomp.split(' ')
end

game = Game.new(names)
game.run