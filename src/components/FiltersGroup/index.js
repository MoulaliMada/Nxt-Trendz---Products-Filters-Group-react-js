import './index.css'

const FiltersGroup = props => {
  const {
    ratingsList,
    categoryOptions,
    onChangeSearchInput,
    inputValue,
    onClickingCategoryItem,
    onClickRatingItem,
    onClickingClearFilter,
  } = props

  const onchangesearch = event => {
    onChangeSearchInput(event.target.value)
  }

  const onClickCategory = categoryId => {
    onClickingCategoryItem(categoryId)
  }

  const onClickrating = ratingId => {
    onClickRatingItem(ratingId)
  }

  const clearFilters = () => {
    onClickingClearFilter()
  }

  return (
    <div className="filters-group-container">
      <div className="FiltersGroup-search-container">
        <input
          type="search"
          placeholder="Search"
          className="FiltersGroup-search-input"
          onChange={onchangesearch}
          value={inputValue}
        />
      </div>
      <div>
        <h1 className="FiltersGroup-category-heading">Category</h1>
        <ul className="FiltersGroup-category-ul">
          {categoryOptions.map(each => (
            <p
              className="FiltersGroup-category-list-item"
              onClick={() => onClickCategory(each.categoryId)}
              key={each.categoryId}
            >
              {each.name}
            </p>
          ))}
        </ul>
      </div>
      <div>
        <h1 className="FiltersGroup-category-heading">Rating</h1>
        <ul className="FiltersGroup-category-ul">
          {ratingsList.map(each => (
            <li
              className="FiltersGroup-rating-list-item"
              key={each.ratingId}
              onClick={() => onClickrating(each.ratingId)}
            >
              <img
                src={each.imageUrl}
                alt={`rating ${each.ratingId}`}
                className="FiltersGroup-rating-image"
              />
              <p className="FiltersGroup-rating-up">& up</p>
            </li>
          ))}
        </ul>
      </div>
      <button
        className="FiltersGroup-clear-filter-btn"
        type="button"
        onClick={clearFilters}
      >
        Clear Filters
      </button>
      {/* Replace this element with your code */}
    </div>
  )
}

export default FiltersGroup
