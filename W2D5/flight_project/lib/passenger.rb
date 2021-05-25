class Passenger
  attr_reader :name

  def initialize(name)
    @name = name
    @flight_numbers = []
  end

  def has_flight?(str)
    downcased = str.downcase
    @flight_numbers.any? { |flight_num| flight_num.downcase == downcased}
  end

  def add_flight(flight)
    @flight_numbers << flight.upcase unless has_flight?(flight)
  end
end