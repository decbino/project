class MemberStore {
    id;
    name;
    address;
    listMember;
    constructor(id, name, address) {
        this.id = id;
        this.name = name;
        this.address = address;
        this.listMember = [];
    }


    addMember(member) {
        this.listMember.push(member);
    }
    getlistMember(){
        return this.listMember;

    }
    deleteMember(id){
        let index = -1;
        for(let i =0; i<this.listMember.length;i++){
            let p = this.listMember[i];
            if(p.id == id){
                index = i;
                break;
            }
        }
        if(index==-1){
            alert("không có sản phẩm này");
        }else{
            this.listMember.splice(index,1);
            getAll(myMember.getlistMember());
        }
        
}
}