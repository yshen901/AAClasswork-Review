def duos (str)
  letters = Hash.new(0)
  str.each_char { |char| letters[char] += 1 }
  
  largest = 0
  letters.each { |key, val| largest = val if val > largest }

  largest
end

