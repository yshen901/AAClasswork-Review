class UserTodoAssociation < ActiveRecord::Migration[5.2]
  def change
    add_column :todos, :user_id, :string, null: false, default: 1
  end
end
