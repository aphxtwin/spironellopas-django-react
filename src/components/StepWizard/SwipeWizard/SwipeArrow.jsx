import React, { useState } from 'react';
import AnteriorButton from '../../Buttons/AnteriorButton/AnteriorButton';
import { useSwipeable } from "react-swipeable";

const SwipeContainer = ({children, handlePrevStep})=> {
    
    const [isArrowVisible,setArrowVisibility] = useState(false)
    

      
    const swipeHandler = useSwipeable({
        onSwipedRight: () => {
            if (window.innerWidth <= 768){
                setArrowVisibility(true)
                handlePrevStep()
            }
        },
        onSwiped:()=>{
            setArrowVisibility(false)
        },  
    });
    
    return (
        <div {...swipeHandler}>
            {isArrowVisible && <AnteriorButton isVisible={isArrowVisible}/> }
            {children}
        </div>
    );
}

export default SwipeContainer
