let mainBar = document.getElementById("mainNav")
const iterationLink = 4;  /* const use for function  */




function createNavBar (){
    let ul = document.createElement("ul");
    mainBar.appendChild(ul);
        for (let i = 0; i < iterationLink ; i++){
            let li = document.createElement("li");
            let a= document.createElement("a");
            a.href="#page"+(i+1)+".htlm"
            a.textContent="page "+(i+1);
            ul.appendChild(li);
            li.appendChild(a);
            // console.log(i);
        }
    

}

createNavBar()
