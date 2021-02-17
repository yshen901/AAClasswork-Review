def partition (arr, num)
  lesser = []
  greater = []

  arr.each { |ele| ele >= num ? greater << ele : lesser << ele }
  [ lesser, greater ]
end

# Hashes like arrays are references
def merge (hash_1, hash_2)
  new_hash = {}
  hash_1.each { |key, val| new_hash[key] = val }
  hash_2.each { |key, val| new_hash[key] = val }
  new_hash
end

# Remember case related edge cases
def censor (sentence, curses)
  words = sentence.split(" ").map { |word| curses.include?(word.downcase) ? censor_word(word) : word }
  words.join(" ")
end

# Can sometimes just add the upper cased chars to avoid having to change case everytime
def censor_word (word)
  vowels = "aeiouAEIOU"
  letters = word.split("").map { |char| vowels.include?(char) ? "*" : char }
  letters.join("")
end

def power_of_two? (num)
  num *= -1 if num < 0
  return true if num == 2 || num == 1

  num % 2 != 0 ? false : power_of_two?(num / 2)
end