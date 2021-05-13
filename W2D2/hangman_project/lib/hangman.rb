class Hangman
  DICTIONARY = ["cat", "dog", "bootcamp", "pizza"]

  attr_reader :guess_word, :attempted_chars, :remaining_incorrect_guesses

  def initialize
    @secret_word = self.class.random_word 
    @guess_word = Array.new(@secret_word.length, '_')
    @attempted_chars = []
    @remaining_incorrect_guesses = 5
  end

  def self.random_word
    DICTIONARY.sample
  end

  def already_attempted?(char)
    @attempted_chars.include?(char)
  end

  def get_matching_indices(char)
    indices = []
    @secret_word.each_char.with_index { |letter, i| indices << i if letter == char }
    indices
  end

  def fill_indices(char, indices)
    get_matching_indices(char).each { |idx| @guess_word[idx] = char }
  end

  def try_guess(char)
    if already_attempted?(char)
      puts "that has already been attempted"
      return false
    else
      @attempted_chars << char
      matches = get_matching_indices(char)
      if matches.empty?
        @remaining_incorrect_guesses -= 1
      else
        fill_indices(char, matches)
      end
      return true
    end
  end

  def ask_user_for_guess
    p "Enter a char:"
    guess = gets.chomp
    try_guess(guess)
  end

  def win?
    if @guess_word.join("") == @secret_word
      puts "WIN"
      return true
    end
    false
  end

  def lose?
    if @remaining_incorrect_guesses == 0
      puts "LOSE"
      return true
    end
    false
  end

  def game_over?
    if self.win? || self.lose?
      puts @secret_word
      return true
    end
    false
  end
end
