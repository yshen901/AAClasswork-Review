# 1. Use slice not splice, reverse, and join
# 2. Keep in mind edge cases, for example check for upper and lower case vowels
def hipsterfy (word)
  vowels = 'aeiou'
  chars = word.split("").reverse
  new_word = ""

  chars.reverse.each_with_index do |char, i|
    if vowels.include?(char)
      chars.slice!(i, 1)
      return chars.reverse.join("")
    end
  end

  word
end

def vowel_counts (word)
  vowel_hash = {
    "a" => 0,
    "e" => 0,
    "i" => 0,
    "o" => 0,
    "u" => 0
  }

  word.downcase.split("").each do |char| 
    if vowel_hash.has_key?(char)
      vowel_hash[char] += 1
    end
  end

  vowel_hash
end

def caesar_cipher (mess, num)
  vowels = "abcdefghijklmnopqrstuvwxyz"
  ciphered = ""
  len = mess.length

  i = 0
  while i < len 
    idx = vowels.index(mess[i])
    if idx
      ciphered << vowels[ (idx + num) % 26 ]
    else
      ciphered << mess[i]
    end
    i += 1
  end

  ciphered
end