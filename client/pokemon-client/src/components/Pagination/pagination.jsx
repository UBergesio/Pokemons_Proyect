import style from "./Pagination.module.css";

const Pagination = ({ currentPage, totalPages, onPageChange, totalPagesFilter }) => {
    let pokemonListToRender;

    if (totalPagesFilter) {
      pokemonListToRender = totalPagesFilter;
    } else {
      pokemonListToRender = totalPages;
    }

  
  
  return (
    <div>
      <button
        className={style.btn}
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Anterior
      </button>
      <span>
        Página {currentPage} de {pokemonListToRender}
      </span>
      <button
        className={style.btn}
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === pokemonListToRender}
      >
        Siguiente
      </button>
    </div>
  );
};

export default Pagination;