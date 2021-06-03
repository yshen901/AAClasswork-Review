class Code
  attr_reader :symbol, :face_up

  def initialize(symbol)
    @symbol = symbol
    @face_up = false
  end

  def hide
    @face_up = false
  end

  def reveal
    @face_up = true
  end

  def ==(other_card)
    @symbol == other_card.symbol
  end

  def to_s
    @face_up ? @symbol.to_s : " "
  end
end