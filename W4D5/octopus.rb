def sluggish_octopus(fishes) # O(n^2)
  i = 0
  while true
    fish = fishes[i]
    return fish if fishes.all? { |other_fish| fish.length >= other_fish.length}
    i += 1
  end
end

def dominant_octopus(fishes) # O(nlog(n))
  sorted = fishes.sort_by(&:length)
  sorted[-1]
end

def clever_octopus(fishes) # O(n)
  best_fish = fishes[0]
  fishes.each do |fish|
    best_fish = fish if fish.length > best_fish.length
  end
  best_fish
end

fishes = ['fish', 'fiiish', 'fiiiiish', 'fiiiish', 'fffish', 'ffiiiiisshh', 'fsh', 'fiiiissshhhhhh']
p sluggish_octopus(fishes)
p dominant_octopus(fishes)
p clever_octopus(fishes)



tiles_array = ["up", "right-up", "right", "right-down", "down", "left-down", "left",  "left-up" ]
def slow_dance(direction, tiles)
  tiles.index(direction)
end
p slow_dance("up", tiles_array)
p slow_dance("right-down", tiles_array)



tiles_hash = {}
tiles_array.each_with_index { |dir, i| tiles_hash[dir] = i }
def fast_dance(direction, tiles)
  tiles[direction]
end

p fast_dance("up", tiles_hash)
p fast_dance("right-down", tiles_hash)
