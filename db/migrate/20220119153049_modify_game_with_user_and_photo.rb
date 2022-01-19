class ModifyGameWithUserAndPhoto < ActiveRecord::Migration[5.2]
  def change
    remove_column :games, :image_url
    add_column :games, :uploader_id, :integer, null: false
    add_index :games, :uploader_id
  end
end
