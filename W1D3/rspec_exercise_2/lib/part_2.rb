def palindrome? (str)
  len = str.length
  (0...len).all? { |i| str[i] == str[len - 1 - i] }
end

def substrings (str)
  len = str.length
  substrings = []

  i = 0
  while i < len
    (i...len).each { |j| substrings << str[i..j] }
    i += 1
  end

  substrings
end

def palindrome_substrings (str)
  subs = substrings(str)
  subs.select { |sub| sub.length > 1 && palindrome?(sub) }
end

