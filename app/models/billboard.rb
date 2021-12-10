class Billboard < ApplicationRecord
  has_many :artists, dependent: :destroy
  validates :name, :description, presence: true
end
