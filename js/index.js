const fetchCategory = () =>{
    fetch("https://openapi.programming-hero.com/api/news/categories")
    .then(res => res.json())
    .then(data =>displayCategory(data.data))
}

const displayCategory = (data) =>{
    console.log(data)
    const categoriesContainer = document.getElementById('category-container');
    data.news_category.forEach(singleCategory => {
        console.log(singleCategory)
        categoriesContainer.innerHTML += `
        <a class="navbar-brand" href="">${singleCategory?.category_name}</a>
        `
        
    });

}

