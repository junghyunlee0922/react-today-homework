import React, { useId, useState } from 'react';

function  Zicoba() {
  return (
    <>
    <FormControlExample />
    </>
  )
}

/* -------------------------------------------------------------------------- */

function FormControlExample() {
  return (
    <div className='mx-300pxr my-100pxr'>
      <h1 className='text-30pxr'>지코바 추가 메뉴 선택</h1>
      <Form />
    </div>
  )
}

const AddPlusMenu = {
  addMenu: '떡사리 추가, 마요네즈 추가, 밥 추가'.split(', '),
}

const INITIAL_ORDER = {
  addMenu: [],
};

function Form() {
  const [menuState, setMenuState] = useState(INITIAL_ORDER);

  const handleChangeZicobaMenu = (e) => {
    const { value: PlusMenu, checked: isChecked } = e.target;

    let nextMenu = [];

    if (isChecked){
      nextMenu = [...menuState.addMenu, PlusMenu];
    } else{
      nextMenu = menuState.addMenu.filter((t) => t !== PlusMenu);
    }

    const nextMenuState = {
      ...menuState,
      addMenu: nextMenu,
    };

    setMenuState(nextMenuState);
  };

  const handleOrder = (e) => {
    e.preventDefault();
    console.log(setMenuState);
  };

  const id = useId();

  const checkMenu = menuState.addMenu.sort();

  return(
    <form 
    className='text-25pxr'
    onSubmit={handleOrder}
    checked={menuState.addMenu}
    onChange={handleChangeZicobaMenu}
    >
      <div>
        <input type="checkbox" id={id} value='떡사리 추가' />
        <label htmlFor={id}>떡사리 추가</label>
      </div>
      <div>
        <input type="checkbox" id={id} value='마요네즈 추가' />
        <label htmlFor={id}>마요네즈 추가</label>
      </div>
      <div>
        <input type="checkbox" id={id} value='밥 추가' />
        <label htmlFor={id}>밥 추가</label>
      </div>
      <span>{checkMenu}</span>
    </form>
  )
}


export default Zicoba;