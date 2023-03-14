import React, { useState } from 'react'
import '../../CSS/TimelineForm.css';
import 'semantic-ui-css/semantic.min.css'
import { Button, Icon } from 'semantic-ui-react'


function GenericForm({ title, divId, isEditable, items, renderItemsEditable, renderItemsReadonly }) {
    const [isReadOnly, setIsReadonly] = useState(!isEditable);
    const toggleView = () => {
        setIsReadonly(!isReadOnly);
    };

    return (
        <div id={divId} className='grid_item'>
            <div className='header'>
                <div className='header_cell'>
                    <h3 className='sectionTitle'>{title}</h3>
                    <Button icon onClick={toggleView}>
                        <Icon name='edit' />
                    </Button>
                    <Button icon >
                        <Icon name='add' />
                    </Button>
                </div>
            </div>
            <div className={isReadOnly ? 'sectionDiv greyBackground' : 'sectionDiv'}>
                {isReadOnly ? renderItemsReadonly(items) : renderItemsEditable(items)}
            </div>
        </div>
    );
}

export default GenericForm