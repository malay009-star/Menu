var All_item = document.getElementById('item_box');

console.log(All_item);


var allObjects = [{
        img: 'Assets/img/item-1.jpeg',
        title: 'Buttermilk Pancakes',
        price: '$15.99',
        type: 'Breakfast',
        description: 'I m baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed'
    },
    {
        img: 'Assets/img/item-3.jpeg',
        title: 'Bacon Overflow',
        price: '$15.99',
        type: 'Breakfast',
        description: 'I m baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed'
    },
    {
        img: 'Assets/img/item-4.jpeg',
        title: 'Diner Double',
        price: '$15.99',
        type: 'Lunch',
        description: 'I m baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed'
    },
    {
        img: 'Assets/img/item-5.jpeg',
        title: 'Egg Attack',
        price: '$15.99',
        type: 'Lunch',
        description: 'I m baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed'
    },
    {
        img: 'Assets/img/item-8.jpeg',
        title: 'Oreo Dream',
        price: '$15.99',
        type: 'Shakes',
        description: 'I m baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed'
    },
    {
        img: 'Assets/img/item-9.jpeg',
        title: 'Quarantine Buddy',
        price: '$15.99',
        type: 'Shakes',
        description: 'I m baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed'
    },
    {
        img: 'Assets/img/item-2.jpeg',
        title: 'Country Delight',
        price: '$15.99',
        type: 'Breakfast',
        description: 'I m baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed'
    },

    {
        img: 'Assets/img/item-10.jpeg',
        title: 'Steak Dinner',
        price: '$15.99',
        type: 'Dinner',
        description: 'I m baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed'
    },
    {
        img: 'Assets/img/item-1.jpeg',
        title: 'Country Delight',
        price: '$15.99',
        type: 'Dinner',
        description: 'I m baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed'
    },

    {
        img: 'Assets/img/item-6.jpeg',
        title: 'Steak Dinner',
        price: '$15.99',
        type: 'Lunch',
        description: 'I m baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed'
    }
]

// by default content
allObjects.forEach(item => {
    const { img, title, price, description, type } = item;
    let x = document.createElement('div');
    let y = document.createElement('div');
    let z = document.createElement('div');

    // main div of item info
    let final_div = document.createElement('div');
    final_div.classList.add('w-1/4');
    final_div.classList.add('px-2');
    final_div.classList.add('pb-14');

    // div for image
    x.classList.add('w-1/4');
    let food_img = `
    <img src="${img}"/>`
    x.innerHTML = food_img;
    All_item.appendChild(x);

    // div for title and price
    y.classList.add('flex');
    y.classList.add('justify-between');
    let titl_pric = ` 
    <h2>${title}</h2>
    <pre>${price}</pre>`
    y.innerHTML = titl_pric;
    final_div.appendChild(y);

    // div for description
    z.classList.add('pb-14');
    let my_data = `
    <p>${description}</p>`
    z.innerHTML = my_data
    final_div.appendChild(z);
    // let text = document.createTextNode(my_data)

    All_item.appendChild(final_div)
})


// oncliking all
document.getElementById('all_btn').addEventListener('click', () => {
    All_item.innerHTML = '';

    allObjects.forEach(item => {
            const { img, title, price, description, type } = item;
            let x = document.createElement('div');
            let y = document.createElement('div');
            let z = document.createElement('div');

            // main div of item info
            let final_div = document.createElement('div');
            final_div.classList.add('w-1/4');
            final_div.classList.add('px-2');
            final_div.classList.add('pb-14');

            // div for image
            x.classList.add('w-1/4');
            let food_img = `
        <img src="${img}"/>`
            x.innerHTML = food_img;
            All_item.appendChild(x);

            // div for title and price
            y.classList.add('flex');
            y.classList.add('justify-between');
            let titl_pric = ` 
        <h2>${title}</h2>
        <pre>${price}</pre>`
            y.innerHTML = titl_pric;
            final_div.appendChild(y);

            // div for description
            z.classList.add('pb-14');
            let my_data = `
        <p>${description}</p>`
            z.innerHTML = my_data
            final_div.appendChild(z);
            // let text = document.createTextNode(my_data)

            All_item.appendChild(final_div)
        })
        // }
})


// break fast
document.querySelector('#breakfast_btn').addEventListener('click', ({ target: { innerHTML } }) => {
    All_item.innerHTML = '';
    const value = innerHTML;
    const x = allObjects.filter(item => item.type === value)
    x.forEach(item => {
        const { img, title, price, description, type } = item;
        let x = document.createElement('div');
        let y = document.createElement('div');
        let z = document.createElement('div');

        // main div of item info
        let final_div = document.createElement('div');
        final_div.classList.add('w-1/4');
        final_div.classList.add('px-2');
        final_div.classList.add('pb-14');

        // div for image
        x.classList.add('w-1/4');
        let food_img = `
        <img src="${img}"/>`
        x.innerHTML = food_img;
        All_item.appendChild(x);

        // div for title and price
        y.classList.add('flex');
        y.classList.add('justify-between');
        let titl_pric = ` 
        <h2>${title}</h2>
        <pre>${price}</pre>`
        y.innerHTML = titl_pric;
        final_div.appendChild(y);

        // div for description
        z.classList.add('pb-14');
        let my_data = `
        <p>${description}</p>`
        z.innerHTML = my_data
        final_div.appendChild(z);
        // let text = document.createTextNode(my_data)

        All_item.appendChild(final_div)
    })
})


// lunch
document.querySelector('#lunch_btn').addEventListener('click', ({ target: { innerHTML } }) => {
    All_item.innerHTML = '';
    const value = innerHTML;
    const x = allObjects.filter(item => item.type === value)
    x.forEach(item => {
        const { img, title, price, description, type } = item;
        let x = document.createElement('div');
        let y = document.createElement('div');
        let z = document.createElement('div');

        // main div of item info
        let final_div = document.createElement('div');
        final_div.classList.add('w-1/4');
        final_div.classList.add('px-2');
        final_div.classList.add('pb-14');

        // div for image
        x.classList.add('w-1/4');
        let food_img = `
        <img src="${img}"/>`
        x.innerHTML = food_img;
        All_item.appendChild(x);

        // div for title and price
        y.classList.add('flex');
        y.classList.add('justify-between');
        let titl_pric = ` 
        <h2>${title}</h2>
        <pre>${price}</pre>`
        y.innerHTML = titl_pric;
        final_div.appendChild(y);

        // div for description
        z.classList.add('pb-14');
        let my_data = `
        <p>${description}</p>`
        z.innerHTML = my_data
        final_div.appendChild(z);
        // let text = document.createTextNode(my_data)

        All_item.appendChild(final_div)
    })
})


// Shakes
document.querySelector('#shakes_btn').addEventListener('click', ({ target: { innerHTML } }) => {
    All_item.innerHTML = '';
    const value = innerHTML;
    const x = allObjects.filter(item => item.type === value)
    x.forEach(item => {
        const { img, title, price, description, type } = item;
        let x = document.createElement('div');
        let y = document.createElement('div');
        let z = document.createElement('div');

        // main div of item info
        let final_div = document.createElement('div');
        final_div.classList.add('w-1/4');
        final_div.classList.add('px-2');
        final_div.classList.add('pb-14');

        // div for image
        x.classList.add('w-1/4');
        let food_img = `
        <img src="${img}"/>`
        x.innerHTML = food_img;
        All_item.appendChild(x);

        // div for title and price
        y.classList.add('flex');
        y.classList.add('justify-between');
        let titl_pric = ` 
        <h2>${title}</h2>
        <pre>${price}</pre>`
        y.innerHTML = titl_pric;
        final_div.appendChild(y);

        // div for description
        z.classList.add('pb-14');
        let my_data = `
        <p>${description}</p>`
        z.innerHTML = my_data
        final_div.appendChild(z);
        // let text = document.createTextNode(my_data)

        All_item.appendChild(final_div)
    })
})


// Dinner
document.getElementById('dinner_btn').addEventListener('click', ({ target: { innerHTML } }) => {
    All_item.innerHTML = '';
    const value = innerHTML;
    const x = allObjects.filter(item => item.type === value);

    x.forEach(item => {
        const { img, title, price, description, type } = item;
        let x = document.createElement('div');
        let y = document.createElement('div');
        let z = document.createElement('div');

        // main div of item info
        let final_div = document.createElement('div');
        final_div.classList.add('w-1/4');
        final_div.classList.add('px-2');
        final_div.classList.add('pb-14');

        // div for image
        x.classList.add('w-1/4');
        let food_img = `
        <img src="${img}"/>`
        x.innerHTML = food_img;
        All_item.appendChild(x);

        // div for title and price
        y.classList.add('flex');
        y.classList.add('justify-between');
        let titl_pric = ` 
        <h2>${title}</h2>
        <pre>${price}</pre>`
        y.innerHTML = titl_pric;
        final_div.appendChild(y);

        // div for description
        z.classList.add('pb-14');
        let my_data = `
        <p>${description}</p>`
        z.innerHTML = my_data
        final_div.appendChild(z);
        // let text = document.createTextNode(my_data)

        All_item.appendChild(final_div)
    })

})