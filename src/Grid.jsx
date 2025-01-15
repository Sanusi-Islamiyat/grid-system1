import { range } from './utils';
import "./styling.css";
import Proptypes from 'prop-types';

function Grid({ numRows, numCols }) {
  const gridRowColumn = numRows * numCols;
  const gridBox = range(0, gridRowColumn).map((index) => (
    <div key={index} className="grid-item"></div>
  ));
  return (
    <div className="main-container">
      <div className="grid-container">
        {gridBox}
      </div>
    </div>
  );
}

Grid.propTypes = {
  numRows: Proptypes.number.isRequired,
  numCols: Proptypes.number.isRequired,
}

export default Grid;
