def no_dupes?(arr)
  counter = Hash.new(0)

  arr.each { |ele| counter[ele] += 1 }
  arr.select { |ele| counter[ele] == 1 }
end
p no_dupes?([1, 1, 2, 1, 3, 2, 4])         # => [3, 4]
p no_dupes?(['x', 'x', 'y', 'z', 'z'])     # => ['y']
p no_dupes?([true, true, true])            # => []


def no_consecutive_repeats?(arr)
  i = 0
  while i < arr.length - 1
    return false if arr[i] == arr[i+1]
    i += 1
  end
  true
end
p no_consecutive_repeats?(['cat', 'dog', 'mouse', 'dog'])     # => true
p no_consecutive_repeats?(['cat', 'dog', 'dog', 'mouse'])     # => false
p no_consecutive_repeats?([10, 42, 3, 7, 10, 3])              # => true
p no_consecutive_repeats?([10, 42, 3, 3, 10, 3])              # => false
p no_consecutive_repeats?(['x'])                              # => true


def char_indices(str)
  hash = Hash.new { |h, k| h[k] = [] }

  str.each_char.with_index { |char, idx| hash[char] << idx }
  hash
end
p char_indices('mississippi')   # => {"m"=>[0], "i"=>[1, 4, 7, 10], "s"=>[2, 3, 5, 6], "p"=>[8, 9]}
p char_indices('classroom')     # => {"c"=>[0], "l"=>[1], "a"=>[2], "s"=>[3, 4], "r"=>[5], "o"=>[6, 7], "m"=>[8]}


def longest_streak(str)
  return "" unless str
  return "" if str.length == 0

  streak = str[0]
  length = 1

  i = 0
  while i < str.length
    new_streak = str[i]
    new_length = 1
    while i + 1 < str.length && str[i] == str[i+1]
      new_streak << str[i]
      new_length += 1
      i += 1
    end
    unless length > new_length
      length, streak = new_length, new_streak
    end
    i += 1
  end

  streak
end
p longest_streak('a')           # => 'a'
p longest_streak('accccbbb')    # => 'cccc'
p longest_streak('aaaxyyyyyzz') # => 'yyyyy
p longest_streak('aaabbb')      # => 'bbb'
p longest_streak('abc')         # => 'c'


def bi_prime?(num)
  (2...num).each do |factor|
    if num % factor == 0
      return prime?(factor) && prime?(num / factor)
    end
  end
  false
end

def prime?(num)
  return true if num == 2
  return false if num <= 1

  (2...num).each { |factor| return false if num % factor == 0 }
  true
end
p bi_prime?(14)   # => true
p bi_prime?(22)   # => true
p bi_prime?(25)   # => true
p bi_prime?(94)   # => true
p bi_prime?(24)   # => false
p bi_prime?(64)   # => false


def vigenere_cipher(word, key)
  ciphered = ""
  alphabet = [*("a".."z")]
  key_len = key.length

  word.each_char.with_index do |char, i|
    idx = alphabet.index(char) + key[i % key_len]
    ciphered << alphabet[idx % 26]
  end

  ciphered
end
p vigenere_cipher("toerrishuman", [1])        # => "upfssjtivnbo"
p vigenere_cipher("toerrishuman", [1, 2])     # => "uqftsktjvobp"
p vigenere_cipher("toerrishuman", [1, 2, 3])  # => "uqhstltjxncq"
p vigenere_cipher("zebra", [3, 0])            # => "ceerd"
p vigenere_cipher("yawn", [5, 1])             # => "dbbo"


def vowel_rotate(str)
  vowels = "aeiou".split("")
  vowel_indices = []

  str.each_char.with_index { |char, i| vowel_indices << [char, i] if vowels.include?(char) }

  new_str = str
  vowel_indices.each_with_index do |pair, i|
    idx = pair[1]
    new_char = vowel_indices[i - 1][0]
    new_str[idx] = new_char
  end

  new_str
end
p vowel_rotate('computer')      # => "cempotur"
p vowel_rotate('oranges')       # => "erongas"
p vowel_rotate('headphones')    # => "heedphanos"
p vowel_rotate('bootcamp')      # => "baotcomp"
p vowel_rotate('awesome')       # => "ewasemo"


class String
  def select
    return "" unless block_given? 

    new_str = ""
    self.each_char { |char| new_str << char if yield(char) }
    new_str
  end
end
p "app academy".select { |ch| !"aeiou".include?(ch) }   # => "pp cdmy"
p "HELLOworld".select { |ch| ch == ch.upcase }          # => "HELLO"
p "HELLOworld".select          # => ""


class String
  def map!
    return self unless block_given?

    self.each_char.with_index do |char, i|
      self[i] = yield(char, i)
    end

    self
  end
end
word_1 = "Lovelace"
word_1.map! do |ch| 
    if ch == 'e'
        '3'
    elsif ch == 'a'
        '4'
    else
        ch
    end
end
p word_1        # => "Lov3l4c3"

word_2 = "Dijkstra"
word_2.map! do |ch, i|
    if i.even?
        ch.upcase
    else
        ch.downcase
    end
end
p word_2        # => "DiJkStRa"


def multiply(a, b)
  return 0 if b == 0

  change = b > 0 ? -1 : 1  #to change b to 0
  value = (a < 0) ^ (b < 0) ? -a.abs : a.abs  #only negative if different signs

  value + multiply(a, b+change)
end
p multiply(3, 5)        # => 15
p multiply(5, 3)        # => 15
p multiply(2, 4)        # => 8
p multiply(0, 10)       # => 0
p multiply(-3, -6)      # => 18
p multiply(3, -6)       # => -18
p multiply(-3, 6)       # => -18


def lucas_sequence(num)
  return [] if num == 0
  return [2] if num == 1
  return [2, 1] if num == 2

  prev = lucas_sequence(num-1)
  prev << prev[-1] + prev[-2]
  prev
end
p lucas_sequence(0)   # => []
p lucas_sequence(1)   # => [2]    
p lucas_sequence(2)   # => [2, 1]
p lucas_sequence(3)   # => [2, 1, 3]
p lucas_sequence(6)   # => [2, 1, 3, 4, 7, 11]
p lucas_sequence(8)   # => [2, 1, 3, 4, 7, 11, 18, 29]


def prime_factorization(num)
  return [num] if prime?(num)
  (2...num).each do |factor|
    if prime?(factor)
      return [factor].concat(prime_factorization(num / factor))
    end
  end
end
p prime_factorization(12)     # => [2, 2, 3]
p prime_factorization(24)     # => [2, 2, 2, 3]
p prime_factorization(25)     # => [5, 5]
p prime_factorization(60)     # => [2, 2, 3, 5]
p prime_factorization(7)      # => [7]
p prime_factorization(11)     # => [11]
p prime_factorization(2017)   # => [2017]
