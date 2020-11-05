document.addEventListener('DOMContentLoaded', () => {
  const goodsWrapper = document.querySelector('.data__body');
  const search = document.querySelector('.search');
  const data_id = document.querySelector('#data_id');
  const data_name = document.querySelector('#data_name');
  const pagination = document.querySelector('#pagination');
  let notesOnPages = 10;

  const getGoods = (handler, filter) => {
    fetch('https://5fa00a5ae21bab0016dfcc6a.mockapi.io/api/payoola/test').then((response) => {
    //  console.log(response.json());
      return response.json();
      
     }).then(filter).then(handler);
  }

  const renderCard = (item) => {
    let notesOnPage = notesOnPages;
    let pagination_element = []
    let countOfItems = Math.ceil( item.length / notesOnPage );
    
    
    goodsWrapper.textContent='';
    
    if(item.length) {      
      item.slice(0, notesOnPage).forEach(element => {       
        goodsWrapper.appendChild(creatCard(element[1], element.name, element["2020-11-02"], element.avatar));
      });
    }
    else {
      goodsWrapper.textContent = 'Результатов не найдено ❗ ';
    } 

        //+++ add pagina    
        for (let index = 1; index <= countOfItems; index++) {
          let li = document.createElement('li');
          li.innerHTML = index;
          pagination.appendChild(li)
          pagination_element.push(li); 
        }
        if (pagination_element.length) {
          pagination_element[0].classList.add('active');
        }
        //--- add pagina

      for (let items of pagination_element) {
        items.addEventListener('click', showPage)     
      }

  } 
  
 const renderSort = (item) => {
   console.log(renderCard.getPagination_element);
  let notesOnPage = notesOnPages;
  goodsWrapper.textContent='';
  if(item.length) {      
    item.slice(0, notesOnPage).forEach(element => {       
      goodsWrapper.appendChild(creatCard(element[1], element.name, element["2020-11-02"], element.avatar));
    });
  }
  else {
    goodsWrapper.textContent = 'Результатов не найдено ❗ ';
  } 
 }

  const showPage = (e) => {
    let notesOnPage = notesOnPages;
    

    let active = document.querySelector('#pagination li.active');
      if (active) {
        active.classList.remove('active');
      }
      e.target.classList.add('active');
      let pageNum = +e.target.textContent;
      let start = (pageNum - 1)*notesOnPage;
      let end = start + notesOnPage;
      
      getGoods( item => {
          
          let notes = item.slice(start, end);
          console.log(notes);
          goodsWrapper.textContent='';
          if(notes.length) {
            notes.forEach(element => {
              goodsWrapper.appendChild(creatCard(element[1], element.name, element["2020-11-02"], element.avatar));
            });
          }
          else {
              goodsWrapper.textContent = 'Результатов не найдено ❗ ';
          } 
        });
      
  }   
  const creatCard = (id, title, price, img) => {
    const card = document.createElement('div');
    card.className = 'data_item';
    card.innerHTML = `
    <div class="data_id">${id}</div>
    <div class="data_date">${price}</div>
    <div class="data_name">${title}</div>
    <div class="data_avatar"><img src="${img}" alt="avatar"></div>
  `
  return card;
  }

  const searchItem = e => {
    e.preventDefault();
    const input = e.target.elements.searchGoods.value.trim();
    if (input !== '') {      
      
      const searchString = new RegExp(input, 'i');
      getGoods(renderCard, item => {
       return item.filter(ifilter => searchString.test(ifilter["2020-11-02"]) || searchString.test(ifilter.name))
      });
    }
    console.log(e.target.elements);
    e.target.elements.searchGoods.value = '';
   
  }
  
  const sort1 = (e) => {
    let active = document.querySelector('#pagination li.active');
    let li = document.querySelectorAll('#pagination li');
   

    const target = e.target;
    if (target.classList.contains('up')) {
      if (active) {
        active.classList.remove('active');
      }
      li[li.length - 1].classList.add('active');
      target.classList = 'data_id down';
      getGoods(renderSort, item => {
        return  item.sort( (a,b) =>   b[1] - a[1] );
       });
    } else {
      if (active) {
        active.classList.remove('active');
      }
      li[0].classList.add('active');
      target.classList = 'data_id up';
      getGoods(renderSort, item => {
        return  item.sort( (a,b) =>   a[1] - b[1] );
       });
    }    
  }
  const sort2 = (e) => {
    let active = document.querySelector('#pagination li.active');
    let li = document.querySelectorAll('#pagination li');
    const target = e.target;
    if (target.classList.contains('up')) {
      if (active) {
        active.classList.remove('active');
      }
      li[0].classList.add('active');
      target.classList = 'data_name down';
      if (data_id.classList.contains('up')) {data_id.classList = 'down data_id'}
      getGoods(renderSort, item => {
        return  (
          item.sort( (a,b) =>  {
            if (a.name.toLowerCase() < b.name.toLowerCase())
            return -1
          } )
        )
       });
    } else {
      target.classList = 'data_name up';
      getGoods(renderSort, item => {
        return  item.sort( (a,b) => {
         
          return 1
        } );
       });
    }    
  }
   
  getGoods(renderCard);
  
  search.addEventListener('submit', searchItem);
  data_id.addEventListener('click', sort1);
  data_name.addEventListener('click', sort2);

///////////////////////////////////////////////////// MENU
 $('.nav_mob').hide();//?
      $('.mob').on('click', function(){
        $('.nav_mob').slideToggle();
        $('.mob span').toggleClass('active');
      });

})