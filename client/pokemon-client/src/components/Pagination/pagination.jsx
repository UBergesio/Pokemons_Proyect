import style from "./Pagination.module.css";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
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
        Página {currentPage} de {totalPages}
      </span>
      <button
        className={style.btn}
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Siguiente
      </button>
    </div>
  );
};

export default Pagination;