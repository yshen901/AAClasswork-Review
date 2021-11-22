class CreateSteps < ActiveRecord::Migration[5.2]
  def change
    create_table :steps do |t|
      t.string :title, null: false
      t.string :body, null: false
      t.boolean :done, null: false
      t.integer :todo_id, null: false

      t.timestamps
    end

    add_index :steps, :todo_id
  end
end
