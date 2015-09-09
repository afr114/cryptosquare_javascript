var encrypt = function(string) {
  var inputString = string.replace(/[\s\W]/g, "")
  var stringLength = inputString.length
  var columns = Math.ceil(Math.sqrt(stringLength))
  var rows = Math.ceil(stringLength/columns)
  // var inputStringLetters = inputString.split("")
  var codifiedString = ""
  var startPoint = 0
  var ogColumns = columns


  for(var index = 0; index <= rows; index += 1) {
    if (index === rows) {
      codifiedString += inputString.slice(startPoint, -1)
    } else {
      codifiedString += inputString.slice(startPoint, columns) + " "
      startPoint = columns
      columns += ogColumns
    }
  }
  codifiedString = codifiedString.trimRight()

  var codifiedStringWords = codifiedString.split(" ")

  var completedString = ""

  for (var letters = 0; letters <= ogColumns; letters += 1) {

    for (var words = 0; (words < codifiedStringWords.length); words += 1) {
      completedString += codifiedStringWords[words][letters]
    }
  }
  completedString = completedString.replace(/undefined/g, "")

  var totallyCompletedString = ""

  index=0
  var start = 0
  var end = 5

  for(var index = 0; index <= ogColumns; index += 1) {
    if (index === rows) {
      totallyCompletedString += completedString.slice(start, -1)
    } else {
      totallyCompletedString += completedString.slice(start, end) + " "
      start = end
      end += 5
    }
  }

  totallyCompletedString = totallyCompletedString.trimRight()
  return totallyCompletedString
}

$(document).ready(function(){
  $("form#encrypt").submit(function(event){
    var string = $("input#phrase").val()
    var result = encrypt(string)

    $(".encrypt-result").text(result);

    $("#result").show();
    event.preventDefault();
  })
})
