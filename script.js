const handleImageChange = (offSet) => { 

    const activeSlide = document.querySelector('.isActive') 
    const slides = [...document.querySelectorAll('.advantages__slider-item')]  // получаем список со слайдами и переводим его в массив
    const currentIndex = slides.indexOf(activeSlide) // ищем в нем номер индекса активного слайда
    /*
    nodeList - это массивоподобная коллекция узлов, которая возвращается методом document.querySelectorAll().
    Сходство с обычным массивом заключается в том, что по nodeList можно проитерировать методом forEach(), 
    а различия в том, что для nodeList недоступны такие методы массивов, как map(), filter() и reduce().
    Для обхода этого ограничения мы можем преобразовать nodeList в массив, используя spread оператор (const arr = [...divList];)
     или метод Array.from() - const arr = Array.from(divList);
    */

    let newIndex = currentIndex + offSet;
    let newIndicator = newIndex;

    if (newIndex < 0) {
        newIndex = slides.length - 1
        newIndicator = newIndex
    }

    if (newIndex >= slides.length) {
        newIndex = 0
        newIndicator = 0
    }

    slides[newIndex].classList.add('isActive')
    activeSlide.classList.remove('isActive')
}

const onNext = () => handleImageChange(1)
const onPrev = () => handleImageChange(-1)