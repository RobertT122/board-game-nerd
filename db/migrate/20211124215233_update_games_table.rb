class UpdateGamesTable < ActiveRecord::Migration[5.2]
  def change
    add_column :games, :image_url, :string, null: false
    add_column :games, :playtime_min, :integer, null: false, limit: 1
    add_column :games, :playtime_max, :integer, limit: 1
    add_column :games, :player_count_min, :integer, null: false, limit: 2
    add_column :games, :player_count_max, :integer, limit: 2
  end
end
