const loadContactPage = (element) => {

    const contactLayout = document.createElement('div');
    contactLayout.setAttribute('id', 'contactLayout');
    
    const contactInfoBox = document.createElement('div');
    contactInfoBox.setAttribute('id', 'contactInfoBox');
    const leftSide = document.createElement('div');
    leftSide.classList.add('info');
    const middle = document.createElement('div');
    middle.classList.add('info');
    const rightSide = document.createElement('div');
    rightSide.classList.add('info');

    const map = document.createElement('div');
    map.setAttribute('id', 'map');


    const location = document.createElement('h2');
    location.classList.add('lhp');
    location.innerHTML = 'Location';
    const locationInfo = document.createElement('p');
    locationInfo.classList.add('lhpInfo');
    locationInfo.innerHTML = `1234 E. Finonacci St, Hollywood, California, 12345`;

    const hours = document.createElement('h2');
    hours.classList.add('lhp');
    hours.innerHTML = 'Hours';
    const hoursInfo = document.createElement('p');
    hoursInfo.classList.add('lhpInfo');
    hoursInfo.innerHTML = `M-S: 8-12`;

    const phoneNumber = document.createElement('h2');
    phoneNumber.classList.add('lhp');
    phoneNumber.innerHTML = 'Phone Number';
    const phoneNumberInfo = document.createElement('p');
    phoneNumberInfo.classList.add('lhpInfo');
    phoneNumberInfo.innerHTML = '(123)-456-789';

    rightSide.append(phoneNumber, phoneNumberInfo);
    middle.append(hours, hoursInfo);
    leftSide.append(location, locationInfo);
    contactInfoBox.append(leftSide, middle, rightSide);
    contactLayout.append(contactInfoBox, map);
    element.appendChild(contactLayout);
}
export {loadContactPage};