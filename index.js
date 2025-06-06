const validateUser = async (email) => {
  try {
    const result = await fetch(
      `https://wallet-app-api-mp-16500a81b5f4.herokuapp.com/users?email=${email}`
    );
    const user = await result.json();
    return user;
  } catch (error) {
    return { error };
  }
};

const onClickLogin = async () => {
  const email = document.getElementById("input-email").value;
  if (email.length < 5 || !email.includes("@")) {
    alert("Email inválido!");
    return;
  }

  const result = await validateUser(email);
  if (result.error) {
    alert("Falha ao validar o e-mail.");
    return;
  }
  localStorage.setItem("@WalletApp:userEmail", result.email);
  localStorage.setItem("@WalletApp:userName", result.name);
  localStorage.setItem("@WalletApp:userId", result.id);
  window.location.href = "./src/pages/home/index.html";
};
