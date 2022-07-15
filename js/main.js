
//DOM

document.getElementById("header").innerHTML=`
<div id="divHeader">
  <img id="miImg" src="./imagenes/gatoblanco.jpg" alt="" width="7%" style="border-radius: 35%;"> 
  <h1 style=font-size:3rem;>Mundo Gatuno</h1>
</div>
<nav id="nav-header">
    <a class="nav-header-item" href="./index.html">Inicio</a>
    <a class="nav-header-item" href="./razas.html">Razas</a>
    <a class="nav-header-item" href="./sucursales.html">Sucursales</a>
    <a class="nav-header-item" href="./registro.html">Registro</a>
    <a class="nav-header-item" href="./contacto.html">Contacto</a>
</nav>
`

document.getElementById("footer").innerHTML=`
<br>
        <p>Todos los derechos reservados 2022</p>
        <nav id="footer_nav">
            <a href="http://facebook.com" target="_blank">
                <i class="fa-brands fa-facebook"></i>
            </a>
            <a href="http://twitter.com" target="_blank">
                <i class="fa-brands fa-twitter"></i>
            </a>
            <a href="http://instagram.com" target="_blank">
                <i class="fa-brands fa-instagram"></i>
            </a>
            <a href="http://linkedin.com" target="_blank">
                <i class="fa-brands fa-linkedin"></i>
            </a>            
        </nav> 
`

function validarRegistro() {
  let fecha = document.forms["Formulario"]["birthdate"].value;
  let hoy = new Date();
  let cumpleanos = new Date(fecha);
  let edad = hoy.getFullYear() - cumpleanos.getFullYear();
  let mes = hoy.getMonth() - cumpleanos.getMonth();

  if (mes < 0 || (mes === 0 && hoy.getDate() < cumpleanos.getDate())) {
    edad--;
  }

  if (edad < 18) {
    document.getElementById("mensaje").innerHTML = `Debe ser mayor de edad`;
    return false;
  }
  if (edad > 110) {
    document.getElementById("mensaje").innerHTML = `Revise la edad, tiene mas de 110 anios!`;
    return false;
  }
  else {
    document.getElementById("mensaje").innerHTML = ``;
    return true;
  }

}



var razas_gatos = new Vue ({
    el: "#raza_gato",
    data: {
        razas:[
            {
                "nombre": "Abisinio",
                "imagen": "./imagenes/abisinio2.jpg",
                "descripcion": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum ducimus minima dolorum expedita autem iste. Repellat totam deserunt placeat facilis excepturi! Rerum amet molestias officiis est totam nemo dolorum animi? Ad molestias quae corrupti ut ipsa deleniti culpa quibusdam ratione animi id? Sapiente voluptatem accusantium? Dolorum natus officiis repellat atque et dolore qui. Aut eum dolorem dignissimos omnis architecto ullam"
              },
              {
                "nombre": "Americano Pelo Corto",
                "imagen": "./imagenes/americanshorthair2.jpg",
                "descripcion": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum ducimus minima dolorum expedita autem iste. Repellat totam deserunt placeat facilis excepturi! Rerum amet molestias officiis est totam nemo dolorum animi? Ad molestias quae corrupti ut ipsa deleniti culpa quibusdam ratione animi id? Sapiente voluptatem accusantium? Dolorum natus officiis repellat atque et dolore qui. Aut eum dolorem dignissimos omnis architecto ullam"
              },
              {
                "nombre": "Bengal",
                "imagen": "./imagenes/bengal2.jpg",
                "descripcion": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum ducimus minima dolorum expedita autem iste. Repellat totam deserunt placeat facilis excepturi! Rerum amet molestias officiis est totam nemo dolorum animi? Ad molestias quae corrupti ut ipsa deleniti culpa quibusdam ratione animi id? Sapiente voluptatem accusantium? Dolorum natus officiis repellat atque et dolore qui. Aut eum dolorem dignissimos omnis architecto ullam"
              },
              {
                "nombre": "Bosque de Noruega",
                "imagen": "./imagenes/bosquenoruega2.jpg",
                "descripcion": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum ducimus minima dolorum expedita autem iste. Repellat totam deserunt placeat facilis excepturi! Rerum amet molestias officiis est totam nemo dolorum animi? Ad molestias quae corrupti ut ipsa deleniti culpa quibusdam ratione animi id? Sapiente voluptatem accusantium? Dolorum natus officiis repellat atque et dolore qui. Aut eum dolorem dignissimos omnis architecto ullam"
              },
              {
                "nombre": "Himalayo",
                "imagen": "./imagenes/himalayo2.jpg",
                "descripcion": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum ducimus minima dolorum expedita autem iste. Repellat totam deserunt placeat facilis excepturi! Rerum amet molestias officiis est totam nemo dolorum animi? Ad molestias quae corrupti ut ipsa deleniti culpa quibusdam ratione animi id? Sapiente voluptatem accusantium? Dolorum natus officiis repellat atque et dolore qui. Aut eum dolorem dignissimos omnis architecto ullam"
              },
              {
                "nombre": "Maine Coon",
                "imagen": "./imagenes/mainecoon2.jpg",
                "descripcion": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum ducimus minima dolorum expedita autem iste. Repellat totam deserunt placeat facilis excepturi! Rerum amet molestias officiis est totam nemo dolorum animi? Ad molestias quae corrupti ut ipsa deleniti culpa quibusdam ratione animi id? Sapiente voluptatem accusantium? Dolorum natus officiis repellat atque et dolore qui. Aut eum dolorem dignissimos omnis architecto ullam"
              },
              {
                "nombre": "Nebelung",
                "imagen": "./imagenes/nebelung.jpg",
                "descripcion": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum ducimus minima dolorum expedita autem iste. Repellat totam deserunt placeat facilis excepturi! Rerum amet molestias officiis est totam nemo dolorum animi? Ad molestias quae corrupti ut ipsa deleniti culpa quibusdam ratione animi id? Sapiente voluptatem accusantium? Dolorum natus officiis repellat atque et dolore qui. Aut eum dolorem dignissimos omnis architecto ullam"
              },
              {
                "nombre": "Persa",
                "imagen": "./imagenes/persa.jpg",
                "descripcion": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum ducimus minima dolorum expedita autem iste. Repellat totam deserunt placeat facilis excepturi! Rerum amet molestias officiis est totam nemo dolorum animi? Ad molestias quae corrupti ut ipsa deleniti culpa quibusdam ratione animi id? Sapiente voluptatem accusantium? Dolorum natus officiis repellat atque et dolore qui. Aut eum dolorem dignissimos omnis architecto ullam"
              },
              {
                "nombre": "Sagrado de Birmania",
                "imagen": "./imagenes/sagradodebirmania2.jpg",
                "descripcion": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum ducimus minima dolorum expedita autem iste. Repellat totam deserunt placeat facilis excepturi! Rerum amet molestias officiis est totam nemo dolorum animi? Ad molestias quae corrupti ut ipsa deleniti culpa quibusdam ratione animi id? Sapiente voluptatem accusantium? Dolorum natus officiis repellat atque et dolore qui. Aut eum dolorem dignissimos omnis architecto ullam"
              }
        ]

    }
}) 

if (document.getElementById("app")) {
  const app = new Vue({
      el: "#app",
      data: {
          jueces: [],
          errored: false,
          loading: true
      },
      created() {
          var url = 'http://localhost:5000/jueces'
          this.fetchData(url)
      },
      methods: {
          fetchData(url) {
              fetch(url)
                  .then(response => response.json())
                  .then(data => {
                      this.jueces = data;
                      this.loading = false;
                  })
                  .catch(err => {
                      this.errored = true
                  })
          },
          eliminar(juez) {
              const url = 'http://localhost:5000/juez/' + juez;
              var options = {
                  method: 'DELETE',
              }
              fetch(url, options)
                  .then(res => res.text()) // or res.json()
                  .then(res => {
                      location.reload();
                  })
          }
      }
  })
}
