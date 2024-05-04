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
const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Configuração do multer para salvar os arquivos na pasta "repository"
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'repository');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});

const upload = multer({ storage: storage });

// Rota para lidar com o upload de arquivos
app.post('/upload', upload.single('fileInput'), (req, res) => {
    res.send('Arquivo enviado com sucesso!');
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

