# == Schema Information
#
# Table name: bands
#
#  id         :bigint           not null, primary key
#  name       :text             not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
# Indexes
#
#  index_bands_on_name  (name) UNIQUE
#
require 'test_helper'

class BandTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
