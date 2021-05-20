require_relative "code"

class Mastermind
    def initialize(len)
        @secret_code = Code.random(len)
    end

    def print_matches(code)
        print "Exact matches: "
        puts @secret_code.num_exact_matches(code)

        print "Near matches: "
        puts @secret_code.num_near_matches(code)
    end

    def ask_user_for_guess
        print "Enter a code: "
        input = Code.from_string(gets.chomp)

        print_matches(input)
        input == @secret_code
    end
end
