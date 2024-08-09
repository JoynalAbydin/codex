//Function Creating For Header Menu
document.addEventListener('DOMContentLoaded', function () {
    const dynamicHeader = document.getElementById('headerMenu');

    // Create header elements
    const nav = document.createElement('nav');
    const ul = document.createElement('ul');

    // Create main menu items
    const homeItem = createMenuItem('Home', '/codex/index.html');
    ul.appendChild(homeItem);

    const menu1 = createMenuItem('Menu-1', '#');
    // Creating sub menu for menu1
    const subMenu1 = document.createElement('ul');
    subMenu1.appendChild(createMenuItem('Sub1_1','#'));
    subMenu1.appendChild(createMenuItem('Sub1_2','#'));

    // Append Menu With Sub Menu
    menu1.appendChild(subMenu1);
    ul.appendChild(menu1)
    
    const menu2 = createMenuItem('Menu-2','#');
    // Creating Menu For Menu-2
    const subMenu2 = this.createElement('ul');
    subMenu2.appendChild(createMenuItem('Sub2_1','#'));
    subMenu2.appendChild(createMenuItem('Sub2_2','#'));
    const sub2sub = subMenu2.appendChild(createMenuItem('Sub2_Sub','#'));

    // Creating menu for sub2 sub
    const sub2sub1 = this.createElement('ul');
    sub2sub1.appendChild(createMenuItem('Sub2_Sub1','#'));
    sub2sub1.appendChild(createMenuItem('Sub2_Sub2','#'));
   
    // Append menu and sub to sub menu
    sub2sub.appendChild(sub2sub1);
    subMenu2.appendChild(sub2sub);
    menu2.appendChild(subMenu2)
    ul.appendChild(menu2)

    // Create menu item for go to js learning site
    const jsmenu = createMenuItem('JS Menu', '/learning/script/index.html');
    ul.appendChild(jsmenu);

    // Append main menu to the header
    nav.appendChild(ul);
    dynamicHeader.appendChild(nav);
});

function createMenuItem(text, link) {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.textContent = text;
    a.href = link || '#'; 
    li.appendChild(a);

    // if (text) {
    //     const submenu = document.createElement('ul');
    //     li.appendChild(submenu);
    // }

    return li;
}



//Footer Menu Start Here
document.addEventListener('DOMContentLoaded', function () {
    const dynamicFooter = document.getElementById('dynamicFooter');

    // Create footer elements
    const nav = document.createElement('nav');
    const ul = document.createElement('ul');

    // Create footer menu items
    const homeItem = createMenuItem('Home', '/codex/index.html');
    ul.appendChild(homeItem);

    const aboutItem = createMenuItem('About', '/learning/page/about/about.html');
    ul.appendChild(aboutItem);

    const contactItem = createMenuItem('Contact', '/learning/page/contact/contact.html');
    ul.appendChild(contactItem);

    // Create menu item for go to js learning site
    const jsmenu = createMenuItem('JS Menu', '/learning/script/index.html');
    ul.appendChild(jsmenu);

    // Append footer menu to the footer
    nav.appendChild(ul);
    dynamicFooter.appendChild(nav);
});

// function createMenuItem(text, link) {
//     const li = document.createElement('li');
//     const a = document.createElement('a');
//     a.textContent = text;
//     a.href = link || '#';
//     li.appendChild(a);

//     return li;
// }
