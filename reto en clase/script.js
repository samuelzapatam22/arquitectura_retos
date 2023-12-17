addTaskForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const city = document.getElementById("city").value;

    // Validar que se ingresó un título antes de agregar la tarea
    if (city.trim() !== "") {
      await searchCity(city);
      addTaskForm.reset(); // Limpiar el formulario
    } else {
      alert("Por favor, ingrese una ciudad.");
    }
  });

  async function searchCity(city) {
    const response = await fetch("/tasks", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, description }),
    });

    const data = await response.json();
    alert(data.message);
  }