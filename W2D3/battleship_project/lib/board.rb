class Board
  attr_reader :size

  def self.print_grid(grid)
    grid.each do |row|
      puts row.join(" ")
    end
  end

  def initialize(n)
    @grid = Array.new(n) { Array.new(n, :N) }
    @size = n*n
  end

  def [] (pos)
    @grid[pos[0]][pos[1]]
  end

  def []= (pos, val)
    @grid[pos[0]][pos[1]] = val
  end

  # @grid.count will just return 10 always!
  def num_ships
    @grid.sum do |row|
        row.count { |ele| ele == :S }
    end
  end

  def attack (pos)
    if self[pos] == :S
        self[pos] = :H
        puts "you sunk my battleship!"
        return true
    else
        self[pos] = :X
        return false
    end
  end

  def place_random_ships
    placed = Hash.new(false)

    spot = rand(@size)
    n = @grid.length

    (@size/4).times do 
        spot = rand(@size) while placed[spot]  
        placed[spot] = true

        pos = [spot/n, spot%n]
        self[pos] = :S
    end
  end

  def hidden_ships_grid
    @grid.map do |row|
        row.map { |ele| ele == :S ? :N : ele }
    end
  end

  def cheat 
    Board.print_grid(@grid)
  end

  def print
    Board.print_grid(hidden_ships_grid)
  end
end
