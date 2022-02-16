function list() {
  return arguments;
}
const t = list`a${1}b${2}c${3}`;
console.log(t); // -> [['a','b','c',''],1,2,3]

function htmlEscape(strings, ...values) {
  let result = strings[0];
  for (let i = 0; i < values.length; i++) {
    result += escape(values[i]) + strings[i + 1];
  }
  return result;
  function escape(s) {
    return s
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/'/g, "&#039;")
      .replace(/"/g, "&quot;")
      .replace(/`/g, "&#096;");
  }
}
const userinput = "<script>alert('test');</script>";
const message = htmlEscape`<p>${userinput}</p>`;
console.log(message);
