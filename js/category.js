const categories = document.querySelectorAll(".category-btn");
const items = document.querySelectorAll(".category_item");
categories.forEach((category)=> {
    category.addEventListener('click',(e)=> {
        const filter = e.target.dataset.category;
        
        items.forEach((item) => {
            if (filter === 'all' || filter === item.dataset.type) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }
            if (filter == null) {
                return;
            }
        })
        const activeBtn = document.querySelector('.category_selected');
        activeBtn.classList.remove('category_selected');
        e.target.classList.add('category_selected');
    })

});