class Code
  POSSIBLE_PEGS = {
    "R" => :red,
    "G" => :green,
    "B" => :blue,
    "Y" => :yellow
  }

  def self.valid_pegs?(chars)
    chars.all? { |char| POSSIBLE_PEGS.include?(char.upcase) }
  end

  def self.random(len)
    pegs = POSSIBLE_PEGS.keys
    random_pegs = Array.new(len) { pegs.sample }
    Code.new(random_pegs)
  end

  def self.from_string(str)
    Code.new(str.upcase.split(""))
  end

  attr_reader :pegs

  def initialize(pegs)
    raise "Invalid pegs!" unless Code.valid_pegs?(pegs)

    @pegs = pegs.map { |peg| peg.upcase }
  end

  def [](idx)
    return nil if idx < 0 || idx >= @pegs.length
    @pegs[idx]
  end

  def length
    @pegs.length
  end

  def num_exact_matches(guess)
    raise "incorrect length" if guess.length != @pegs.length

    num = 0
    guess.pegs.each_with_index { |ele, i| num += 1 if ele == @pegs[i] }
    num
  end

  def num_near_matches(guess)
    unless Code.valid_pegs?(guess.pegs)
      raise "Invalid pegs detected."
    end

    counter = Hash.new(0)
    matches = 0
    @pegs.each { |peg| counter[peg] += 1 }
    guess.pegs.each do |guess_peg|
      if counter[guess_peg] > 0
        # counter[guess_peg] -= 1
        matches += 1
      end
    end

    matches - num_exact_matches(guess)
  end

  def == (guess)
    return false if guess.pegs.length != @pegs.length
    
    guess_pegs = guess.pegs
    @pegs.each_with_index { |ele, i| return false if ele != guess_pegs[i] }
    true
  end
end
