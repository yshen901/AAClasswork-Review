require 'byebug'

class Board
  attr_accessor :cups

  def initialize(name1, name2)
    @cups = Array.new(14)
    @name1 = name1
    @name2 = name2
    place_stones
  end

  def place_stones
    @cups.each_with_index do |cup, i|
      unless i == 6 || i == 13
        @cups[i] = [:stone, :stone, :stone, :stone] 
      else
        @cups[i] = []
      end
    end
  end

  def valid_move?(start_pos)
    raise "Invalid starting cup" if start_pos < 0 || start_pos > 13
    raise "Starting cup is empty" if @cups[start_pos].empty?
  end

  def make_move(start_pos, current_player_name)
    num_stones = @cups[start_pos].length
    @cups[start_pos] = []

    enemy_store = current_player_name == @name2 ? 6 : 13

    pos = start_pos
    while num_stones > 0
      pos = (pos + 1) % 14
      if pos != enemy_store
        @cups[pos] << :stone
        num_stones -= 1
      end
    end

    render
    next_turn(pos)
  end

  def next_turn(ending_cup_idx)
    if ending_cup_idx == 6 || ending_cup_idx == 13
      return :prompt
    elsif @cups[ending_cup_idx].count == 1
      return :switch
    else
      return ending_cup_idx
    end
  end

  def render
    print "      #{@cups[7..12].reverse.map { |cup| cup.count }}      \n"
    puts "#{@cups[13].count} -------------------------- #{@cups[6].count}"
    print "      #{@cups.take(6).map { |cup| cup.count }}      \n"
    puts ""
    puts ""
  end

  def one_side_empty?
    (1..6).all? { |val| @cups[val].empty? } ||
      (7..12).all? { |val| @cups[val].empty? }
  end

  def winner
    if @cups[6].length == @cups[13].length 
      return :draw
    end

    @cups[6].length > @cups[13].length ? @name1 : @name2
  end
end
