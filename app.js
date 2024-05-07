const inpunts = document.querySelectorAll('input')

function serializeForm(formNode) {
  const { elements } = formNode;
  const data = Array.from(elements)
    .filter((item) => !!item.name)
    .map((element) => {
      const { name, value } = element;

      return { name, value };
    });

  console.log(data);

  inpunts.forEach((item) => {
    item.value = ''
  })
}

function handleFormSubmit(event) {
  event.preventDefault();
  serializeForm(applicantForm);
}

const applicantForm = document.getElementById("form");
applicantForm.addEventListener("submit", handleFormSubmit);
