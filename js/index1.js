document.addEventListener('DOMContentLoaded', () => {
  const goodsWrapper = document.querySelector('.data__body');
  const search = document.querySelector('.search');
  const data_id = document.querySelector('#data_id');
  const data_name = document.querySelector('#data_name');
  let pagination = document.querySelector('#pagination');
 

  const getGoods = (handler, filter) => {
    fetch('https://5fa00a5ae21bab0016dfcc6a.mockapi.io/api/payoola/test').then((response) => {
    //  console.log(response.json());
      return response.json();
      
     }).then(filter).then(handler);
  }
  
  const renderCard = (item) => {
    // pagina
    let notesOnPage = 10;
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



    
    let showPage = (e) => {
      let active = document.querySelector('#pagination li.active');
        if (active) {
          active.classList.remove('active');
        }
        e.target.classList.add('active');
        let pageNum = +e.target.textContent;
        let start = (pageNum - 1)*notesOnPage;
        let end = start + notesOnPage;
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
    }


      for (let index = 1; index <= countOfItems; index++) {
        let li = document.createElement('li');
        li.innerHTML = index;
        pagination.appendChild(li)
        pagination_element.push(li); 
       }



 
    for (let items of pagination_element) {
      items.addEventListener('click', (e) => {
        showPage(e);
      })
      
    }
    
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
    const target = e.target;
    if (target.classList.contains('up')) {
      target.classList = 'data_id down';
      getGoods(renderCard, item => {
        return  item.sort( (a,b) =>   b[1] - a[1] );
       });
    } else {
      target.classList = 'data_id up';
      getGoods(renderCard, item => {
        return  item.sort( (a,b) =>   a[1] - b[1] );
       });
    }    
  }
  const sort2 = (e) => {
    const target = e.target;
    if (target.classList.contains('up')) {
      target.classList = 'data_name down';
      if (data_id.classList.contains('up')) {data_id.classList = 'down data_id'}
      getGoods(renderCard, item => {
        return  (
          item.sort( (a,b) =>  {
            if (a.name.toLowerCase() < b.name.toLowerCase())
            return -1
          } )
        )
       });
    } else {
      target.classList = 'data_name up';
      getGoods(renderCard, item => {
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
})