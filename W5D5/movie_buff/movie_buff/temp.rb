start = 325
months = 12
income = 12
rate = 1.01

final = start
months.times do 
  final *= rate
  final += income
end

p "Final Amount: #{final}"
p "From Income: #{months * income}"
p "From Interest: #{final - start - months*income}"