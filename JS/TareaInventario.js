/*
  Ejercicio
  Crea un programa que imprima de forma organizada el inventario con sus categorias, subcategorias y productos.
*/


inventario = {
  carnes: {
    premium: [
      {
        nombre: "res",
        precio: 100,
        cantidad: 10
      },
      {
        nombre: "cerdo",
        precio: 80,
        cantidad: 20
      }
    ],
    regular: [
      {
        nombre: "pollo",
        precio: 50,
        cantidad: 30
      },
      {
        nombre: "pescado",
        precio: 70,
        cantidad: 40
      }
    ]
  },
  bebidas: {
    refrescos: [
      {
        nombre: "cocacola",
        precio: 20,
        cantidad: 50
      },
      {
        nombre: "pepsi",
        precio: 15,
        cantidad: 60
      }
    ],
    jugos: [
      {
        nombre: "jugo de naranja",
        precio: 25,
        cantidad: 70
      },
      {
        nombre: "jugo de manzana",
        precio: 30,
        cantidad: 80
      }
    ],
  quesos: [
    {
      nombre: "queso cheddar",
      variantes: [
        {
          nombre: "cheddar maduro",
          precio: 50,
            cantidad: 10
          },
          {
            nombre: "cheddar joven",
            precio: 40,
            cantidad: 20
          }
        ]
      },
      {
        nombre: "queso mozzarella",
        precio: 60,
        cantidad: 30
      }
    ]
  }
}

function inventario_organizado (inventario) {
  for (let categoria in inventario) {
    console.log(`Categoria: ${categoria}`);
    for (let subcategoria in inventario[categoria]) {
      console.log(`  Subcategoria: ${subcategoria}`);
      if (variante in [subcategoria]) {
        for (let variante of inventario[categoria][subcategoria]) {
          console.log(`    Variante: ${variante.nombre}, Precio: ${variante.precio}, Cantidad: ${variante.cantidad}`);
        }
      for (let producto of inventario[categoria][subcategoria]) {
          console.log(`    Producto: ${producto.nombre}, Precio: ${producto.precio}, Cantidad: ${producto.cantidad}`);
          }
        }
      }
    }
  }
        

  console.log("Inventario Organizado:");
  inventario_organizado(inventario);
  