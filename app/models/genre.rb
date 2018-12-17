class Genre < ApplicationRecord
  validates :name,presence: true,  uniqueness: { case_sensitive: false }
  validates :description, presence: true

  has_many :genre_categorizations
  has_many :books, through: :genre_categorizations
end
