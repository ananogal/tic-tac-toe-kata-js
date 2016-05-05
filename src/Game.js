function Game() {
  this.current_player = "first"
  this.fields = { first: [], second: [] }
}

Game.prototype.currentPlayer = function() {
  return this.current_player
}

Game.prototype.put = function(player, field) {
  this.fields[player].push(field)
  if (this.currentPlayer() == "first") {
    this.current_player = "second"
  } else {
    this.current_player = "first"
  }
}

Game.prototype.finished = function() {
  return this.winColumn(this.fields.first) ||
    this.winColumn(this.fields.second)
}

Game.prototype.winColumn = function(fields) {
  for (var column = 1; column <= 3; ++column)
    if (this.countFieldsWithColumn(fields, column) == 3)
      return true

  return false
}

Game.prototype.countFieldsWithColumn = function(fields,column){
  var count = 0

  for (var i = 0; i < fields.length; ++i)
    if(fields[i][1] == column)
      count += 1

  return count
}
