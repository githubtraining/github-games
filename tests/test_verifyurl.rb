require 'test/unit'

class TestGameStart < Test::Unit::TestCase

  def test_game_start
    # open file to read
    file = File.read('./README.md')

    # get url for remote
    remote = `git config remote.origin.url`
    print 'Remote URL: '
    puts remote

    # get username in remote url
    split_remote = remote.to_s.split('/')
    username_remote_ssh = split_remote[1]
    username_remote_https = split_remote[4]
    if
      username_remote_ssh.length > 0
      then
      username_remote = username_remote_ssh
    else username_remote = username_remote_https
    end

    user_remote_split = username_remote.to_s.split('.')
    user_remote = user_remote_split[0]
    print 'Username in remote: '
    puts user_remote

    # search for README url, assign to link
    link_index = file.index('at:')
    link_end_index = file.index('>> _*SUP')
    link = file[link_index + 4...link_end_index - 3]

    # get username from link in readme
    split_readme = link.to_s.split('/')
    username_readme = split_readme[3]
    print 'Username in README: '
    puts username_readme


    # compare those strings, pass test if they're equal
    assert_equal(user_remote, username_readme, "The URL to the game in the README.md doesn't match the username in the remote repository.")
  end

end
