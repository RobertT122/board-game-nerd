class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.integer :rating, null: false, limit: 1
      t.string :body, null: false
      t.integer :user_id, null: false
      t.integer :game_id, null: false
      t.timestamps
    end

    add_index :reviews, [:user_id, :game_id], unique: true
  end
end
