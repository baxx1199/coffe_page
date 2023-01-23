jQuery(function () {

    //Effects when page load

    $('#menuOptions li').each(function (index, element) {
        $(this).css({
            'top': '-100px'
        });
        $(this).animate({
            'top': '0'
        }, 1500 + (index * 500));
    })


    if($(window).width() > 800){
        $('div#contTitles').css({
            'opacity' : '0'
        });
        $('div#contTitles').animate({
            'opacity' : '1'
 
        }, 1500);
        
    }

    //scroll to sections

    let newsness = $('#news').offset().top;
    let menu = $('#sectionMenu').offset().top;
    let aboutUs = $('#aboutSection').offset().top;
    let location = $('#sectionLocation').offset().top;
    let footer = $('#sectionFooter').offset().top;


    $('#iNews').on('click', function (params) {
        $('html, body').animate({
            scrollTop: (newsness - 100)
        });
    });
    $('#iMenu').on('click', function (params) {
        $('html, body').animate({
            scrollTop: menu
        });
    });
    $('#iAbout').on('click', function (params) {
        $('html, body').animate({
            scrollTop: aboutUs
        });
    });
    $('#iLocation').on('click', function (params) {
        $('html, body').animate({
            scrollTop: location
        });
    });
    $('#icontact').on('click', function (params) {
        $('html, body').animate({
            scrollTop: footer
        });
    });

    /* 
        parallax effect for newsness section
    */

        $(window).scroll(function () {
            let windowWidth = $(window).width();

            if (windowWidth > 800) {
                let scrollposition = $(window).scrollTop();
                
                $('header div#contTitles').css({
                    "transform": 'translate(0px , '+scrollposition/5 +'%)'
                })
                $('section.newsness p').css({
                    "transform": 'translate(0px , -'+scrollposition/9 +'%)'
                })
                
            }
        })

    /* 
        effect for menu pages
    */
    let pagePosition = 0;

    //for screens < 1000
    let pages= $('div.pages')
    let pageW = pages.width()


    let btnPassLeft = $('#divBtnLeft')
    let btnPassRight = $('#divBtnRight')

    let marks = $('#contDotsMarks');

    /*When the screen size of the device is 1000px or more, 
    the movement of the pages will equal the size width of a
     page,  while the screen size is minor at 800px 
    the movement will be of the width of a column of page */

    

    function movePages(pgs,sizeOfMove) {

        //PGS will be all items displayed in the menu section
        //siseOfMove will be size of an element pgs
        
        btnPassRight.on('click', function () {
            let aux = pagePosition
            

            if(pagePosition < pgs.length-1){
                 
                pgs.css({
                    
                    'transform': 'translate(-'+sizeOfMove* (aux+1) +'px , 0px)'
                })
                pagePosition++;
                
            }
            
           
        })
        btnPassLeft.on('click', function () {
            let aux = pagePosition

            

            if(pagePosition > 0){
                
                pgs.css({
                    
                    'transform': 'translate(-'+sizeOfMove* (aux-1) +'px , 0px)'
                })
                pagePosition--;
                
                
            }
            
            
        })
    
    }

    
    

    
    
    function createMarksDots() {
        let dot = $('<div></div>').attr({
            'class': 'dot'
            
        })
        marks.append(dot) 
    }
    
    


    //when a mark dot was selected, the menu pages advanced until the index of the page  coincide with the index of mark dot

     function movePagesDots(indexMark,widthelement, elements) {
        
        let aux = pagePosition
        
        
        if(indexMark  > aux ){
           
            elements.css({
                
                'transform': 'translate(-'+(widthelement)*(indexMark) +'px , 0px)'
            })
            
        }else if(indexMark  < aux ){
            
            elements.css({
                
                'transform': 'translate(-'+(widthelement)*(indexMark) +'px , 0px)'
            })
        }
        pagePosition=indexMark
        
     }

   
        
        
            movePages(pages, pageW)
             
             for (let i = 0; i < pages.length; i++) {
                 createMarksDots();  
             }
     
             $('.dot').on('click',function () {
                 let index = $(this).index();
                 movePagesDots(index, pageW, pages)
             
             }) 
        
         
        $(window).resize(function () {
            let wwitdh= $(window).width();

            if(wwitdh < 800){
                $('section.newsness p').css({
                    "transform": 'translate(0px , 0px )'
                })
            }
            pages.css({
                
                'transform': 'translate(0px , 0px)'
            })
        });
         

     
});