import React from "react";
import { useSelector } from "react-redux";
// import qs from "qs";
// import { useNavigate } from "react-router-dom";
// import { sortList } from "../components/Sort";

import { Categories, Sort, Skeleton, Pagination } from "../components";
import PizzaBlock from "../components/PizzaBlock";
import { useAppDispatch } from "../redux/store";
import { selectFilter } from "../redux/filter/selectors";
import { selectPizzaData } from "../redux/pizza/selectors";
import {
  setCategoryId,
  setCurrentPage,
  // setFilters,
} from "../redux/filter/slice";
/** запрос на заполнения данных */
import { fetchPizzas } from "../redux/pizza/asyncActions";
// import { SearchPizzaParams } from '../redux/pizza/types';

function Home() {
  // const navigate = useNavigate();
  const dispatch = useAppDispatch();
  // const isMounted = React.useRef(false);
  /** данные по умолчанию (карточки pizza) */
  const { items, status } = useSelector(selectPizzaData);
  /** данные по умолчанию для фильтрации данных */
  const { categoryId, sort, currentPage, searchValue } =
    useSelector(selectFilter);

  /** сортировка по категориям */
  const onChangeCategory = React.useCallback((idx: number) => {
    dispatch(setCategoryId(idx));
  }, []);

  /** пагинация переключение по страницам */
  const onChangePage = (page: number) => {
    dispatch(setCurrentPage(page));
  };
  /** сработает при загрузке страницы */
  const getPizzas = async () => {
    /** параметры для данных по умолчанию start */
    const sortBy = sort.sortProperty.replace("-", "");
    const order = sort.sortProperty.includes("-") ? "asc" : "desc";
    const category = categoryId > 0 ? String(categoryId) : "";
    const search = searchValue;
    /** параметры для данных по умолчанию end */

    dispatch(
      fetchPizzas({
        sortBy,
        order,
        category,
        search,
        currentPage: String(currentPage),
      }),
    );
    window.scrollTo(0, 0);
  };

  // Если изменили параметры и был первый рендер
  React.useEffect(() => {
    // if (isMounted.current) {
    //   const params = {
    //     categoryId: categoryId > 0 ? categoryId : null,
    //     sortProperty: sort.sortProperty,
    //     currentPage,
    //   };

    //   const queryString = qs.stringify(params, { skipNulls: true });

    //   navigate(`/?${queryString}`);
    // }

    // const params = qs.parse(window.location.search.substring(1)) as unknown as SearchPizzaParams;
    // const sortObj = sortList.find((obj) => obj.sortProperty === params.sortBy);
    // dispatch(
    //   setFilters({
    //     searchValue: params.search,
    //     categoryId: Number(params.category),
    //     currentPage: Number(params.currentPage),
    //     sort: sortObj || sortList[0],
    //   }),
    // );

    getPizzas();
    // isMounted.current = true;
  }, [categoryId, sort.sortProperty, searchValue, currentPage]);

  // Парсим параметры при первом рендере
  // React.useEffect(() => {
  //   if (window.location.search) {
  //     const params = qs.parse(window.location.search.substring(1)) as unknown as SearchPizzaParams;
  //     const sort = sortList.find((obj) => obj.sortProperty === params.sortBy);
  //     dispatch(
  //       setFilters({
  //         searchValue: params.search,
  //         categoryId: Number(params.category),
  //         currentPage: Number(params.currentPage),
  //         sort: sort || sortList[0],
  //       }),
  //     );
  //   }
  //   isMounted.current = true;
  // }, []);

  /** рендеринг карточек с пиццей */
  const pizzas = items.map((obj: any) => <PizzaBlock key={obj.id} {...obj} />);
  /** preloader карточек */
  const skeletons = [...new Array(6)].map((_, index) => (
    <Skeleton key={index} />
  ));

  return (
    <div className="container">
      <div className="content__top">
        <Categories value={categoryId} onChangeCategory={onChangeCategory} />
        <Sort value={sort} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      {status === "error" ? (
        <div className="content__error-info">
          <h2>Произошла ошибка 😕</h2>
          <p>
            К сожалению, не удалось получить данные. Попробуйте повторить
            попытку позже.
          </p>
        </div>
      ) : (
        <div className="content__items">
          {status === "loading" ? skeletons : pizzas}
        </div>
      )}

      {/* пагинация по продуктам */}
      <Pagination currentPage={currentPage} onChangePage={onChangePage} />
    </div>
  );
}

export default Home;
