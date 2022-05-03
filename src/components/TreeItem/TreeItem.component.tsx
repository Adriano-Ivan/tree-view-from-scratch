import React, { useState } from "react";
import { Fragment } from "react";
import './TreeItem.styles.css';

interface TreeItemProps {
    label: string,
    internCourses: any[],
    treeItemIsChecked:boolean,
}

const TreeItem = ({label, internCourses,treeItemIsChecked}:TreeItemProps) => {
    const [open, setOpen] = useState(false);
    const [isChecked, setIsChecked] = useState(treeItemIsChecked);

    const toggleOpen = () =>
    {
        setOpen(!open);
    }

    const toggleCheckedAndOpen = ()=>{
        setOpen(!open);
        setIsChecked(!isChecked);
    }

    return (
        <div className='item-tree'>
            {internCourses.length > 0 && <span onClick={toggleOpen}>&gt;</span>}

            <input  onClick={toggleCheckedAndOpen} checked={isChecked ? true: false} type='checkbox'/> {label}
            <div className='item-tree-list'>
                {
                    internCourses.map((item)=>{
                        return <Fragment>{
                                open
                                 &&
                                <TreeItem key={item.id} 
                                 treeItemIsChecked={isChecked} {...item}/>
                        }
                       </Fragment>
                    })
                }
            </div>
        </div>
    )
}

export default TreeItem;