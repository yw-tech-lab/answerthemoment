let i = 0;
const colors = [
    ['#FFF', '#7ec59f'],
    ['#FFF', '#68B0AB'],
    ['#261816', '#F9F3DF'],
    ['#261816', '#F6DC69'],
    ['#fff', '#D5916B'],
    ['#2F3027', '#D9BEA4'],
    ['#2F3027', '#FFF'],
    ['#FFF', '#977E7E'],
    ['#444', '#A09DAF'],
    ['#444', '#A5B9C7'],
    ['#444', '#CCB09D'],
    ['#FFF', '#D4816B'],
    ['#444', '#A09DAF'],
    ['#444', '#A5B9C7'],
    ['#444', '#F7DECF'],
    ['#444', '#F2DAA3'],
    ['#444', '#F7DECF'],
    ['#FFF', '#E4A87E'],
    ['#FFF', '#A17B60'] 
];

const setColor = () => {
    const fontColor = colors[i][0];
    const bgColor = colors[i][1];
    const root = document.documentElement;
    root.style.setProperty('--hero-text-color', fontColor);
    root.style.setProperty('--hero-bg-color', bgColor);
    root.style.setProperty('--badge-color', bgColor);
};

const initColor = () => {
    setColor();
    document.querySelector('.btn-tester button').innerHTML = `Option ${i+1} / ${colors.length}`;
};

const nextColor = () => {
    i++;
    if (i >= colors.length) {
        i = 0;
    }
    setColor();
    document.querySelector('.btn-tester button').innerHTML = `Option ${i+1} / ${colors.length}`;
};

const initScreen = () => {
    document.querySelector('#hero').insertAdjacentHTML('beforeend', `
        <div class="btn-tester">
            <button onclick="nextColor()">Next Option</button>
        </div>
    `)

    initColor();
};

initScreen();

