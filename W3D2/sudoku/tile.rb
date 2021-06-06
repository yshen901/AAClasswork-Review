require 'colorize'
require 'colorized_string'

class Tile
  attr_reader :val, :given
  def initialize(val, given=false)
    @val = val
    @given = given
  end

  def set_val(new_val)
    return false if @given
    @val = new_val.to_s
    true
  end

  def to_s
    return " " if @val == "0"
    @given ? ColorizedString[@val].colorize(:light_blue) : ColorizedString[@val].colorize(:white)
  end

  def to_i
    @val.to_i
  end
end