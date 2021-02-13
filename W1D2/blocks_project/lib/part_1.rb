def select_even_nums (arr)
  arr.select { |ele| ele % 2 == 0 }
end

def reject_puppies (pups)
  pups.reject { |pup| pup["age"] <= 2 }
end

def count_positive_subarrays (arrays)
  arrays.count { |sub_arr| sub_arr.sum > 0 }
end

def aba_translate (word)
  vowels = "aeiou".split("")
  translated = ""

  word.each_char do |char|
    translated << char
    if vowels.include?(char)
      translated << "b" + char
    end
  end

  translated
end

def aba_array (arr)
  arr.map { |word| aba_translate(word) }
end