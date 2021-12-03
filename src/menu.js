const loadMenuPage = (element) => {
    const menuLayout = document.createElement('div');
    menuLayout.setAttribute('id', 'menuLayout');
    const leftSide = document.createElement('div');
    leftSide.setAttribute('id', 'leftSide');
    const rightSide = document.createElement('div');
    rightSide.setAttribute('id', 'rightSide');

    const menu = document.createElement('h2');
    menu.setAttribute('id', 'menu');
    menu.innerHTML = "Menu";

    const p1 = document.createElement('div');
    p1.classList.add('menuItems');
    const itemName = document.createElement('p');
    itemName.classList.add('itemName');
    itemName.innerHTML = "Digorno";
    const itemDescription = document.createElement('p');
    itemDescription.classList.add('itemDescription');
    itemDescription.innerHTML = `Tomato sauce, Mozarella, Tomato, Homemade sausage, Garlic, Basil`;
    const itemPrice = document.createElement('p');
    itemPrice.classList.add('itemPrice');
    itemPrice.innerHTML = "25";
    p1.append(itemName, itemDescription, itemPrice);

    const p2 = document.createElement('div');
    p2.classList.add('menuItems');
    const secondItemName = itemName.cloneNode(true);
    secondItemName.innerHTML = "Houdini";
    const secondItemDescription = itemDescription.cloneNode(true);
    secondItemDescription.innerHTML = "Tomato sauce, Mozarella, Shrimps, Feta cheese, Olives, Basil";
    const secondItemPrice = itemPrice.cloneNode(true);
    secondItemPrice.innerHTML = "21";
    p2.append(secondItemName, secondItemDescription, secondItemPrice);

    const p3 = document.createElement('div');
    p3.classList.add('menuItems');
    const thirdItemName = itemName.cloneNode(true);
    thirdItemName.innerHTML = "Jefe";
    const thirdItemDescription = itemDescription.cloneNode(true);
    thirdItemDescription.innerHTML = "Tomato sauce, Mozarella, Chilli flakes, Olives, Basil";
    const thirdItemPrice = itemPrice.cloneNode(true);
    thirdItemPrice.innerHTML = "26";
    p3.append(thirdItemName, thirdItemDescription, thirdItemPrice);

    const p4 = document.createElement('div');
    p4.classList.add('menuItems');
    const fourthItemName = itemName.cloneNode(true);
    fourthItemName.innerHTML = "Ohana";
    const fourthItemDescription = itemDescription.cloneNode(true);
    fourthItemDescription.innerHTML = "Tomato sauce, Bacon, Pineapple, Olives, Basil";
    const fourthItemPrice = itemPrice.cloneNode(true);
    fourthItemPrice.innerHTML = "17";
    p4.append(fourthItemName, fourthItemDescription, fourthItemPrice);

    const p5 = document.createElement('div');
    p5.classList.add('menuItems');
    const fifthItemName = itemName.cloneNode(true);
    fifthItemName.innerHTML = "Penegrio";
    const fifthItemDescription = itemDescription.cloneNode(true);
    fifthItemDescription.innerHTML = "Tomato sauce, Mozarella, Homemade sausage, Bacon, Garlic, Pepper, Chilli";
    const fifthItemPrice = itemPrice.cloneNode(true);
    fifthItemPrice.innerHTML = "22";
    p5.append(fifthItemName, fifthItemDescription, fifthItemPrice);

    const p6 = document.createElement('div');
    p6.classList.add('menuItems');
    const sixthItemName = itemName.cloneNode(true);
    sixthItemName.innerHTML = "Serenity";
    const sixthItemDescription = itemDescription.cloneNode(true);
    sixthItemDescription.innerHTML = "White sauce, Mozarella, Shrimps, Salmon, Pineapple, Olives, Basil";
    const sixthItemPrice = itemPrice.cloneNode(true);
    sixthItemPrice.innerHTML = "28";
    p6.append(sixthItemName, sixthItemDescription, sixthItemPrice);

    leftSide.append(p1, p2, p3);
    rightSide.append(p4, p5, p6);

    menuLayout.append(leftSide, rightSide);

    element.setAttribute('style', 'display: flex; flex-direction: column;');
    element.append(menu, menuLayout);
}

export {loadMenuPage};