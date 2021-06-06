require "byebug"

class WordChainer
  def initialize(dictionary)
    @dictionary = File.open("./dictionary.txt")
    @dictionary = @dictionary.readlines.map(&:chomp)
  end

  def adjacent_words(word)
    len = word.length
    # debugger
    @dictionary.select do |poss_word|
      next if poss_word.length != word.length
      i = 0
      diff = 0
      while i < len 
        diff += 1 if poss_word[i] != word[i]
        i += 1
      end
      diff == 1
    end
  end

  def run(source, target)
    all_seen_words = Hash.new

    current_words = [source]
    until current_words.empty?
      new_word = current_words.shift
      new_adjacent_words = adjacent_words(new_word)

      new_adjacent_words.each do |word|
        unless all_seen_words[word]
          all_seen_words[word] = new_word
          current_words << word
        end
      end

      break if all_seen_words[target]
    end

    raise "No path found" unless all_seen_words[target]
    build_path(source, target, all_seen_words)
  end

  def build_path(source, target, relationships)
    path = [target]
    until path.last == source
      path << relationships[path.last]
    end

    path.reverse
  end
end