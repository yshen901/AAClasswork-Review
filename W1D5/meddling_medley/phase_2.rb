def conjunct_select (arr, *prcs)
    arr.select do |ele|
        prcs.all? { |prc| prc.call(ele) }
    end
end
# is_positive = Proc.new { |n| n > 0 }
# is_odd = Proc.new { |n| n.odd? }
# less_than_ten = Proc.new { |n| n < 10 }

# p conjunct_select([4, 8, -2, 11, 7, -3, 13], is_positive) # [4, 8, 11, 7, 13]
# p conjunct_select([4, 8, -2, 11, 7, -3, 13], is_positive, is_odd) # [11, 7, 13]
# p conjunct_select([4, 8, -2, 11, 7, -3, 13], is_positive, is_odd, less_than_ten) # [7]


def convert_pig_latin (sentence)
    words = sentence.split(" ")
    vowels = "aeiouAEIOU"

    translated = []
    words.each do |word| 
        if word.length < 3
            translated << word
        else
            if vowels.include?(word[0])
                translated << word + "yay"
            else
                i = 0
                i += 1 until vowels.include?(word[i])
                new_word = word[i..-1] + word[0...i] + "ay"
                new_word = new_word[0].upcase + new_word[1..-1].downcase if word[0] == word[0].upcase
                translated << new_word
            end
        end
    end
    translated.join(" ")
end
# p convert_pig_latin('We like to eat bananas') # "We ikelay to eatyay ananasbay"
# p convert_pig_latin('I cannot find the trash') # "I annotcay indfay ethay ashtray"
# p convert_pig_latin('What an interesting problem') # "Atwhay an interestingyay oblempray"
# p convert_pig_latin('Her family flew to France') # "Erhay amilyfay ewflay to Ancefray"
# p convert_pig_latin('Our family flew to France') # "Ouryay amilyfay ewflay to Ancefray"


def reverberate(sent)
    words = sent.split(' ')
    vowels = "aeiouAEIOU"

    translated = []
    words.each do |word|
        if word.length < 3
           translated << word
        else
            if vowels.include?(word[-1])
                translated << word + word.downcase
            else
                i = word.length - 1
                i -= 1 until vowels.include?(word[i])
                translated << word + word[i..-1].downcase
            end
        end
    end
    translated.join(" ")
end
# p reverberate('We like to go running fast') # "We likelike to go runninging fastast"
# p reverberate('He cannot find the trash') # "He cannotot findind thethe trashash"
# p reverberate('Pasta is my favorite dish') # "Pastapasta is my favoritefavorite dishish"
# p reverberate('Her family flew to France') # "Herer familyily flewew to Francefrance"


def disjunct_select (arr, *prcs)
    arr.select do |ele|
        prcs.any? { |prc| prc.call(ele) }
    end
end
# longer_four = Proc.new { |s| s.length > 4 }
# contains_o = Proc.new { |s| s.include?('o') }
# starts_a = Proc.new { |s| s[0] == 'a' }

# p disjunct_select(['ace', 'dog', 'apple', 'teeming', 'boot', 'zip'],
#     longer_four,
# ) # ["apple", "teeming"]

# p disjunct_select(['ace', 'dog', 'apple', 'teeming', 'boot', 'zip'],
#     longer_four,
#     contains_o
# ) # ["dog", "apple", "teeming", "boot"]

# p disjunct_select(['ace', 'dog', 'apple', 'teeming', 'boot', 'zip'],
#     longer_four,
#     contains_o,
#     starts_a
# ) # ["ace", "dog", "apple", "teeming", "boot"]


def alternating_vowel (sentence)
    first = true
    vowels = "aeiouAEIOU"
    words = sentence.split(" ")

    alternated = []
    words.each do |word|
        if first
            i = 0
            i += 1 until i == word.length || vowels.include?(word[i])
        else
            i = word.length - 1
            i -= 1 until i == -1 || vowels.include?(word[i])
        end
        word[i] ? alternated << word[0...i] + word[i+1..-1] : alternated << word
        first = !first
    end

    alternated.join(" ")
end
# p alternating_vowel('panthers are great animals') # "pnthers ar grat animls"
# p alternating_vowel('running panthers are epic') # "rnning panthrs re epc"
# p alternating_vowel('code properly please') # "cde proprly plase"
# p alternating_vowel('my forecast predicts rain today') # "my forecst prdicts ran tday"


def silly_talk(sentence)
    vowels = "aeiouAEIOU"
    words = sentence.split(" ")

    silly_words = []
    words.each do |word| 
        if vowels.include?(word[-1])
            silly_words << word + word[-1]
        else
            silly_word = ""
            word.each_char do |char|
                silly_word << char
                silly_word << 'b' + char if vowels.include?(char)
            end
            if word[0] == word[0].upcase
                silly_words << silly_word[0].upcase + silly_word[1..-1].downcase
            else
                silly_words << silly_word.downcase
            end
        end
    end
    silly_words.join(" ")
end
# p silly_talk('Kids like cats and dogs') # "Kibids likee cabats aband dobogs"
# p silly_talk('Stop that scooter') # "Stobop thabat scobooboteber"
# p silly_talk('They can code') # "Thebey caban codee"
# p silly_talk('He flew to Italy') # "Hee flebew too Ibitabaly"


def compress(str)
    i = 0
    compressed = ""
    while (i < str.length)
        char = str[i]
        count = 1
        i += 1
        while (i < str.length && str[i] == char)
            i += 1
            count += 1
        end
        compressed << char
        compressed << count.to_s if count > 1
    end
    compressed
end
# p compress('aabbbbc')   # "a2b4c"
# p compress('boot')      # "bo2t"
# p compress('xxxyxxzzzz')# "x3yx2z4"