window.cipher = {
  encode: function (offset,string) {
    var result = [];
    for (var i = 0; i < string.length; i++) { //Enconde Function
      var c = string.charCodeAt(i);
      if (65 <= c && c <=  90) { //Uppercase encoding
        result = result + String.fromCharCode((c - 65 + offset) % 26 + 65);
      }
      else if (97 <= c && c <= 122) { //Lowercase encoding
        result = result + String.fromCharCode((c - 97 + offset) % 26 + 97);
      }
    }
    return result;
  }, //Separate functions with a single comma

  decode: function (offset,string) {
    var result = [];
    for (var i = 0; i < string.length; i++) { //Decode Function
      var c = string.charCodeAt(i);
      if (65 <= c && c <=  90) { //Uppercase decoding
        result = result + String.fromCharCode((c + 65 - offset) % 26 + 65);
      }
      else if (97 <= c && c <= 122) { //Lowercase decoding
        result = result + String.fromCharCode((c + 59 - offset) % 26 + 97);
      }
    }
    return result;
  }
};
