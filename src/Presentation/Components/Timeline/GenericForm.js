import React from 'react'
import '../../CSS/TimelineForm.css';
import 'semantic-ui-css/semantic.min.css'
import { Button, Icon } from 'semantic-ui-react'


function GenericForm({ title, divId, isEditable, items, renderItems }) {
    return (
        <div id={divId} className='grid_item'>
            <div className='header'>
                <div className='header_cell'>
                    <h3 className='sectionTitle'>{title}</h3>
                    <Button icon>
                        <Icon name='edit' />
                    </Button>
                    <Button icon >
                        <Icon name='add' />
                    </Button>
                </div>
            </div>
            <div className='sectionDiv'>
                {renderItems(items)}
            </div>
        </div>
    );
}

export default GenericForm