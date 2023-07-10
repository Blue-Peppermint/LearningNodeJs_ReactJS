/**
 * Bài tập 1: Viết chương trình mô phỏng từ điển Anh Việt
Tạo menu chương trình như sau:
        == TỪ ĐIỂN ANH VIỆT ==

        1. Nhập dữ liệu
        2. Xuất dữ liệu
        3. Dịch từ
        4. Thoát

Khi chọn 1: Nhập thông tin các từ (gồm 2 thuộc tính: từ tiếng Anh và nghĩa tiếng Việt) từ bàn phím.
Khi chọn 2: Hiển thị thông tin các từ đã nhập.
Khi chọn 3: Nhập vào một từ tiếng Anh bất kỳ, tìm kiếm trong từ điển, nếu có thì in nghĩa tiếng Việt của từ đó. Nếu không có thì in ra không tìm thấy.
Khi chọn 4: Thoát khỏi chương trình và in ra dòng chữ "Cảm ơn đã sử dụng từ điển!"
 * 
 * 
 */

menu();

function menu(){

    let myDic = [];


    
    do{

        let selection = Number(prompt(`
        == TỪ ĐIỂN ANH VIỆT ==

            1. Nhập dữ liệu
            2. Xuất dữ liệu
            3. Dịch từ
            4. Thoát

        Mời Bạn Nhập Lựa Chọn :
    `));

        switch(selection){
            case 1:
                inputNewWord(myDic);
                break;
            case 2:
                outPutDic(myDic);
                break;
            case 3:
                translate(myDic);
                break;
            case 4:
                return;
            default:
                alert(`Mời Bạn Nhập Lựa Chọn [1; 4] :`)
                break;
        }
    }while(true);

}


function inputNewWord(myDic){
    let english = prompt(`Nhập 1 Từ Tiếng Anh :`);
    let vietnamese = prompt(`Nhập Nghĩa Tiếng Việt Của Từ Vừa Rồi :`);

    let newWord = new Word(english, vietnamese);

    myDic.push(newWord);
}

function outPutDic (myDic){
    let dicStr = [];

    for(let i = 0; i < myDic.length; i ++){
        dicStr[i] = `${myDic[i].english} : ${myDic[i].vietnamese}`;
    }

    alert(dicStr.join('\r\n'));
}

function translate (myDic){
    let word = prompt(`Nhập 1 Từ Tiếng Anh Cần Tìm Trong Từ Điển :`);
    word = word.toUpperCase();
    
    let wordIndex = -1;

    for(let i = 0 ; i < myDic.length; i ++){
        if(myDic[i].english === word){
            wordIndex = i;
            break;
        }
    }

    if(wordIndex === -1){
        alert('Không tìm thấy');
    }else{
        alert(`Nghĩa Từ Vừa Nhập Là : ${myDic[wordIndex].vietnamese}`);
    }

}


function Word(english, vietnamese){
    this.english = english.toUpperCase();
    this.vietnamese = vietnamese.toUpperCase();
}