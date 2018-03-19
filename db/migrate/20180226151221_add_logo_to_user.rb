class AddLogoToUser < ActiveRecord::Migration[5.1]
  def change
    add_attachment :users, :logo_img
  end
end
