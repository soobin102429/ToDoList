document.getElementById('btnAdd').addEventListener('click',addList);//추가
document.getElementById('btnDelAll').addEventListener('click',delAllEle);//전체삭제
document.getElementById('btnDelLast').addEventListener('click', delLastEle);//마지막요소삭
document.getElementById('DeleteSel').addEventListener('click',delSelected);//선택삭제

function addList(){
    var contents=document.querySelector('.text-basic');
    if (!contents.value){
        alert('내용을 입력해주세요.');
        contents.focus();
        return false;
    }
    var tr=document.createElement('tr');
    var input=document.createElement('input');
    input.setAttribute('type', 'checkbox');
    input.setAttribute('class', 'btn-chk');

    var td01=document.createElement('td');
    td01.appendChild(input);
    tr.appendChild(td01);

    var td02=document.createElement('td');
    td02.innerHTML=contents.value;
    tr.appendChild(td02);
    document.getElementById('listBody').appendChild(tr);
    contents.value='';
    contents.focus();
}
function delAllEle(){//전체삭제
    // var list=document.getElementById('listBody');
    // while(list.firstChild){
    //     list.removeChild(list.firstChild);
    // }
    //마지막 항목삭제
    var list=document.getElementById('listBody');
    var listChild=list.children;
    for(var i=0; i<listChild.length; i++){
        list.removeChild(listChild[i])
        i--;
    }
}
function delLastEle(){
    var body=document.getElementById('listBody');
    var list=document.querySelectorAll('#listBody>tr');
    if(list.length>0){
        var liLen=list.length-1;
        body.removeChild(list[liLen]);
    }else{
        alert('삭제할 항목이 없습니다.')
        return false;
    }
    
}
    function delSelected(){
        var body=document.getElementById('listBody');
        var chkbox=document.querySelectorAll('#listBody .btn-chk');
        for(var i in chkbox){
            if(chkbox[i].nodeType==1&&chkbox[i].checked==true){
                body.removeChild(chkbox[i].parentNode.parentNode);
            }
        }
    }
