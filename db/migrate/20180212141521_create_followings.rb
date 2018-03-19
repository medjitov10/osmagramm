class CreateFollowings < ActiveRecord::Migration[5.1]
  def change
    create_table :followings do |t|
      t.integer :user_id
      t.integer :following_id
      t.timestamps
    end

    add_index :followings, :user_id
    add_index :followings, :following_id
  end
end
