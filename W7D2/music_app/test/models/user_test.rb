# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  password_digest :text             not null
#  session_token   :text             not null
#  username        :text             not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
# Indexes
#
#  index_users_on_username  (username) UNIQUE
#
require 'test_helper'

class UserTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
