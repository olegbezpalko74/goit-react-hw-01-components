import PropTypes from 'prop-types';
import { StatisticsItem } from './StatisticsItem/StatisticsItem';
import { List } from './StatisticsList.styled';

export const StatisticsList = ({ stats }) => {
  return (
    <List>
      {stats.map(({ id, label, percentage }) => {
        return (
          <StatisticsItem key={id} label={label} percentage={percentage} />
        );
      })}
    </List>
  );
};

StatisticsList.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};