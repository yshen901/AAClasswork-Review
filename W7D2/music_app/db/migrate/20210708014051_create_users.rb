class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.text :username, null: false
      t.text :password_digest, null: false
      t.text :session_token, null: false

      t.timestamps
    end

    add_index :users, :username, unique: true
  end
end
