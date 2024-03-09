import { PopupWrapper, PopupItem, PopupText, ArrowCircleBrocken } from './styled';
import { useSelector, useDispatch } from 'react-redux';
import { selectColumns } from 'store/dashboards/dashboardsSelectors';
import { changeColumn } from 'store/dashboards/dashboardsOperations';

const CardMovePopUp = ({ card, columnName }) => {
  const dispatch = useDispatch();
  const columns = useSelector(selectColumns);

  const filteredColumnNames = columns.filter(item => item.title !== columnName);


  const checkTextLength = text => {
    const str = text && text.split('');

    if (str.length <= 12) {
      return str.join('');
    }
    return str.splice(0, 8).join('') + '...';
  };

  const handleChangeColumn = (cardId, columnId, currentOwner) => {
    dispatch(changeColumn({ cardId, columnId, currentOwner }));
  };

  return (
    <PopupWrapper>
      {filteredColumnNames.map(item => (
        <PopupItem
          onClick={() => handleChangeColumn(card._id, item._id, card.owner)}
          key={item._id}
        >
          <PopupText>{checkTextLength(item.title)}</PopupText>

          <ArrowCircleBrocken />
        </PopupItem>
      ))}
    </PopupWrapper>
  );
};

export default CardMovePopUp;