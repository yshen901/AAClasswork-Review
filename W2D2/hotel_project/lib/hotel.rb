require_relative "room"

class Hotel 
    attr_reader :rooms

    def initialize(name, rooms)
        @name = name
        @rooms = {}
        rooms.each do |name, capacity|
            @rooms[name] = Room.new(capacity)
        end
    end

    def name
        words = @name.split(" ")
        words.map! { |word| word[0].upcase + word[1..-1] }
        words.join(" ")
    end

    def room_exists?(room_name)
        @rooms.has_key?(room_name)
    end

    def check_in(person, room_name)
        unless room_exists?(room_name)
            puts "sorry, room does not exist"
            return false
        end

        unless @rooms[room_name].add_occupant(person)
            puts "sorry, room is full"
            return false
        end

        puts "check in successful"
        return true    
    end

    def has_vacancy?
        @rooms.any? { |room_name, room| !room.full?}
    end

    def list_rooms
        @rooms.each do |name, room|
            print name
            puts room.available_space
        end
    end
end
