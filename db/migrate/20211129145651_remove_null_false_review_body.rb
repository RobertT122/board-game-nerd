class RemoveNullFalseReviewBody < ActiveRecord::Migration[5.2]
  def change
    remove_column :reviews, :body
    add_column :reviews, :body, :string
  end
end
