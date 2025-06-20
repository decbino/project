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
    <td><img src ="${member.img}" alt ="${member.name}"/></td>
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
    let img = document.getElementById("img").value;
    let money = document.getElementById("money").value;
    let p = new Member(id,name,address,bod,img,money);
    myMember.addMember(p);
    document.getElementById("member_info").reset();
    getAll(myMember.getlistMember());

}

function DelMem(id){
let isConFirm = confirm("bạn có chắc chắn");
if(isConFirm){
    myMember. deleteMember(id);
    getAll(myMember.getlistMember());

}
}

function login() {
    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;
    const users = JSON.parse(localStorage.getItem("users")) || [];
  
    const found = users.find(u => u.username === user && u.password === pass);
    if(user === "admin" && pass === "admin"){
        window.location.href = "index.html";
    }else if (found) {
      localStorage.setItem("loggedIn", "true");
      localStorage.setItem("currentUser", user);
      window.location.href = "index.html";
    } else {
      alert("Sai tài khoản hoặc mật khẩu!");
    }
  }
function logout() {
    localStorage.removeItem("loggedIn");
    window.location.href = "login.html";
  }

  function register() {
    const user = document.getElementById("user").value;
    const pass = document.getElementById("pass").value;

    if (!user || !pass) {
        alert("Vui lòng nhập đầy đủ thông tin");
        return;
    }

    let users = JSON.parse(localStorage.getItem("users")) || [];

    const existed = users.find(u => u.username === user);
    if (existed) {
        alert("Tài khoản đã tồn tại!");
        return;
    }

    users.push({ username: user, password: pass });
    localStorage.setItem("users", JSON.stringify(users));
    alert("Đăng ký thành công! Mời bạn đăng nhập.");
    window.location.href = "login.html";
}

function showRegisteredUsers() {
    let users = JSON.parse(localStorage.getItem("users")) || [];
  
    let html = `
      <h3>Danh sách tài khoản đã đăng ký:</h3>
      <table border="1">
        <tr>
          <th>STT</th>
          <th>Username</th>
          <th>Password</th>
        </tr>
    `;
  
    for (let i = 0; i < users.length; i++) {
      html += `
        <tr>
          <td>${i + 1}</td>
          <td>${users[i].username}</td>
          <td>${users[i].password}</td>
        </tr>
      `;
    }
  
    html += `</table>`;
    document.getElementById("user_list").innerHTML = html;
  }