const headerContent = [
    'ID',
    'Tên hoa',
    'Loại hoa',
    'Hình ảnh'
];


var flowerID = 0;

function Flower(name, type, img){
    this.id = ++flowerID;
    this.name = name;
    this.type = type;
    this.img = img;
}

const flowers =[];

flowers.push(new Flower('Hoa Phong Lan', 'Khai trương', 'images/hoa1.jpg'));
flowers.push(new Flower('Hoa tỷ muội', 'Khai trương', 'images/hoa2.jpg'));
flowers.push(new Flower('Hoa Violet', 'Hoa kỷ niệm', 'images/hoa3.jpg'));
flowers.push(new Flower('Hoa thủy tiên', 'Hoa tình yêu', 'images/hoa4.jpg'));
flowers.push(new Flower('Hoa cẩm chướng', 'Hoa hạnh phúc', 'images/hoa5.jpg'));


let flowerHTMLHeaderContent = headerContent.map((header)=>{
    return `<th>${header}</th>`;
}).join('\r\n');


flowerHTMLHeaderContent = `<thead><tr>${flowerHTMLHeaderContent}</tr></thead>`;


let flowerHTMLBodyContent = flowers.map((flower)=>{
    return `
    <tr>
        <td>${flower.id}</td>
        <td><a href="#" title="${flower.name}">${flower.name}</a></td>
        <td>${flower.type}</td>
        <td><img src="${flower.img}" alt="${flower.img.split('/').pop()}" /></td>
    </tr>
    `;
});

flowerHTMLBodyContent = `<tbody>${flowerHTMLBodyContent}</tbody>`;

let pageTitleEle = document.querySelector('h3');

pageTitleEle.innerText = 'Danh sách hoa';

let flowerContentTable = document.querySelector('table');

flowerContentTable.innerHTML = flowerHTMLHeaderContent + flowerHTMLBodyContent;