require 'test/unit'

class TestGameStart < Test::Unit::TestCase

  def test_game_start
    # open file to read
    file = File.read('./index.html')

    # search for decrement word
    start_index = file.index('start:')
    decrement_index = file.index('decrement:')
    puts start_index
    puts '> '
    puts decrement_index

    # assign number after decrement to a variable
    start = file[start_index + 7...decrement_index - 2]

    puts start

    start_less_than_1 = start.to_f < 1.0
    start_greater_than_0 = start.to_f > 0.0
    # assert if that variable is between 0-1
    assert(start_less_than_1, "The start speed is too high! Bring it above 0 and below 1.")
    assert(start_greater_than_0, "The start speed too slow. Bring it above 0 and below 1.")
  end

end
