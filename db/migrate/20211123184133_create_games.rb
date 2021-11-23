class CreateGames < ActiveRecord::Migration[5.2]
  def change
    create_table :games do |t|
      t.string :name, null: false
      t.string :description, null: false
      t.string :designer_name, null: false
      t.timestamps
    end

    add_index :games, :name, unique: true
    add_index :games, :designer_name
  end
end
