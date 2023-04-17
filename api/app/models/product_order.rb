class ProductOrder < ApplicationRecord
    # Associations
    belongs_to :product
    belongs_to :user
  
    # Validations
    validates :quantity, presence: true, numericality: { greater_than: 0 }
    validates :status, presence: true, inclusion: { in: %w[pending approved disapproved] }
  
    # Scopes
    scope :pending, -> { where(status: 'pending') }
    scope :approved, -> { where(status: 'approved') }
    scope :disapproved, -> { where(status: 'disapproved') }
  end