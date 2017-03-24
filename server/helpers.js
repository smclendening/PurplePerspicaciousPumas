
var userAlreadySubmitted = function(username, responseArray) {
  var submitted = false;

  for (var i = 0; i < responseArray.length; i++) {
    if (responseArray[i][1] === username) {
      submitted = true;
    }
  }

  return submitted;
}

module.exports.userAlreadySubmitted = userAlreadySubmitted;