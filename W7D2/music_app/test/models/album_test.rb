# == Schema Information
#
# Table name: albums
#
#  id         :bigint           not null, primary key
#  live       :boolean          default(FALSE), not null
#  title      :text             not null
#  year       :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  band_id    :integer          not null
#
# Indexes
#
#  index_albums_on_band_id            (band_id)
#  index_albums_on_title              (title)
#  index_albums_on_title_and_band_id  (title,band_id) UNIQUE
#
require 'test_helper'

class AlbumTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
