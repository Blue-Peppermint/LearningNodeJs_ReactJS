const categoriesAPI = "http://localhost:3001/categories";
const newsAPI = "http://localhost:3001/anews";

const categoriesDiv = $('.content-left.fl');
const newsDiv  = $('.main-content.items-new');



const categoryID = getParamVal('catID');

initCategories();
initCategory(categoryID);
initRandomNews(categoryID);


async function initRandomNews(categoryID){
    
    let news  = await getNews();

    if (news === null) {
        console.log('Not Start Database');
        return;
    }

    news = news.filter(newspaper=>{
        return newspaper.catId == categoryID;
    })

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

async function initCategory(categoryID){
    let category = await getCategory(categoryID);

    newsDiv.before(`<h3>Tin tức :: ${category.name}</h3>`);
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


function getParamVal(key) {
    // Get the query string from the URL
    let query = $(location).attr('search');

    // Remove the '?' character from the beginning of the query string
    query = query.substring(1);

    // Split the query string by '&' to get an array of key-value pairs
    let params = query.split('&');

    // Find the key-value pair with the key 'id'
    let keyIDPair = params.find(item => item.startsWith(`${key}=`));

    // Split the key-value pair by '=' to get the value of 'id'
    let paramVal = keyIDPair.split('=')[1];

    return paramVal;
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

async function getCategory(categoryID) {
    try {
        let result = await axios(`${categoriesAPI}/${categoryID}`);
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

