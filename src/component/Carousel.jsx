import React, { useState } from 'react';
const Carousel = ({ items, list_item}) => {
    const [checked, setChecked] = useState(false)
    console.log(list_item)
    const handleCheck = () => {
        setChecked(prev => !prev)
    }
    const onChangeHandle = () => {
        if(checked) {
            list_item.push(items)
        }
        else {
            list_item = list_item.filter(item => item.id == items.id)
        }
    }
    return (
    <div onClick={handleCheck} className=' flex gap-2 items-center'>
        <input onChange={onChangeHandle} value={checked} checked={checked} type='checkbox'></input>
        {/* <img className=' object-cover object-center' src={items.img}></img> */}
        <p className=' text-base'>{items.text}</p>
    </div>
  );
};

export default Carousel;
