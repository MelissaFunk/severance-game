class CreateGrids < ActiveRecord::Migration[7.0]
  def change
    create_table :grids do |t|
      t.integer :number
      t.boolean :correct

      t.timestamps
    end
  end
end
