import React from "react";
import Button from "../Button/Button";
import "./index.css";

const Pagination = ({ pagination, handleNext, handlePrevious }) => {
  return (
    <div>
      {pagination.total_data <= 5 ? (
        <div className="d-flex flex-row gap-5 justify-content-center align-items-center mt-5">
          <h3 className="pagination mb-0">
            Show 1-5 from {pagination.total_data}
          </h3>
        </div>
      ) : pagination.page_prev === 0 ? (
        <div className="d-flex flex-row gap-5 justify-content-center align-items-center mt-5">
          <h3 className="pagination mb-0">
            Show 1-5 from {pagination.total_data}
          </h3>
          <Button text="Next" onClick={handleNext} />
        </div>
      ) : pagination.page_next === 0 ? (
        <div className="d-flex flex-row gap-5 justify-content-center align-items-center mt-5">
          <Button text="Previous" onClick={handlePrevious} />
          <h3 className="pagination mb-0">
            Show 1-5 from {pagination.total_data}
          </h3>
        </div>
      ) : (
        <div className="d-flex flex-row gap-5 justify-content-center align-items-center mt-5">
          <Button text="Previous" onClick={handlePrevious} />
          <h3 className="pagination mb-0">
            Show 1-5 from {pagination.total_data}
          </h3>
          <Button text="Next" onClick={handleNext} />
        </div>
      )}
    </div>
  );
};

export default Pagination;
