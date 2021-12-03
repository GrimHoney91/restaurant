const initPageLoad = (element) => {
    const home = document.createElement('div');
    home.setAttribute('id', 'home');

    const restaurantName = document.createElement('h1');
    restaurantName.setAttribute('id', 'restaurantName');
    restaurantName.innerHTML = `Fibonacci`;

    const description = document.createElement('p');
    description.setAttribute('id', 'description');
    description.innerHTML = 'Since 1988';

    home.append(restaurantName, description);
    element.setAttribute('style', 'display: grid;');
    element.append(home);
}
export {initPageLoad};