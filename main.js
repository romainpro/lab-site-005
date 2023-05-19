let mainBar = document.getElementById("mainNav")





function createNavBar (){
    let ul = document.createElement("ul");
    mainBar.appendChild(ul);
        for (let i = 0; i < 4 ; i++){
            let li = document.createElement("li");
            let a= document.createElement("a");
            a.href="#"
            a.textContent="page "+(i+1);
            ul.appendChild(li);
            li.appendChild(a);
            // console.log(i);
        }
    

}

createNavBar()
