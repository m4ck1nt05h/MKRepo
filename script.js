document.getElementById("passwordForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    var password = document.getElementById("password").value;

    if (password === "M4CK") {
        document.getElementById("passwordForm").reset(); // Clear password field
        document.getElementById("passwordError").classList.add("hidden"); // Hide password error message
        // Here you can add logic to redirect to the main repository page
        window.location.href = "repository.html"; // Redirect to main repository page
    } else {
        document.getElementById("passwordError").classList.remove("hidden"); // Show password error message
    }
});
// Função para lidar com o envio do formulário de upload
document.getElementById("uploadForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevenir o envio padrão do formulário

    var fileInput = document.getElementById("fileInput");
    var file = fileInput.files[0];

    // Criar um novo elemento <a> para o link de download do arquivo
    var link = document.createElement("a");
    link.setAttribute("href", URL.createObjectURL(file));
    link.setAttribute("download", file.name);
    link.innerText = file.name;

    // Adicionar o link à lista de arquivos
    document.getElementById("fileList").appendChild(link);
});
