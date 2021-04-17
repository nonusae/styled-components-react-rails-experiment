# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


course = Course.create(title: 'Hello', description: 'Create a react app')

section = Section.create(title: 'Chapter 1', course: course)

episode = Episode.create([
  { title: '1. Setting Up a new rails app', description: 'Lorem ipsum', url: 'https://www.youtube.com/embed/b0-DX76x0SQ', section: section },
  { title: '2. Adding React to an existing rails app', description: 'Lorem ipsum', url: 'https://www.youtube.com/embed/b0-DX76x0SQ', section: section },
  { title: '3. Building an hello world app', description: 'Lorem ipsum', url: 'https://www.youtube.com/embed/b0-DX76x0SQ', section: section },
  { title: '4. Add React Router Dom to You App', description: 'Lorem ipsum', url: 'https://www.youtube.com/embed/b0-DX76x0SQ', section: section },
])
