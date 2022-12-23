var array=localStorage.getItem("new_pro")? JSON.parse(localStorage.getItem("new_pro")):[]
function Get_info(){
    var n_pro=document.getElementById("name").value
    var img_pro=document.getElementById("img").value
    var pri_pro=document.getElementById("gia").value

    var mang={
        N_pro:n_pro,
        Img_pro:img_pro,
        Pri_pro:pri_pro
    }

    if(n_pro!="" && img_pro!=""&& pri_pro!=""){
        array.push(mang)
        localStorage.setItem("new_pro",JSON.stringify(array))
    }
  
}

function Display(){
    var array=localStorage.getItem("new_pro")? JSON.parse(localStorage.getItem("new_pro")):[]

    var table=`
    <tr>
        <th>ID_pro</th>
        <th>Name Pro</th>
        <th>Imege</th>
        <th>Price</th>
        <th>Action</th>
    </tr>
        `
    array.map((value,index)=>{
        table+=`
        <tr>
        <td>${index+1}</td>
        <td>${value.N_pro}</td>
        <td><img src="${value.Img_pro}" alt="" height="70" width="60"></td>
        <td>${value.Pri_pro}</td>
        <td><button onclick="Xoa(${index})">Delete</button> <button onclick="Them(${index})">Edit</button></td>
    </tr>
        `
        document.getElementById("table").innerHTML=table
    })
}

function Add(){
    Get_info()
    Display()
}

function Them(index){
    var array=localStorage.getItem("new_pro")? JSON.parse(localStorage.getItem("new_pro")):[]
    var index=document.getElementById("index").value=index
    document.getElementById("name").value=array[index].N_pro
    document.getElementById("img").value=array[index].Img_pro
    document.getElementById("gia").value=array[index].Pri_pro
}

function list_product(){
    var array=localStorage.getItem("new_pro")? JSON.parse(localStorage.getItem("new_pro")):[]
    for(var i=0;i<array.length;i++){
        demo=`
        <div class="col-3">
        <div class="card" style="width: 18rem;">
        <img class="card-img-top" src="${array[i].Img_pro}"  alt="Card image cap">
        <div class="card-body">
            <h5 class="card-title">${array[i].N_pro}</h5>
            <p class="card-text">${array[i].Pri_pro}</p>
            <a href="#" class="btn btn-primary">Mua ngay</a>
        </div>
        </div> 
        </div>`
        document.getElementById("lis_pro").innerHTML+=demo;  
    }
     
}
      


