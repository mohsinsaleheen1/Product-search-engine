const search = () => {
    const searchbox = document.getElementById("search-item").value.toUpperCase();
    const sroreitems = document.getElementById("product-list");
    const product = document.querySelectorAll(".product");
    const pname = document.getElementsByTagName("h2");
    let para = document.getElementById("para");
    for(let i = 0; i < pname.length; i++){
        let match = product[i].getElementsByTagName('h2')[0];
        console.log(match)
        if(match){
            let textvalue = match.textContent || match.innerHTML
            if(textvalue.toUpperCase().indexOf(searchbox)> -1){
                product[i].style.display = "";
                para.classList.remove("show");
                para.classList.add('hide');
            }else{
                product[i].style.display = "none";
                para.classList.remove("hide");
                para.classList.add('show');
            }
        }
    }
}