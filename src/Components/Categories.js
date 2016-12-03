import React from 'react';
import  '../styles/Category.css';
import Category from './Category.js'

class Categories extends React.Component {
    render() {
        const categories = this.getCategories();
        return (
            <ul className="Categories">
                {categories || []}
            </ul>
        );
    }

    getCategories() {
        return this.props.categories.map((cat, index) => {
            if(!cat.parentId) {
                return (
                    <Category delete={this.props.deleteCategory} update={this.props.update} key={cat.name + index}
                              cat={cat} index={index}/>);
            }
        });
    }
}


export default Categories;
