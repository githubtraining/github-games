require 'test/unit'

class TestGameDecrement < Test::Unit::TestCase

  def test_game_decrement
    # open file to read
    file = File.read('./index.html')

    # search for decrement word
    decrement_index = file.index('decrement')
    min_index = file.index('min:')
    puts decrement_index
    puts '> '
    puts min_index

    # assign number after decrement to a variable
    decrement = file[decrement_index + 11...min_index - 2]
    puts decrement

    decrement_less_than_1 = decrement.to_f < 1.0
    decrement_greater_than_0 = decrement.to_f > 0.0
    # assert if that variable is between 0-1
    assert(decrement_less_than_1, "The rate of decrement is too high! Bring 'decrement' above 0 and below 1.")
    assert(decrement_greater_than_0, "The rate of decrement is too slow. Bring 'decrement' above 0 and below 1.")
    end

end
