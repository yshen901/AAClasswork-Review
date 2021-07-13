class CreateAlbums < ActiveRecord::Migration[5.2]
  def change
    create_table :albums do |t|
      t.text :title, null: false
      t.integer :year, null: false
      t.boolean :live, null: false, default: false
      t.integer :band_id, null: false

      t.timestamps
    end

    add_index :albums, :title
    add_index :albums, :band_id
    add_index :albums, [:title, :band_id], unique: true
  end
end
