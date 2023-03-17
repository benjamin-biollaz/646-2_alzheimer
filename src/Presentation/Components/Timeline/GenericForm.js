import React, { useState } from 'react'
import '../../CSS/TimelineForm.css';
import 'semantic-ui-css/semantic.min.css'
import { Button, Icon } from 'semantic-ui-react'

/**
 * This component is used to display the periods, locations and events of a timeline.
 * It takes several functions as props to be flexible enough
 */
function GenericForm({ title, divId, items, renderItems, renderAddForm, submitModifications }) {

    const [isEditableState, setIsEditable] = useState(false);
    const [isAddableState, setIsAddable] = useState(false);

    const toggleView = () => {
        setIsEditable(!isEditableState);
    };
    const toggleAdd = () => {
        setIsAddable(!isAddableState);
    }

    const sendModifications = () => {
        submitModifications();
        toggleView();
    }

    return (
        <div id={divId} className='grid_item'>
            <div className='header'>
                <div className='header_cell'>
                    <h3 className='sectionTitle'>{title}</h3>
                    {isAddableState ?
                        <Button icon onClick={toggleView}>
                            <Icon name='edit' size='small' />
                        </Button>

                        :
                        isEditableState ?
                            <span>
                                <Button icon onClick={sendModifications}>
                                    <Icon name='check circle' size='small' color='green' />
                                </Button>

                                <Button icon onClick={toggleAdd}>
                                    <Icon name='add' size='small' />
                                </Button>
                            </span>
                            :
                            <Button icon onClick={toggleView}>
                                <Icon name='edit' size='small' />
                            </Button>

                    }
                </div>
            </div>
            {isAddableState ? (
                <div className='sectionDiv'>
                    {renderAddForm()}
                </div>
            )
                : (<div className={isEditableState ? 'sectionDiv' : 'sectionDiv greyBackground'}>
                    {renderItems(items, isEditableState)}
                </div>)}
        </div>
    );
}

export default GenericForm