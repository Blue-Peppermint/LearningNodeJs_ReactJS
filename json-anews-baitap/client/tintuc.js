const categoriesAPI = "http://localhost:3001/categories";
const newsAPI = "http://localhost:3001/anews";

const categoriesDiv = $('.content-left.fl');
const newsDiv  = $('.main-content.items-new');


initCategories();
initRandomNews();


async function initCategories() {
    let categories = await getCategories();
    
    if (categories === null) {
        console.log('Not Start Database');
        return;
    }

    let categoriesHTML =  categories.map(category=>{
        return `
        <li><a href="danhmuc.html?catID=${category.id}">${category.name}</a></li>
        `;
    }).join('');

    categoriesDiv.children().next().html(categoriesHTML);
}


async function initRandomNews(){
    let news  = await getNews();

    if (news === null) {
        console.log('Not Start Database');
        return;
    }

    let randomNumbers = generateRandomNumbers(0, news.length-1);

    let newsHTML = randomNumbers.map(itemNumber =>{
        let newspaper =  news[itemNumber];
        return `
            <li>
                <h2>
                    <a href="chitiet.html?newsID=${newspaper.id}" title="">${newspaper.description}</a>
                </h2>
                <div class="item">
                    <p>${newspaper.detail}</p>
                <div class="clr"></div>
                </div>
            </li>    
        `;
    }).join('');

    newsDiv.children().html(newsHTML);
}




function generateRandomNumbers(x, y) {
    let result = [];
    let maxNumbers = Math.min(5, y - x + 1);
    while (result.length < maxNumbers) {
        let randomNumber = Math.floor(Math.random() * (y - x + 1)) + x;
        if (result.indexOf(randomNumber) === -1) result.push(randomNumber);
    }
    return result;
}



async function getNews() {
    try {
        let result = await axios(newsAPI);
        return result?.data;
    } catch (error) {
        console.error(error);
        return null;
    }
}


async function getCategories() {
    try {
        let result = await axios(categoriesAPI);
        return result?.data;
    } catch (error) {
        console.error(error);
        return null;
    }
}



// console.log(categoriesEle);

