import React from 'react';
import CategoryItemComponent from "../category-item/category-item.component";
import './categories-menu.styles.scss'

function CategoriesMenuComponent({categories}) {
    return (
        <div className='categories-container'>
            {categories.map((category) => (
                    <CategoryItemComponent category={category} key={category.id}/>
                )
            )}
        </div>
    );
}

export default CategoriesMenuComponent;