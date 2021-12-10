class Song < ApplicationRecord
  belongs_to :artist
  validates :title, :duration, :album, presence: true 
end
