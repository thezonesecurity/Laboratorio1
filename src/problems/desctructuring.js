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
   }

   const main = () => {
    console.log(showPersonalInformation(person));
    console.log(showRoles(person));
    console.log(getPosition(person));
    console.log(getFirstRol(person));
    console.log(getAddress(person));
   };
   export default main;