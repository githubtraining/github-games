require 'test/unit'

class TestDifferentColors < Test::Unit::TestCase

  def test_different_colors
    #open file and read
    file = File.read('./index.html')

    # search for color pieces
    color_i_index = file.index('var i')
    color_j_index = file.index('var j')
    color_l_index = file.index('var l')
    color_o_index = file.index('var o')
    color_s_index = file.index('var s')
    color_t_index = file.index('var t')
    color_z_index = file.index('var z')
    last_index = file.index('do the bit manipulation')

    color_i = file[color_i_index + 69...color_j_index - 11]
    puts color_i

    color_j = file[color_j_index + 69...color_l_index - 11]
    puts color_j

    color_l = file[color_l_index + 69...color_o_index - 9]
    puts color_l

    color_o = file[color_o_index + 69...color_s_index - 9]
    puts color_o

    color_s = file[color_s_index + 69...color_t_index - 10]
    puts color_s

    color_t = file[color_t_index + 69...color_z_index - 9]
    puts color_t

    color_z = file[color_z_index + 69...last_index - 71]
    puts color_z

    # compare all pieces

    color_array = [color_i, color_j, color_l, color_o, color_s, color_t, color_z]
    puts color_array.uniq == color_array

    assert(color_array.uniq == color_array, "You have multiple pieces with the same color!")
  end

end
