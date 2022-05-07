/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
  let str1 = [];
  let str2 = [];
  for (var i = 0; i < s.length; i++) {
    if (s[i] === '#') {
      str1.pop();
    } else {
      str1.push(s[i]);
    }
  }
  for (var i = 0; i < t.length; i++) {
    if (t[i] === '#') {
      str2.pop();
    } else {
      str2.push(t[i]);
    }
  }
  return String(str1) === String(str2);
    
};