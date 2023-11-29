
function reviewButtonHandler() {
    let review = new Map();

    review.set("userName", prompt("Введите Ваше имя"));
    if (review.get("userName") == null) {
        return
    }
    review.set("reviewText", prompt("Напишите свой отзыв здесь"));
    if (review.get("reviewText") == null) {
        return
    }
    review.set("reviewDate", new Date().toLocaleString())
    addReview(review)
}

const addReview = review => {
    document.getElementsByClassName('reviews')[0].innerHTML += '<div class="review-text">\n' + 
        `<p><i><b>${review.get("userName")}</b> ${review.get("reviewDate")}</i></p>` +
        `<p>${review.get("reviewText")}</p>`
        ' </div > ';
}