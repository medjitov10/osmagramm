class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable

  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  validates :nickname, uniqueness: { case_sensitive: false }
  
  has_many :posts
  has_many :followers
  has_many :followings
  has_many :comments
  has_many :likes
  has_one :info

  has_attached_file :logo_img, styles: {
    thumb: '100x100>',
    square: '150x150#',
    medium: '300x300>'
  }

  validates_attachment_content_type :logo_img, :content_type => /\Aimage\/.*\Z/
  def logo_img_url
    logo_img.url
  end
end
