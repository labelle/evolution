# evo-nav-universal

Universal nav bar built using HTML, CSS and javascript.
#### Dependency
* Jquery - Reference it in the document.  Any path could be used so if the jQuery files are local just adjust the path to fit.
````shell
<script src="https://code.jquery.com/jquery-3.1.1.min.js"></script>
````

## Summary


## Setup

#### nav html setup

* Add the reference to the stylesheet and set it's pathway.

* Add the reference to the javascript evo-nav.js file and set it's pathway.

* The class for the main nav html element needs to be "evo-navigation"
````shell
<nav class="evo-navigation">
````

* The "evo-navigation" element needs a data attribute called "data-nav-item-count" which will set the number of items visible in the nav bar.  To change the max number of items shown in the navbar change this number. Items beyond this number get put into the overflow nav.
````shell
<nav class="evo-navigation" data-nav-item-count="7">
````

* We also need to know where the break point is set for the mobile nav.  In the style sheet it is set at 768 pixels.  If that changes in the stylesheet the data attribute "data-mobile-nav-break-point" on the "evo-navigation" element needs to be changed to match.  Changing it in this one places takes care of everything.
````shell
<nav class="evo-navigation" data-nav-item-count="7" data-mobile-nav-break-point="768">
````

* The unordered list that the items are placed in needs to have the class "nav-list"
````shell
<ul class="nav-list"
````

* Inside the ul there needs to be  a wrapper for the nav items that will change.  It wraps only around the nav items that move to and from the overflow nav.  Anything that needs to stay fixed on the navbar whould not go inside this wrapper.  The wrapper needs a class "nav-item-container"
````shell
<span class="nav-item-container"
````

* The main nav items need the class "evo-nav-item".  These are the nav items shown in the navbar.  Sub nav items cannot have this class.
````shell
<li class="evo-nav-item"
````

* There needs to be an overflow nav with the class "evo-nav-overflow".  It needs to be inside the main "evo-navigation" nav but outside the "nav-items-container" wrapper.
````shell
<li class="evo-nav-overflow">
````

* Inside the overflow nav needs to be a ul element with class "overflow-list"
````shell
<ul class="overflow-list"></ul>
````

#### Example html structure
````shell        
<nav class="evo-navigation" data-nav-item-count="7" data-mobile-nav-break-point="768">
  <div class="contain">
    <a href="#" class="logo">
      <img src="logo.svg" alt="">
    </a>
    <!-- This is the main ul and needs to have the class "nav-list" -->
    <ul class="nav-list menu-offcanvas">
      <!-- This wraps the nav items that move to and from the overflow nav menu only.  Any fixed nav items needs to be outside thie wrapper -->
      <span class="nav-item-container">

        <!-- All main nav items should have the class "evo-nav-item".  Nested nav items should not have that class. -->
        <li class="evo-nav-item"><a href="#" class="item">Menu 1</a></li>
        <li class="evo-nav-item"><a href="#" class="item">Menu 2</a></li>
        <li class="evo-nav-item">
          <label for="drop-1" class="item toggle">Menu 3</label>
          <a href="#" class="item drop">Menu 3</a>
          <input type="checkbox" id="drop-1"/>
          <ul class="item-drop">
            <li class="nav-item"><a href="#" class="item">Sub Menu 1</a></li>
            <li class="nav-item"><a href="#" class="item">Sub Menu 2</a></li>
            <li class="nav-item"><a href="#" class="item">Sub Menu 3</a></li>
          </ul>
        </li>
        <li class="evo-nav-item">
          <label for="drop-2" class="item toggle">Menu 4</label>
          <a href="#" class="item drop">Menu 4</a>
          <input type="checkbox" id="drop-2"/>
          <ul class="item-drop">
            <li class="nav-item"><a href="#" class="item">Sub Menu 1</a></li>
            <li class="nav-item"><a href="#" class="item">Sub Menu 2</a></li>
            <li class="nav-item"><a href="#" class="item">Sub Menu 3</a></li>
            <li class="drop-item">
              <label for="drop-3" class="item toggle">Sub Menu 4</label>
              <a href="#" class="item drop">Sub Menu 4</a>
              <input type="checkbox" id="drop-3"/>
              <ul class="item-drop">
                <li class="drop-item">
                  <label for="drop-4" class="item toggle">Deep Menu 1</label>
                  <a href="#" class="item drop">Deep Menu 1</a>
                  <input type="checkbox" id="drop-4"/>
                  <ul class="item-drop">
                    <li class="nav-item"><a href="#" class="item">Sub Deep 1</a></li>
                    <li class="nav-item"><a href="#" class="item">Sub Deep 2</a></li>
                    <li class="nav-item"><a href="#" class="item">Sub Deep 3</a></li>
                    <li class="nav-item"><a href="#" class="item">Sub Deep 4</a></li>
                  </ul>
                </li>
                <li class="nav-item"><a href="#">Deep Menu 2</a></li>
              </ul>
            </li>
            <li class="nav-item"><a href="#" class="item">Sub Menu 5</a></li>
          </ul>
        </li>
        <li class="evo-nav-item"><a href="#" class="item">Menu 5</a></li>
        <li class="evo-nav-item"><a href="#" class="item">Menu 6</a></li>
        <li class="evo-nav-item"><a href="#" class="item">Menu 7</a></li>
        <li class="evo-nav-item"><a href="#" class="item">Menu 8</a></li>
        <li class="evo-nav-item"><a href="#" class="item">Menu 9</a></li>
      </span><!-- End "nav-item-container" -->

      <!-- This is where the overflow nav items go -->
      <li class="evo-nav-overflow">
        <a href="#">More</a>
        <ul class="overflow-list"></ul>
      </li>

      <li class="nav-item nav-button"><a href="#" class="item">Contact Us</a></li>
    </ul>
    <div class="navbutton menu-offcanvas">
      <span class="bars"></span>
    </div>
  </div>
</nav>
````

#### Mobile nav options
* Depending on desired nav functionality add class "menu-modal" or "menu-offcanvas" to ul.nav-list and .navbutton

* Off canvas nav
````html
<nav class="evo-navigation" data-nav-item-count="7" data-mobile-nav-break-point="768">
  <div class="contain">
    <a href="#" class="logo">
      <img src="logo.svg" alt="">
    </a>
    <!-- This is the main ul and needs to have the class "nav-list" -->
    <ul class="nav-list menu-offcanvas">        
...
````
````html
...
      <!-- This is where the overflow nav items go -->
      <li class="evo-nav-overflow">
        <a href="#">More</a>
        <ul class="overflow-list"></ul>
      </li>

      <li class="nav-item nav-button"><a href="#" class="item">Contact Us</a></li>
    </ul>
    <div class="navbutton menu-offcanvas">
      <span class="bars"></span>
    </div>
  </div>
</nav>
```
* Modal nav
````html
<nav class="evo-navigation" data-nav-item-count="7" data-mobile-nav-break-point="768">
  <div class="contain">
    <a href="#" class="logo">
      <img src="logo.svg" alt="">
    </a>
    <!-- This is the main ul and needs to have the class "nav-list" -->
    <ul class="nav-list menu-modal">        
...
````
````html
...
    <div class="navbutton menu-modal">
      <span class="bars"></span>
    </div>
  </div>
</nav>
```
