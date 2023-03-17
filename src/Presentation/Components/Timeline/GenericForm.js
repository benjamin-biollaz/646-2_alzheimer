import React, { useState } from 'react'
import '../../CSS/TimelineForm.css';
import 'semantic-ui-css/semantic.min.css'
import { Button, Icon } from 'semantic-ui-react'



function GenericForm({ title, divId, isEditable, isAddable, items, renderItems, renderForm }) {
    const [isEditableState, setIsEditable] = useState(isEditable);
    const [isAddableState, setIsAddable] = useState(isAddable);
    const toggleView = () => {
        setIsEditable(!isEditableState);
    };
    const toggleAdd = () => {
        setIsAddable(!isAddableState);
    }

    return (
        <div id={divId} className='grid_item'>
            <div className='header'>
                <div className='header_cell'>
                    <h3 className='sectionTitle'>{title}</h3>
                    <Button icon onClick={toggleView}>
                        <Icon name='edit' />
                    </Button>
                    <Button icon onClick={toggleAdd}>
                        <Icon name='add' />
                    </Button>
                </div>
            </div>
            {isAddableState ? (
            <div className='sectionDiv'> 
                {renderForm(isAddableState)}
            </div>    
            )
            : (<div className={isEditableState ? 'sectionDiv' : 'sectionDiv greyBackground'}>
                {renderItems(items, isEditableState)}
            </div>)}
        </div>
    );
}

export default GenericForm