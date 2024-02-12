const userChoose = document.querySelectorAll("img")
const answers = ["Ничья", "Вы","Компьютер"]
const items = new Map()
items.set(0,"Камень")
items.set(1,"Ножницы")
items.set(2,"Бумага")

userChoose.forEach((el) => {
    el.addEventListener("click", (e) =>{
        let computerChoose = Math.round(Math.random()*1000%2)
        alert(`Победитель: ${answers[(computerChoose-e.target.dataset.id+3) %3]}.
        Вы выбрали: ${items.get(parseInt(e.target.dataset.id))}.
        Компьютер выбрал: ${items.get(parseInt(computerChoose))}.`)
        console.log(computerChoose);
    })
})