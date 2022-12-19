let tasksDiv = document.querySelector(".tasks");
let input = document.querySelector(`.input`);
let add = document.querySelector(`.add`);
let tasks = [];

addEventListener("keypress", function () {
	input.focus();
});

// checking the local storage
if (localStorage.tasks) {
	tasks = JSON.parse(localStorage.tasks);
	tasks.forEach(function (taskObject) {
		let task = document.createElement("div");
		if (taskObject.completed === true) {
			task.classList.add("done");
		}

		createTaskContent(task, taskObject.title, taskObject.id);
	});
} 

//  adding new task
add.addEventListener("click", function (eve) {
	eve.preventDefault();
	input.value=input.value.trim()
	if (input.value && valueNotExists(input.value)) {
		let task = document.createElement("div");

		//  gives the task unique id
		createTaskContent(task, input.value, Date.now());

		tasks.push({
			id: task.getAttribute("data-id"),
			title: input.value,
			completed: false,
		});
		localStorage.tasks = JSON.stringify(tasks);
	}
	input.value = "";
});

//  check for the repeat of tasks
function valueNotExists(inputValue){
	let divs=document.querySelectorAll(`.task > div`)
	for(let taskDiv of divs){
		if (taskDiv.innerText === inputValue){
			let message = document.createElement(`div`);
			message.className = "message";

			// exits the message if we clicked out of it's container
			let exit=document.createElement(`div`);
			exit.onclick=function(){
				message.remove()
			}
			message.append(exit)
			
			let messageContainer = document.createElement(`div`);

			let text = document.createElement(`div`);
			text.append("This task exists.");
			messageContainer.append(text);
			message.append(messageContainer);
			tasksDiv.after(message);

			setTimeout(function(){
				message.remove();
			},1500)
			return false;
		}
	}
	return true;
}

function createTaskContent(task, taskData, taskId) {

	task.setAttribute("data-id", taskId);
	task.classList.add("task");
	let div = document.createElement("div");
	div.append(taskData);
	task.appendChild(div);

	let deleteBtn = document.createElement("button");
	deleteBtn.innerHTML = "Delete";


	// delete a task
	deleteBtn.addEventListener("click", function () {
		tasks = tasks.filter(
			(taskObject) => taskObject.id !== task.getAttribute("data-id")
		);
		tasksDiv.removeChild(task);
		localStorage.tasks = JSON.stringify(tasks);
	});

	task.appendChild(deleteBtn);

	// check for complete task
	task.addEventListener("click", function () {
		let done = task.classList.toggle("done");
		if (done) {
			tasks.forEach((taskObject) =>
				taskObject.id == task.getAttribute("data-id")
					? (taskObject.completed = true)
					: false
			);
		} else {
			tasks.forEach((taskObject) =>
				taskObject.id == task.getAttribute("data-id")
					? (taskObject.completed = false)
					: true
			);
		}
		localStorage.tasks = JSON.stringify(tasks);
	});

	tasksDiv.prepend(task);
}

let reset = document.createElement("button");
reset.classList.add("reset");
reset.innerHTML = "Reset";


reset.addEventListener("click", function (eve) {
	eve.preventDefault();
	if (tasks.length) {
		// create resetting pop-up message

		let message = document.createElement(`div`);
		message.className = "message";

		// exits the message if we clicked out of it's container
		let exit=document.createElement(`div`);
		exit.onclick=function(){
			message.remove()
		}
		message.append(exit)


		let messageContainer = document.createElement(`div`);

		let text = document.createElement(`div`);
		text.append("Remove ......");
		messageContainer.append(text);

		let all = document.createElement(`button`);
		all.className = "all";
		all.append("All !");
		all.addEventListener("click", () => {
			tasks = [];
			localStorage.removeItem("tasks");
			tasksDiv.innerHTML = "";
			message.remove();
		});
		messageContainer.append(all);
		
		let completed=document.createElement(`button`)
		completed.className="completed";
		completed.append("Completed");

		// remove completed tasks
		if(document.querySelectorAll(".tasks >.done").length){
			completed.addEventListener("click", () => {
				for(let complete of document.querySelectorAll(".tasks >.done"))
					complete.remove()

				tasks = tasks.filter((taskObject) => !taskObject.completed);
				localStorage.tasks = JSON.stringify(tasks);
				message.remove();
			});
		}else {
			completed.disabled="true"	
		}

		messageContainer.append(completed);

		


		let none = document.createElement(`button`);
		none.className = "none";
		none.append("None");
		none.addEventListener("click", () => {
			message.remove();
		});
		messageContainer.append(none);

		message.append(messageContainer);

		tasksDiv.after(message);
	}
});
// changed the order in css to give enter button the ability to press submit not reset
input.parentElement.append(reset);
