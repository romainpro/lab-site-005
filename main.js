let mainBar = document.getElementById("mainNav")





function createNavBar (){
    let ul = document.createElement("ul");
    mainBar.appendChild(ul);
        for (let i = 0; i < 4 ; i++){
            let li = document.createElement("li");
            ul.appendChild(li);
            // console.log(i);
        }
    

}

createNavBar()
