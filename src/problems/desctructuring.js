const person = {
    name: "Gregor",
    lastname: "Mandella",
    age: 34,
    roles: [
      { name: "Manager", method: "get" },
      { name: "Client", method: "post" },
      { name: "User", method: "get" },
    ],
    address: {
      address: {
        street: "3914 Woodruff Ave",
        location: "Oakland, CA 94602Glenview",
      },
      position: {
        lat: 123.221,
        lng: 124.544,
      },
    },
   };

   const showPersonalInformation = (person) => {
    let information = "";
    //information += "Nombres " + person.name + "\n";
    //information += "Apellidos " + person.lastname + "\n";
    //information += "Edad " + person.age;
    information += `Nombres: ${person.name} \n`;
    information += `Appellido: ${person.lastname} \n`;
    information += `Edad: ${person.age} \n`;
    return information;
   };
   const showRoles = (person) => {
    let information = "";
    //var roles = person.roles;
    const {roles} = person;
    for (var i = 0; i < roles.length; i++) {
      //information += "Nombre del rol " + roles[i].name + "\n";
      //information += "Tipo del rol " + roles[i].method + "\n";
      information += `Nombre del rol: ${roles[i].name} \n`;
      information += `Nombre del metodo: ${roles[i].method} \n`;
    }
    return information;
   };
   const getPosition = (person) => {
    const {address: {position}} = person;
    //return person.address.position;
    return position;
   };
   const getFirstRol = (person) => {
     const {roles} = person;
    //return person.roles[0];
    return roles[0];
   };
   const getAddress = (person) => {
    const {address: 
      {address: 
        {location}
      }
    } = person;
     return location;
   };

   //------------- DESAFIOS ACTIVIDAD 3 ------------------
   const addIdUser = (person, id) => {
    return { ...person, id };
   };
   //PRIMER DESAFIO
   const addRoles = (person, nam, met) => {
     let rol = person.roles.push({name: nam, method: met});
     return rol;
   };
   //SEGUNDO DESAFIO
   const addRoles2 = (person, na, met) => {
     const aux = {name: na, method: met};
     const people = {...person.roles, aux};
     return Object.values(people);
  };

   const main = () => {
    console.log("--------ACTIVIDAD 2-----------");
    console.log(showPersonalInformation(person));
    console.log(showRoles(person));
    console.log(getPosition(person));
    console.log(getFirstRol(person));
    console.log(getAddress(person));
    console.log(addIdUser(person, 123456));

    //para actividad 3
    console.log("--------ACTIVIDAD 3-----------");
    console.log("Desafio 1");
    console.log(addRoles(person, "user2", "get2"));
    console.log(showRoles(person));
    console.log("Desafio 2");
    console.log(addRoles2(person, "user3", "get3"));
   };
   export default main;