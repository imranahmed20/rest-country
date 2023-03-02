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
    const allNewsContainer = document.getElementById('all-news');
    allNewsContainer.textContent = '';
    data.forEach(allNews => {
        const { _id } = allNews;
        const newDiv = document.createElement('div');
        newDiv.classList.add('col');
        newDiv.innerHTML = `
        <div class="col">
        <div class="card h-100">
          <img src="${allNews.image_url}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${allNews.title}</h5>
            <p class="card-text">${allNews.details.slice(0, 200)}</p>
            <button  class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="showNewsDetail('${_id}')">Show more</button>
          </div>
          <div class="card-footer d-flex justify-content-around align-items-center">     
             <div class="d-flex align-items-center">
             <img src="${allNews.author.img}" class="img-fluid rounded-circle" alt="..." height= "40" width= "40">
             <div class="ms-2">
             <p class="m-0 p-0">${allNews.author.name}</p>
             <p class="m-0 p-0">${allNews.author.published_date}</p></div>       
             </div>
             <div class="d-flex align-items-center">
             <i class="fas fa-eye"></i>
             <p class="m-0 p-0">${allNews.total_view}</p>
             </div>
             <div>
              <i class="fa-solid fa-star-half-stroke"></i>
              <i class="fa-regular fa-star"></i>
              <i class="fa-regular fa-star"></i>
             </div>
         </div>
        </div>
      </div>
        
        `;
        allNewsContainer.appendChild(newDiv)
    })
}


const showNewsDetail = news_id => {
    const url = `https://openapi.programming-hero.com/api/news/${news_id}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayNewsDetail(data.data))
}

const displayNewsDetail = (newsDetail) => {
    console.log(newsDetail)
    const { _id, title, image_url, details, author, total_view } = newsDetail;
    const modelTitle = document.getElementById('exampleModalLabel')
    modelTitle.innerHTML = `
    <p>Imran</p>
    
    `;
    document.getElementById('model-detail').innerHTML = `    
       
    `

}