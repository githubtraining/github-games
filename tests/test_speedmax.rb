require 'test/unit'

class TestGameSpeedMax < Test::Unit::TestCase

  def test_game_speed_max
    # open file to read
    file = File.read('./index.html')

    # search for decrement word
    min_index = file.index('min:')
    end_index = file.index('}, // how long')
    puts min_index
    puts '> '
    puts end_index

    # assign number after decrement to a variable
    min = file[min_index + 5 ...end_index]

    puts min

    min_less_than_1 = min.to_f < 1.0
    min_greater_than_0 = min.to_f > 0.0
    # assert if that variable is between 0-1
    assert(min_less_than_1, "The speed is too high! Bring 'min' above 0 and below 1.")
    assert(min_greater_than_0, "The speed too slow. Bring 'min' above 0 and below 1.")
  end

end
