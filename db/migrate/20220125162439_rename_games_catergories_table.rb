class RenameGamesCatergoriesTable < ActiveRecord::Migration[5.2]
  def change
    drop_table :games_catergories

    create_table :games_categories do |t|
      t.references :game, foreign_key: true, null: false
      t.references :category, foreign_key: true, null: false
      t.timestamps
    end

    add_index :games_categories, [:game_id, :category_id], unique: true
  end
end
