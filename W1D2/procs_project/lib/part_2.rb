# Keep an eye on the order!
def reverser (str, &prc)
  prc.call(str.reverse)
end

def word_changer (str, &prc)
  words = str.split(" ")

  words.each_with_index { |word, i| words[i] = prc.call(word) }

  words.join(" ")
end

def greater_proc_value (num, prc_1, prc_2)
  prc_1.call(num) > prc_2.call(num) ? prc_1.call(num) : prc_2.call(num)
end

def and_selector (arr, prc_1, prc_2)
  arr.select { |ele| prc_1.call(ele) && prc_2.call(ele) }
end

def alternating_mapper (arr, prc_1, prc_2)
  arr.map.with_index { |ele, i| i % 2 == 0 ? prc_1.call(ele) : prc_2.call(ele) }
end
