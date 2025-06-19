let myMember = new MemberStore(1, "Huy","thuykhue");
console.log("myMember",myMember);

function getAll(list){
let html =``;
for(let i = 0; i < list.length;i++){
   
    let member = list[i];
    html += 
    `
    <tr>
    <td>${member.id}</td>
    <td>${member.name}</td>
    <td>${member.address}</td>
    <td>${member.bod}</td>
    <td>${member.money}</td>
    <td><button>Sửa</button></td>
    <td><button onclick = "DelMem(${member.id})">Xóa</button></td>
    </tr>
    
    `
}
document.getElementById("member_list").innerHTML =html;
}

    function addMembership() {
    let list = myMember.getlistMember();
    let id = list.length + 1;
    let name = document.getElementById("name").value;
    let address = document.getElementById("address").value;
    let bod = document.getElementById("bod").value;
    let money = document.getElementById("money").value;
    let p = new Member(id,name,address,bod,money);
    myMember.addMember(p);
    document.getElementById("member_info").reset();
    getAll(myMember.getlistMember());

}

function DelMem(id){
let isConFirm = confirm("bạn có chắc chắn");
if(isConFirm){
    myMember. deleteMember(id);

}
}
