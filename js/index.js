window.addEventListener("load", function() {
    document.querySelector(".preloader").classList.add("opacity-0");
    // removing arrow function
    setTimeout(function() {
      document.querySelector(".preloader").style.display = "none";
    }, 1000)
  })
  
  
  // Portfolio Item Filter
  
  const filterContainer = document.querySelector(".porfolio-filter"),
    filterBtns = filterContainer.children,
    totalFilterBtn = filterBtns.length,
    portfolioItems = document.querySelectorAll(".portfolio-item"),
    totalPortfolioItem = portfolioItems.length;
  
  
  for (let i = 0; i < totalFilterBtn; i++) {
    filterBtns[i].addEventListener("click", function() {
      filterContainer.querySelector(".active").classList.remove("active");
      this.classList.add("active");
  
      const filterValue = this.getAttribute("data-filter");
  
      for (let k = 0; k < totalPortfolioItem; k++) {
        if (filterValue === portfolioItems[k].getAttribute("data-category")) {
          portfolioItems[k].classList.remove("hide");
          portfolioItems[k].classList.add("show");
        } else {
          portfolioItems[k].classList.remove("show");
          portfolioItems[k].classList.add("hide");
        }
        if (filterValue === "all") {
          portfolioItems[k].classList.remove("hide");
          portfolioItems[k].classList.add("show");
        }
      }
    })
  }
  
  
  
  // portfolio LightBox
  
  const lightbox = document.querySelector(".lightbox"),
    lightBoxImg = lightbox.querySelector(".lightbox-img"),
    lightBoxClose = lightbox.querySelector(".lightbox-close"),
    lightboxText = lightbox.querySelector(".caption-text"),
    lightboxCounter = lightbox.querySelector(".caption-counter");
  let itemIndex = 0;
  
  
  
  //function to toggle the images in the portfolio
  for (let i = 0; i < totalPortfolioItem; i++) {
    portfolioItems[i].addEventListener("click", function() {
      itemIndex = i;
      changeItem();
      //my add
      changeLinks();
  
      toggleLightbox();
    })
  }
  
  function nextItem() {
    if (itemIndex === totalPortfolioItem - 1) {
      itemIndex = 0;
    } else {
      itemIndex++;
    }
    changeItem();
    //my add
    changeLinks();
  }
  
  function prevItem() {
    if (itemIndex === 0) {
      itemIndex = totalPortfolioItem - 1;
    } else {
      itemIndex--;
    }
    changeItem();
    //my add
    changeLinks();
  }
 
  function toggleLightbox() {
    lightbox.classList.toggle("open"); //toggle .open in style.css (grey light box)
  }
  
  //function to change the picture in the portfolio
  function changeItem() {
    imgSrc = portfolioItems[itemIndex].querySelector(".portfolio-img img").getAttribute("src");
    lightBoxImg.src = imgSrc; //change the img
    lightboxText.innerHTML = portfolioItems[itemIndex].querySelector("h4").innerHTML; //Change the text
    lightboxCounter.innerHTML = (itemIndex + 1) + " of " + totalPortfolioItem;
  }
  
  // close lightbox
  lightbox.addEventListener("click", function(event) {
    if (event.target === lightBoxClose || event.target === lightbox) {
      toggleLightbox();
    }
  })
  
  
  // Aside Navbar
  
  
  const nav = document.querySelector(".nav"),
    navList = nav.querySelectorAll("li"),
    totalNavList = navList.length,
    allSection = document.querySelectorAll(".section"),
    totalSection = allSection.length;
  
  
  for (let i = 0; i < totalNavList; i++) {
    const a = navList[i].querySelector("a");
    a.addEventListener("click", function() {
      //remove back section class
      removeBackSectionClass();
      //loop to remove other active nav bar
      for (let j = 0; j < totalNavList; j++) {
        //if statement to track which section was open prev
        if (navList[j].querySelector("a").classList.contains("active")) {
          //add back section class
          addBackSectionClass(j);
  
        }
        navList[j].querySelector("a").classList.remove("active");
      }
      this.classList.add("active");
      showSection(this);
  
      if (window.innerWidth < 1200) {
        asideSectionTogglerBtn();
      }
    })
  }
  
  function removeBackSectionClass() {
    for (let i = 0; i < totalSection; i++) {
      allSection[i].classList.remove("back-section");
    }
  }
  
  function addBackSectionClass(num) {
    allSection[num].classList.add("back-section");
  }
  
  function showSection(element) {
    // remove classList active from all section
    for (let i = 0; i < totalSection; i++) {
      allSection[i].classList.remove("active");
    }
    //split the # from the href #home to a string ["","home"]
    //get the second array element "home"
    const target = element.getAttribute("href").split("#")[1];
    document.querySelector("#" + target).classList.add("active");
  }
  
  
  
  //update nav bar to active when click on hire me
  function updateNav(element) {
    for (let i = 0; i < totalNavList; i++) {
      navList[i].querySelector("a").classList.remove("active");
      const target = element.getAttribute("href").split("#")[1];
      if (target === navList[i].querySelector("a").getAttribute("href").split("#")[1]) {
        navList[i].querySelector("a").classList.add("active");
      }
    }
  
  }
  
  // event listener for hire me button => direct to contact page && make back list as about section
  document.querySelector(".hire-me").addEventListener("click", function() {
    const sectionIndex = this.getAttribute("data-section-index");
    // console.log(sectionIndex);
    showSection(this);
    updateNav(this);
    removeBackSectionClass();
    addBackSectionClass(sectionIndex);
  })
  
  //if click of logo restart the page
  document.querySelector(".logo").addEventListener("click", function() {
    location.reload();
  })
  
  //Hamburger button toggler
  const navTogglerBtn = document.querySelector(".nav-toggler"),
    aside = document.querySelector(".aside");
  navTogglerBtn.addEventListener("click", asideSectionTogglerBtn);
  
  
  
  function asideSectionTogglerBtn() {
    aside.classList.toggle("open");
    navTogglerBtn.classList.toggle("open");
    for (let i = 0; i < totalSection; i++) {
      allSection[i].classList.toggle("open");
    }
  }