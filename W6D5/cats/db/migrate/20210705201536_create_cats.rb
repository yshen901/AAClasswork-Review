class CreateCats < ActiveRecord::Migration[5.2]
  def change
    create_table :cats do |t|
      t.date :birth_date, null: false
      t.text :color, null: false
      t.text :name, null: false
      t.text :sex, null: false, limit: 1
      t.text :description, null: false
      t.timestamps
    end

    add_index :cats, :name
  end
end
