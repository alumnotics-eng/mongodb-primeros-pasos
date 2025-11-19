use('escuela');

db.createCollection('alumnos');

db.alumnos.insertOne({
    nombre: "Pedro 2 Perez",
    edad: 20,
    Direccion: {
        Calle: "Av. Constituyente",
         "Número":33,
         Ciudad:"Querétaro"
    },
    Telefóno: "020300322"
});