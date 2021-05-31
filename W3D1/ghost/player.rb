class Player
  attr_reader :name, :lives

  def initialize(name)
    @name = name[0].upcase + name[1..-1]
    @wins = 0
    @losses = 0
    @lives = 5
  end

  def guess(frag)
    print "It is #{@name}'s turn, please play a letter or enter 'challenge' to challenge the previous player: "
    return gets.chomp.downcase
  end

  def challenge(frag)
    print "#{@name} has been challenged! Please enter a valid word: "
    return gets.chomp.downcase
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