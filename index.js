const textarea = document.getElementById("1");

const btn = document.getElementById("btn");

btn.addEventListener('click', function handleButtonClick() {
  console.log(textarea.value);

  textarea.value = '';
});
