lucide.createIcons();

const form = document.getElementById("loginForm");
const errorMessage = document.getElementById("errorMessage");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Validation simple
  if (!email || !password) {
    errorMessage.textContent = "Veuillez remplir tous les champs.";
    return;
  }

  try {
    // ⚠️ TON COLLEGUE VA CONNECTER CETTE PARTIE AU BACKEND
    const response = await fetch("http://localhost:8000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      throw new Error("Identifiants incorrects");
    }

    const data = await response.json();

    // Stocker le token
    localStorage.setItem("authToken", data.token);

    // Redirection
    window.location.href = "index.html";

  } catch (error) {
    errorMessage.textContent = "Email ou mot de passe incorrect.";
  }
});