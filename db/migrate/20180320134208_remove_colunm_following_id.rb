class RemoveColunmFollowingId < ActiveRecord::Migration[5.1]
  def change
    remove_column :followings, :following_id
  end
end
