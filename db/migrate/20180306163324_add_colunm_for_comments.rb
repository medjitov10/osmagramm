class AddColunmForComments < ActiveRecord::Migration[5.1]
  def change
    add_column :comments, :user_nickname, :string
  end
end
