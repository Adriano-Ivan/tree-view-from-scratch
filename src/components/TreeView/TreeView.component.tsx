import React, { Fragment } from "react";
import TreeItem from '../TreeItem/TreeItem.component';

interface TreeViewProps {
    treeData: any[]
}
const TreeView = ({treeData}: TreeViewProps) => {

    return (
        <Fragment>
            <h2>Filtro</h2>
            <section className='section-filter'>
                {
                    treeData.map((item, i)=>(
                        <TreeItem key={i} treeItemIsChecked={false} {...item}/>
                    ))
                }
            </section>
        </Fragment>
    )
}

export default TreeView;