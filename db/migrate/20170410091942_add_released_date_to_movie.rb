class AddReleasedDateToMovie < ActiveRecord::Migration[5.0]
  def change
    add_column :movies, :released_date, :date
  end
end
