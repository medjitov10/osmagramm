class Post < ApplicationRecord
  validates :post_image, presence: true
  belongs_to :user
  has_many :comments
  has_many :likes

  has_attached_file :post_image, styles: {
    thumb: '100x100>',
    square: '200x200#',
    medium: '600x600>',
    large: '1200x1200>'
  }

  validates_attachment_content_type :post_image, :content_type => /\Aimage\/.*\Z/

end
