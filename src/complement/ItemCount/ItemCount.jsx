import { useState } from "react"

const ItemCount = ({ handleClick, stock }) => {
    const [count, setCount] = useState(1);

    const handleAdd = () => {
    if(count > stock) {
        setCount(count + 1);
    }
        
};

    const handleSubtrac = () => {
            setCount(count - 1);
    };

    return (
        <div>
            <div>
                <button onClick={handleSubtrac}>-</button>
                <p> {count} </p>
                <button onClick={handleAdd}>+</button>
            </div>
            <div>
                <button onClick={ () => handleClick(count)} > Agregar al carrito</button>
            </div>
        </div>
    );
};
export default ItemCount;