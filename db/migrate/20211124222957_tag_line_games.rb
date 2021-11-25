class TagLineGames < ActiveRecord::Migration[5.2]
  def change
    add_column :games, :tag_line, :string
    add_column :games, :year, :integer
    add_column :games, :artist, :string
  end
end
