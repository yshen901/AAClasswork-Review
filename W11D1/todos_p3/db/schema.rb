# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_11_26_072247) do

  create_table "steps", force: :cascade do |t|
    t.string "title", null: false
    t.string "body", null: false
    t.boolean "done", null: false
    t.integer "todo_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["todo_id"], name: "index_steps_on_todo_id"
  end

  create_table "taggings", force: :cascade do |t|
    t.integer "todo_id"
    t.integer "tag_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["tag_id"], name: "index_taggings_on_tag_id"
    t.index ["todo_id", "tag_id"], name: "index_taggings_on_todo_id_and_tag_id", unique: true
    t.index ["todo_id"], name: "index_taggings_on_todo_id"
  end

  create_table "tags", force: :cascade do |t|
    t.string "name", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["name"], name: "index_tags_on_name", unique: true
  end

  create_table "todos", force: :cascade do |t|
    t.string "title", null: false
    t.string "body", null: false
    t.boolean "done", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "user_id", default: "1", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "username", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["username"], name: "index_users_on_username", unique: true
  end

end
