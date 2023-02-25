import React from 'react';
import ReactDOM from 'react-dom';

function ArrayAccessThrouProps(props) {
    console.log(props);
    const list = props.menuitems;

    const updateList = list.map((i)=>{
        return( <li>
                    {i}
                </li> );
    });
    return ( <ul>{updateList}</ul> );
}
const menuitems = [1,2,3,4,5];

function AppExample()
{
    return(
        <div>
            <ArrayAccessThrouProps menuitems = {menuitems} />
            

        </div>
    )
};