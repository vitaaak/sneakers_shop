import React, { memo } from "react";
import PropTypes from 'prop-types';

const Categories = memo( function Categories ({ activeCategories, items, onClickCategories }) {

    return (
        <div className="content-categories">
            <ul>
                <li className={activeCategories === null ? 'active' : ''} onClick={() => onClickCategories(null)} >
                    все
                </li>
                {
                    items &&
                    items.map((name, index) =>
                        <li className={activeCategories === index ? 'active' : ''}
                            onClick={() => onClickCategories(index)}
                            key={`${name}_${index}`}>
                            {name}
                        </li>)
                }
            </ul>
        </div>
    )
});

Categories.prototype = {
    activeCategories: PropTypes.oneOf([PropTypes.number, null]),
    items: PropTypes.arrayOf(PropTypes.string).isRequired,
    onClickCategories: PropTypes.func.isRequired
};

Categories.defaultProps = {
    activeCategories: null,
    items: []
}

export default Categories;



