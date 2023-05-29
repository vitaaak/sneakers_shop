import React, {useCallback, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";

import Categories from "../components/Categories";
import Sort from "../components/Sort";
import LoadingSneakersBlock from "../components/SneakersBlock/LoadingSneakersBlock";
import IndexSneakersBlock from "../components/SneakersBlock/indexSneakersBlock";
import { setCategories, setSortBy } from "../redux/actions/filters";
import { fetchSneakers } from "../redux/actions/sneakers";
import { addSneakersToCart} from '../redux/actions/cart';
import Footer from '../components/Footer';

const arrCategories = ["Jordan", "Dunk", "Mag" ];
const sortItems = [
        { name:'популярности', type:'popular'},
        { name:'цене', type: 'price'},
    ];

function HomePage() {
    const dispatch = useDispatch();
    const items = useSelector(({ sneakers }) => sneakers.items );
    const isLoaded = useSelector(({ sneakers }) => sneakers.isLoaded );
    const { categories, sortBy } = useSelector(({ filters }) => filters );

    useEffect(() => {
            dispatch(fetchSneakers(sortBy, categories));
    }, [categories, sortBy]);

    const onSelectCategories = useCallback((index) => {
        dispatch(setCategories(index))
    },  []);

    const onSelectSortType = useCallback((type) => {
        dispatch(setSortBy(type))
    },  [ dispatch ]);

    const handleAddSneakersToCart = (obj) => {
        dispatch(addSneakersToCart(obj))
    }

    return (
        <div className= "wrapper">
            <section className="content">
                <div className="container">
                    <Categories activeCategories={categories}
                                onClickCategories={ onSelectCategories }
                                items={arrCategories}/>
                    <Sort activeSortType={sortBy}
                          items={ sortItems }
                          onClickSortType={onSelectSortType}
                    />
                </div>
            </section>
            <section className="sneakersBlock">
                <div className="sneakersBlock-container">
                    {
                        isLoaded ?
                        items.map( obj => <IndexSneakersBlock
                                            onClickAddSneakers={ handleAddSneakersToCart }
                                            key={ obj.id }
                                            //addedCount={cartItems[obj.id] && cartItems[obj.id].items.length}
                                            { ...obj }
                                            /> )
                            : Array(10)
                                .fill(0)
                                .map((_, index) => <LoadingSneakersBlock key={index} />)
                    }
                </div>
            </section>

            <Footer/>
        </div>
    )
}

export default HomePage;