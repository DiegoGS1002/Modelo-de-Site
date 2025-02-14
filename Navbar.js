document.addEventListener('DOMContentLoaded', () => {
    const navContent = document.getElementById('nav-content');
    const user = JSON.parse(localStorage.getItem('user'));

    if (user) {
      navContent.innerHTML = `
        <div class="avatar">
          <img src="${user.photoUrl}" alt="Profile" />
          <span>${user.name}</span>
          <button class="outline" onclick="logout()">Logout</button>
        </div>
      `;
    } else {
      navContent.innerHTML = `
        <div class="nav-buttons">
          <button class="outline" onclick="window.location.href='/login'">Entrar</button>
          <button onclick="window.location.href='/signup'">Cadastrar</button>
        </div>
      `;
    }
  });

  function logout() {
    localStorage.removeItem('user');
    window.location.reload();
  }
