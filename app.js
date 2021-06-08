const routes = {
    '/login': { title: 'Login', templateId: 'login' },
    '/dashboard': {title: 'Dashboard', templateId: 'dashboard', message: 'Dashboard is shown' },
  };

  function navigate(path) {
    window.history.pushState({}, path, path);
    updateRoute();
  }

function updateRoute() {
    const path = window.location.pathname;
    const route = routes[path];
  
    if (!route) {
        return navigate('/login');
    }
    if (route.templateId === "dashboard") {
        console.log(route.message);
      }

      document.title = route.title;
      console.log("Document title: " + document.title);

    const template = document.getElementById(route.templateId);
    const view = template.content.cloneNode(true);
    const app = document.getElementById('app');
    app.innerHTML = '';
    app.appendChild(view);
  }

  window.onpopstate = () => updateRoute();
updateRoute();

  function onLinkClick(event) {
    event.preventDefault();
    navigate(event.target.href);
  }