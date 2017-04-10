class AddDataToMovie < ActiveRecord::Migration[5.0]
  def change
    add_column :movies, :genre, :string
    add_column :movies, :duration, :string
    add_column :movies, :rating, :string
    add_column :movies, :description, :text
  end
end
