const fetchCategory = () => {
    fetch("https://openapi.programming-hero.com/api/news/categories")
        .then(res => res.json())
        .then(data => displayCategory(data.data))
}

const displayCategory = (data) => {
    const categoriesContainer = document.getElementById('category-container');
    data.news_category.forEach(singleCategory => {
        // console.log(singleCategory)
            categoriesContainer.innerHTML += 
            `
        <a  class="navbar-brand" href="#"   onclick="loadCategoryNews('${singleCategory.category_id}', '${singleCategory?.category_name}')">${singleCategory?.category_name}</a>
        `;
    // -------------
    // Another option
    // -------------------
        // const linkContainer = document.createElement('p');
        // linkContainer.innerHTML = `
        // <a onclick="loadCategoryNews('${singleCategory.category_id}', '${singleCategory?.category_name}')" class="navbar-brand" href="">${singleCategory?.category_name}</a>
        // `
        // categoriesContainer.appendChild(linkContainer)

    });

}


const loadCategoryNews = (category_id, category_name) => {
    fetch(`https://openapi.programming-hero.com/api/news/category/${category_id}`)
        .then(res => res.json())
        .then(data => displayCategoryNews(data.data, category_name))
}

const displayCategoryNews = (data, category_name) => {
    console.log(data)
    document.getElementById('news-count').innerText = data.length;
    document.getElementById('category-name').innerText = category_name;
}
