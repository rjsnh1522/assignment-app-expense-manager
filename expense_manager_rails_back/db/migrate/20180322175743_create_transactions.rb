class CreateTransactions < ActiveRecord::Migration[5.1]
  def change
    create_table :transactions do |t|
    	t.integer :user_id
    	t.string  :name
    	t.decimal :amount,precision:12,scale:2
    	t.integer :type_of
    	t.text    :note
    	t.datetime :on_date
      t.timestamps
    end
  end
end
