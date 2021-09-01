const createDivElement = (label) => {
    let btn = document.createElement("button");
    btn.innerHTML = label; 
    let root = document.getElementById("root");
    root.append(btn);
    return btn;
};

const createMenu = () => {
    for (var i = 0; i < 10; i++) {
        let c = i;
        //let btn = createDivElement("Button" + i);
        var btn = createDivElement("Button" + i);
        btn.addEventListener("click", () => {
            alert("I'm the button " + c);
        });
    };
};
export default createMenu;

