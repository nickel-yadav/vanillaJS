let btns = document.querySelectorAll('.tab-btn');
let about = document.querySelector('.about');
let articles = document.querySelectorAll('.content');

about.addEventListener('click', function(e) {
    const id = e.target.dataset.id;
    if (id) {
        // remove class active from all the buttons
        btns.forEach(function(btn) {
            btn.classList.remove('active');
            // adding the class to the currently clicked button
            e.target.classList.add('active');
        })

        //hide other articles
        articles.forEach(function(article){
            article.classList.remove('active');
        });

        const element = document.getElementById(id);
        element.classList.add('active');
    }
});