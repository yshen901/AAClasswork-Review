# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Todo.create({
  title: "Todo 1",
  body: "Body 1",
  done: false
});

Todo.create({
  title: "Todo 2",
  body: "Body 2",
  done: false
});

Todo.create({
  title: "Todo 3",
  body: "Body 3",
  done: false
});

Todo.create({
  title: "Todo 4",
  body: "Body 4",
  done: false
});

Step.create({
  title: "Step 1",
  body: "Step Body 1",
  done: false,
  todo_id: 1
});

Step.create({
  title: "Step 2",
  body: "Step Body 2",
  done: false,
  todo_id: 1
});

Step.create({
  title: "Step 2.1",
  body: "Step Body 2.1",
  done: false,
  todo_id: 2
});

Step.create({
  title: "Step 3.1",
  body: "Step Body 3.1",
  done: false,
  todo_id: 3
});