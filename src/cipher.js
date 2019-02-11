window.cipher = {
  encode: function (offset,string) {
    var result = [];
    //Enconde Function
    for (var i = 0; i < string.length; i++) {
      var c = string.charCodeAt(i);
      //Uppercase encoding
      if (65 <= c && c <=  90) {
        result = result + String.fromCharCode((c - 65 + offset) % 26 + 65);
      }
      //Lowercase encoding
      else if (97 <= c && c <= 122) {
        result = result + String.fromCharCode((c - 97 + offset) % 26 + 97);
      }
    }
    return result;
  }, //Separate functions with a single comma

  decode: function (offset,string) {
    var result = [];
    //Decode Function
    for (var i = 0; i < string.length; i++) {
      var c = string.charCodeAt(i);
      //Uppercase decoding
      if (65 <= c && c <=  90) {
        result = result + String.fromCharCode((c + 65 - offset) % 26 + 65);
      }
      //Lowercase decoding
      else if (97 <= c && c <= 122) {
        result = result + String.fromCharCode((c + 59 - offset) % 26 + 97);
      }
    }
    return result;
  }
};
