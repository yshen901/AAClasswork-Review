# Write a method, `only_vowels?(str)`, that accepts a string as an arg.
# The method should return true if the string contains only vowels.
# The method should return false otherwise.

# include? works for both strings and arrays
def only_vowels?(phrase) 
  vowels = "aeiou"
  letters = phrase.split("")
  
  letters.all? { |letter| vowels.include?(letter) }
end

p only_vowels?("aaoeee")  # => true
p only_vowels?("iou")     # => true
p only_vowels?("cat")     # => false
p only_vowels?("over")    # => false


