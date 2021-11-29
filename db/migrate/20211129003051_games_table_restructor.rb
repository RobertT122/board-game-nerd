class GamesTableRestructor < ActiveRecord::Migration[5.2]
  def change
    remove_column :games, :designer_name
    remove_column :games, :tag_line
    remove_column :games, :artist
    remove_column :games, :year

    add_column :games, :designer, :string, null: false
    add_column :games, :tag_line, :string, null: false
    add_column :games, :artist, :string, null: false
    add_column :games, :year, :integer, limit: 1, null: false
  end
end
