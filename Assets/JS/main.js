let all_btn = document.getElementById('all_btn');

let breakfast_btn = document.getElementById('breakfast_btn');

let lunch_btn = document.getElementById('lunch_btn');

let shakes_btn = document.getElementById('shakes_btn');

let dinner_btn = document.getElementById('dinner_btn');

// Content 
var All = document.getElementById('All');
var BreakFast = document.getElementById('Breakfast');
var Lunch = document.getElementById('Lunch');
var Shakes = document.getElementById('Shakes');
var Dinner = document.getElementById('Dinner');


// control html
all_btn.addEventListener('click', () => {
    All.style.display = 'block';
    BreakFast.style.display = 'block';
    Lunch.style.display = 'block';
    Shakes.style.display = 'block';
    Dinner.style.display = 'block';
});
breakfast_btn.addEventListener('click', () => {
    BreakFast.style.display = 'block';
    Lunch.style.display = 'none';
    Shakes.style.display = 'none';
    Dinner.style.display = 'none';
});
lunch_btn.addEventListener('click', () => {
    Lunch.style.display = 'block';
    BreakFast.style.display = 'none';
    Shakes.style.display = 'none';
    Dinner.style.display = 'none';
});
shakes_btn.addEventListener('click', () => {
    Shakes.style.display = 'block';
    Lunch.style.display = 'none';
    BreakFast.style.display = 'none';
    Dinner.style.display = 'none';
});
dinner_btn.addEventListener('click', () => {
    Dinner.style.display = 'block';
    Shakes.style.display = 'none';
    Lunch.style.display = 'none';
    BreakFast.style.display = 'none';

});