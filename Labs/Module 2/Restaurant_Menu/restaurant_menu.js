const breakfastMenu = ['Pancakes- $11.99','Eggs Benedict- $10.99','Oatmeal- $7.99', 'Frittata- $14.99'];
const mainCourseMenu = ["Steak- $15.99", "Pasta- $10.99", "Burger- $9.99", "Salmon- $12.99"];
const dessertMenu = ["Cake- $9.99", "Ice Cream- $4.99", "Pudding- $3.99", "Fruit Salad- $5.99"];

const breakfastMenuItemsHTML = breakfastMenu.map((item, index) => `<p>Item ${index + 1}: ${item}</p>`).join(" ");
document.getElementById('breakfastMenuItems').innerHTML = breakfastMenuItemsHTML;

let mainCourseItems = "";
mainCourseMenu.forEach((item, index) => {
    mainCourseItems += `<p>Item ${index + 1}: ${item}</p>`
});
document.getElementById('mainCourseMenuItems').innerHTML = mainCourseItems;
let dessertItems = "";
for (let i = 0; i < dessertMenu.length; i++) {
    dessertItems += `<p>Item ${i + 1}: ${dessertMenu[i]}</p>`
};
document.getElementById('dessertMenuItems').innerHTML = dessertItems;


