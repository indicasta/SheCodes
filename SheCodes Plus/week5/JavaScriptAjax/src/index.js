//Challenge2
function showcomments(response) {
  console.log(response.data);
}
//Challenge3
function showfirstCommentEmail(response) {
  console.log(response.data[0].email);
}
let apiUrl = "https://jsonplaceholder.typicode.com/comments";
//Challenge2
axios.get(apiUrl).then(showcomments);
//Challenge3
axios.get(apiUrl).then(showfirstCommentEmail);
