const categoriesAPI = "http://localhost:3001/categories";
const newsAPI = "http://localhost:3001/anews";

const categoriesDiv = $('.content-left.fl');
const newsDiv  = $('.content-right.fr');



const newsID = getParamVal('newsID');

initCategories();
initNews(newsID);

async function initNews(newsID){
    let news = await getNews(newsID);

    if (news === null) {
        console.log('Not Start Database');
        return;
    }

    newsDiv.html(`
    <h3>${news.description}</h3>
    <div class="main-content">
        <p>${news.detail}</p>
    </div>
    `);
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

async function getNews(newsID) {
    try {
        let result = await axios(`${newsAPI}/${newsID}`);
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

