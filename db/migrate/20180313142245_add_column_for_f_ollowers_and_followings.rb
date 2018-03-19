class AddColumnForFOllowersAndFollowings < ActiveRecord::Migration[5.1]
  def change
    remove_column :followings, :following_id
    remove_column :followers, :followed_id
    add_column :followings, :followed_id, :integer
    add_column :followers, :follower_id, :integer

  end
end
