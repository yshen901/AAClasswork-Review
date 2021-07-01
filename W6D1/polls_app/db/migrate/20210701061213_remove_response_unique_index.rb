class RemoveResponseUniqueIndex < ActiveRecord::Migration[5.2]
  def change
    remove_index :responses, [:user_id, :answer_choice_id]
  end
end
