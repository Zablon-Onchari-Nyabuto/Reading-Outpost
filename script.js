const apiUrl = "http://localhost:3000/books";

// get book details
function getBookDetails(id) {
  fetch(`${apiUrl}/${id}`)
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("book-name").innerText = data.name;
      document.getElementById("book-image").src = data.image_url;
      document.getElementById("book-description").innerHTML = data.description;
      document.getElementById("review-list").innerHTML = data.reviews
        .map(
          (review) => `<li>
            ${review}
            </li>`
        )
        .join("");
    });
}
getBookDetails();

// To load the first book in the database
function getBooks() {
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("book-list").innerHTML = data
        .map(
          (book) => `<li onClick="getBookDetails(${book.id})">${book.name}</li>`
        )
        .join("");
    });
}
document.addEventListener("DOMContentLoaded", () => {
  getBooks();
  getBookDetails(1);

  // add a new review on submission
  document.getElementById("review-form").addEventListener("submit", (e) => {
    e.preventDefault();
    document.getElementById("review-list").innerHTML += `<li>
    ${document.getElementById("review").value}
    </li>`;
  });

  // update the book description on the website
  document.getElementById("description-form").addEventListener("submit", (evt) => {
      evt.preventDefault();
     
      form.reset();
    });
});

