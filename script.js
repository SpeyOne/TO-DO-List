window.addEventListener('load', () => {
  const form = document.querySelector("#new-task-form");
  const input = document.querySelector("#new-task-input");
  const list_el = document.querySelector("#tasks");

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const task = input.value;
    
    

    if (!task) {
      alert("Заполните поле содержания задачи");
      return;
    }

    const task_el = document.createElement("div");
    task_el.classList.add("task");


    const task_content_el = document.createElement("div");
    task_content_el.classList.add("content");

    task_el.appendChild(task_content_el);

    const task_input_el = document.createElement ("input");
    task_input_el.classList.add("text"); 
    task_input_el.type = "text";
    task_input_el.value = task;
    task_input_el.setAttribute("readonly", "readonly");

    task_content_el.appendChild(task_input_el);

    const task_actions_el = document.createElement("div");
    task_actions_el.classList.add("actions");

    const task_edit_el = document.createElement("button");
    task_edit_el.classList.add("edit");
    task_edit_el.innerHTML = "Редактировать";

    const task_delete_el = document.createElement("button");
    task_delete_el.classList.add("delete");
    task_delete_el.innerHTML = "Удалить";

    task_actions_el.appendChild(task_edit_el);
    task_actions_el.appendChild(task_delete_el);

    task_el.appendChild(task_actions_el);

    list_el.appendChild(task_el);

    input.value = "";

    task_edit_el.addEventListener('click', () => {
      if (task_edit_el.innerText.toLowerCase() == "редактировать") {
        task_input_el.removeAttribute("readonly");
        task_input_el.focus();
        task_edit_el.innerText = "Сохранить";
      } else {
        task_input_el.setAttribute("readonly", "readonly");
        task_edit_el.innerText = "Редактировать";
      }

      $('list_el').on('click', function(event) {
        $(this).toggleClass('complete');
      });

    });

    task_delete_el.addEventListener('click', () => {
      list_el.removeChild(task_el);
    });   

  });
});








/*let list = document.querySelector('.todo-list');
let input = document.querySelector('.todo-input');
let form = document.querySelector('.todo-form');
let priority = document.querySelector('.todo-priority');

priority.onclick = function () {
  priority.classList.toggle('is-important');
  if (priority.classList.contains('is-important')) {
    priority.textContent = 'Важная задача';
  } else {
    priority.textContent = 'Обычная задача';
  }
};

form.onsubmit = function (evt) {
  evt.preventDefault();

  // Создаём новую задачу - элемент li
  let newTask = document.createElement('li');

  // Берём текст задачи из поля ввода input
  newTask.textContent = input.value;

  // Проверяем, есть ли у переключателя priority класс is-important
	if (priority.classList.contains('is-important')) {
    // Если класс есть, добавляем задаче класс is-important
    newTask.classList.add('is-important');
  }

  // Добавляем новую задачу в конец списка list
  list.append(newTask);

  // Очищаем поле ввода input
  input.value = '';
};
*/