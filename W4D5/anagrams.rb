# O(n!) time, O(n!) space
def first_anagram?(word_1, word_2)
  return false if word_1.length != word_2.length

  letters = word_1.split("")
  all_anagrams = generate_permutations(letters)
  all_anagrams.map!(&:join)
  
  all_anagrams.include?(word_2)
end

def generate_permutations(arr, swap_pos=0)
  return [arr] if swap_pos == arr.length

  permutations = []

  i = swap_pos
  while i < arr.length
    arr[swap_pos], arr[i] = arr[i], arr[swap_pos]
    permutations.concat(generate_permutations(arr.dup, swap_pos+1))
    arr[i], arr[swap_pos] = arr[swap_pos], arr[i]

    i += 1
  end

  permutations
end


# O(n^2) time, O(1) space
def second_anagram?(word_1, word_2)
  return false if word_1.length != word_2.length

  word_1.each_char do |char|
    idx = word_2.index(char)
    idx ? word_2 = word_2[0...idx] + word_2[idx+1..-1] : (return false)
  end
  word_2 == ""
end

# O(nlogn) time, O(n) space
def third_anagram?(word_1, word_2)
  return false if word_1.length != word_2.length

  letters_1 = word_1.split("").sort
  letters_2 = word_2.split("").sort
  
  letters_1.each_with_index do |char, i|
    return false if letters_1[i] != letters_2[i]
  end

  true
end


# O(n) time, O(n) space
def fourth_anagram?(word_1, word_2)
  return false if word_1.length != word_2.length

  letters = Hash.new(0)

  word_1.each_char { |char| letters[char] += 1 }
  word_2.each_char { |char| letters[char] -= 1 }

  letters.each { |k,v| return false if v != 0 }
  true
end