class CreateGamesCatergories < ActiveRecord::Migration[5.2]
  def change
    create_table :games_catergories do |t|
      t.references :game, foreign_key: true, null: false
      t.references :category, foreign_key: true, null: false
      t.timestamps
    end

    add_index :games_catergories, [:game_id, :category_id], unique: true
  end
end
