def all_words_capitalized? (words)
  words.all? do |word|
    proper_word = word[0].upcase + word[1..-1].downcase
    proper_word.eql?(word)
  end
end

def no_valid_url? (urls)
  url_endings = [".com", ".net", ".io", ".org"]

  urls.none? do |url|
    url_endings.any? { |ending| url.index(ending) }
  end
end

def any_passing_students? (students)
  students.any? { |student| student[:grades].sum / student[:grades].length >= 75 }
end