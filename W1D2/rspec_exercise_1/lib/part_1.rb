def average (num_1, num_2) 
  (num_1 + num_2) / 2.0
end

def average_array (arr) 
  arr.sum.to_f / arr.length
end

def repeat (message, num)
  new_mess = ""
  num.times do
    new_mess += message
  end
  new_mess
end

def yell (message)
  message.upcase + "!"
end

def alternating_case (message)
  words = message.split
  new_mess = ""

  words.each_with_index { |word, i| i % 2 == 0 ? word.upcase! : word.downcase! }
  words.join(" ")
end