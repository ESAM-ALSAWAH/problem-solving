/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const fun=(str)=>{
  let arr = [];  
 for (var i = 0; i < str.length; i++) {
    if (str[i] === '#') arr.pop();
     else arr.push(str[i]);
  }
    return String(arr)
}
var backspaceCompare = function(s, t) {
  return fun(s) === fun(t);    
};