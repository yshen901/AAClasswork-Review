class AddUniqueShortUrl < ActiveRecord::Migration[5.2]
  def change
    remove_index :shortened_urls, :short_url
    add_index :shortened_urls, :short_url, {unique: true}
  end
end
