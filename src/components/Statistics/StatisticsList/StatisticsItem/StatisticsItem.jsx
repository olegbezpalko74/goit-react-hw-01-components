import PropTypes from 'prop-types';
import { Item, Label, Numbers } from './StatisticsItem.styled';

export const StatisticsItem = ({ label, percentage }) => {
  return (
    <Item>
      <Label>{label}</Label>
      <Numbers>{percentage}</Numbers>
    </Item>
  );
};

StatisticsItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};