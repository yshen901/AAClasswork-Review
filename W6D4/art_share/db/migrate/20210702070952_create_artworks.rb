class CreateArtworks < ActiveRecord::Migration[5.2]
  def change
    create_table :artworks do |t|
      t.text :title, null: false
      t.text :image_url, null: false
      t.integer :artist_id, null: false

      t.timestamps
    end

    add_index :artworks, :artist_id
    add_index :artworks, :title
    add_index :artworks, [:artist_id, :title], { unique: true }
  end
end
