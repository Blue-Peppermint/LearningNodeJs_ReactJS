const categoriesAPI = "http://localhost:3001/categories";
const exercisesAPI = "http://localhost:3001/exercises";

async function initExercises(catergoryID = '0') {

    let exercises = await getExercises(catergoryID);

    if (exercises === null) {
        console.log('Not Start Database');
        return;
    }

    let randomNumbers = generateRandomNumbers(0, exercises.length - 1);

    let exercisesHTML = randomNumbers.map(itemNumber => {
        let exercise = exercises[itemNumber];
        return `
        <div class="item">
            <h2><a href="detail.html?id=${exercise.id}" title="">${exercise.title}</a></h2>
            <img src="${exercise.img}" alt="" width="585" height="156" />
            <div class="clr"></div>
            <p>${exercise.description}</p>
          </div>
        `;
    }).join('\r\n');

    $('.left').html(exercisesHTML);
}


async function initCategories() {
    let categories = await getCategories();

    if (categories === null) {
        console.log('Not Start Database');
        return;
    }

    let categoriesHTML =  categories.map(category=>{
        return `
        <li><a href="cat.html?id=${category.id}">${category.name}</a></li>
        `;
    }).join('');

    $('#categories').html(categoriesHTML);
}

async function initCategory(categoryID){
    await initExercises(categoryID);

    let category = await getCategory(categoryID);
    category = category[0];
    $('.left').before(`<h1>${category.name}</h1>`  );
}

async function initDetail(exerciseID){
    let exercise = await getExercise(exerciseID);

    exercise = exercise[0];

    $('.left').html(`
    <h1>${exercise.title}</h1>
    <div class="item-detail">
        <p>${exercise.detail}</p>
     </div>
    `  );
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

async function getExercises(catId = '0') {
    try {
        let result;
        if (catId === '0') {
            result = await axios(exercisesAPI);
        } else {
            result = await axios(`${exercisesAPI}?catId=${catId}`);
        }
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


async function getExercise(id) {
    try {
        let result = await axios(`${exercisesAPI}?id=${id}`);
        return result?.data;
    } catch (error) {
        console.error(error);
        return null;
    }
}


async function getCategory(categoryID) {
    try {
        let result = await axios(`${categoriesAPI}?id=${categoryID}`);
        return result?.data;
    } catch (error) {
        console.error(error);
        return null;
    }
}



