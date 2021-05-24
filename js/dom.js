let list = document.querySelector('ul')
let addInput = document.querySelector('.add-input')

let database =[
	{text: "nonushta qilish", time: "07.30"},
	{text: "dars qilish", time: "10.30"},
	{text: "kir yuvish", time: "12.30"},
	{text: "kitob o'qish", time: "19.30"}
]


// console.log(sorted)

function renderer (data) {
	list.innerHTML = null
	let sorted = data.sort(function(a, b) {
	    let textA = a.text.toUpperCase()
	    let textB = b.text.toUpperCase()
	    return (textA < textB) ? -1 : (textA > textB) ? 1 : 0
	})
	
	for (let element of sorted) {
		let li = document.createElement('li')
		let todoText = document.createElement('span')
		let time = document.createElement('time')
		let wrapper = document.createElement('div')
		let colorInput = document.createElement('input')
		let button = document.createElement('button')
		
		li.classList.add('item')
		todoText.textContent = element.text
		time.textContent = element.time
		colorInput.setAttribute('type', 'color')
		button.textContent = 'X'
		
		wrapper.appendChild(colorInput)
		wrapper.appendChild(button)
		
		li.appendChild(todoText)
		li.appendChild(time)
		li.appendChild(wrapper)
		list.appendChild(li)
	
		button.addEventListener('click', (hodisa) => {
			li.remove()
		})
	
		colorInput.addEventListener('change', (hodisa) => {
			li.style.backgroundColor = colorInput.value
		})
	}
}

renderer(database)

addInput.addEventListener('keyup', (hodisa) => {
	if(hodisa.keyCode === 13 && addInput.value != "") {
		let date = new Date()
		let text = addInput.value
		let time = date.getHours() + ":" + date.getMinutes()
		let newData = { text, time }
		database.push(newData)
		renderer(database)

		addInput.value = null
	}
})