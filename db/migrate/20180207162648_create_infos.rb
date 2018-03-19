class CreateInfos < ActiveRecord::Migration[5.1]
  def change
    create_table :infos do |t|
      t.integer :user_id
      t.string :first_name
      t.string :last_name
      t.string :nickname
      t.timestamps
    end
  end
end
