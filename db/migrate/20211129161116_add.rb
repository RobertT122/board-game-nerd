class Add < ActiveRecord::Migration[5.2]
  def change
    add_column :games, :avg_rating, :float
  end
end
