require "set"
require 'byebug'

class AiPlayer
  attr_reader :name, :lives

  def initialize(dictionary)
    @name = "AI"
    @wins = 0
    @losses = 0
    @lives = 5

    @dictionary = dictionary
    @letters = Set.new([*('a'..'z')])
  end

  def guess(frag)
    print "It is #{@name}'s turn, please play a letter or enter 'challenge' to challenge the previous player: "
    
    best_letter = 'a'
    best_possibilities = @dictionary.length

    @letters.each do |letter|
      potential_frag = frag + letter
      possibilities = 0
      @dictionary.each do |word|
        if word != potential_frag && word.start_with?(potential_frag)
          possibilities += 1
        end
      end
      if possibilities != 0 && best_possibilities > possibilities
        best_letter = letter
        best_possibilities = possibilities
      end
    end

    # no words were found, that means we are one letter away from the only possible word...only option is to challenge
    if best_possibilities == @dictionary.length
      puts "challenge"
      return "challenge"
    end

    puts best_letter
    best_letter
  end

  def challenge(frag)
    print "#{@name} has been challenged! Please enter a valid word: "
    
    valid_word = ""
    @dictionary.each do |word|
      valid_word = word if word.start_with?(frag)
      puts valid_word
      break
    end

    valid_word
  end

  def alert_invalid_guess(guess)
    print "#{guess} is not a valid move!\n"
  end

  def ghost?
    @lives == 0
  end

  def add_letter
    @lives -= 1
  end

  def reset
    ghost? ? @losses += 1 : @wins += 1
    @lives = 5
  end
end