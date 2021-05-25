require_relative "passenger.rb"

class Flight
  attr_reader :passengers

  def initialize(flight_number, capacity)
    @flight_number = flight_number
    @capacity = capacity
    @passengers = []    
  end

  def full?
    @passengers.length >= @capacity
  end

  def board_passenger(passenger)
    @passengers << passenger if !full? && passenger.has_flight?(@flight_number)
  end

  def list_passengers
    @passengers.map { |passenger| passenger.name }
  end

  def [](num)
    @passengers[num]
  end

  def <<(pass)
    board_passenger(pass)
  end
end