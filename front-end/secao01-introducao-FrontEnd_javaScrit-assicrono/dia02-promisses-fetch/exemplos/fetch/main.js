fetch("https://api.goprogram.ai/inspiration")
.then((response) => response.json())
.then((data) => console.log(data))
.catch((error) => console.log(error.message));