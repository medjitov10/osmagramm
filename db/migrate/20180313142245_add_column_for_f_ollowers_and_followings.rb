class AddColumnForFOllowersAndFollowings < ActiveRecord::Migration[5.1]
  def change
    add_column :followings, :followed_id, :integer

  end
end
