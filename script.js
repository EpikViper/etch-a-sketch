const docbody = document.body;
docbody.style.display = 'flex';
docbody.style.justifyContent = 'center';
docbody.style.alignItems = 'center';
docbody.style.flex = '1';
docbody.style.flexWrap = 'wrap';
docbody.style.margin = '0px';
docbody.style.minHeight = '100vh'; // putting this always as tall as the screen.

const container = document.createElement('div');
const startingGridnumber = 4;

container.style.display = 'flex';
container.style.flexDirection = 'column';
container.style.width = '960px';
container.style.height = '960px';
container.style.alignSelf = 'center';

docbody.appendChild(container);

function playGame(number) {
    for (let i = 0; i < startingGridnumber; i++) {

        const outerDiv = document.createElement('div');
        outerDiv.style.border = '5px solid black'
        outerDiv.className = 'outer-divs';
        outerDiv.style.display = 'flex';
        outerDiv.style.flex = '1';
        outerDiv.style.marginTop = '-5px';
        container.appendChild(outerDiv);
    }

    const outerDivs = document.querySelectorAll('.outer-divs');

    outerDivs.forEach((div) => {
        for(let i = 0; i < startingGridnumber; i++) {
            const childDiv = document.createElement('div');
            childDiv.style.border = '5px solid black'
            childDiv.className = 'inner-divs';
            childDiv.style.flex = '1';
            div.appendChild(childDiv);
        }
    })

    const innerDivs = document.querySelectorAll('.inner-divs');

    innerDivs.forEach((div) => {     
        div.addEventListener('mousemove', (e) => {
            const pixel = document.createElement('div');
            const rect = div.getBoundingClientRect();
            pixel.style.position = 'absolute';
            pixel.style.width = '5px';
            pixel.style.height = '5px';
            pixel.style.backgroundColor = 'black';

            let left =  e.pageX + 'px';
            let top = e.pageY + 'px';
            pixel.style.left = left;
            pixel.style.top = top;
            console.log(left);
            console.log(top);

            div.appendChild(pixel);
        })
    })
}

playGame(startingGridnumber);
