import { StatisticsList } from './Statistics.styled';

export const Statistics = ({
  goodCount,
  neutralCount,
  badCount,
  total,
  positivePerc,
}) => {
  return (
    <StatisticsList>
      <li>Good: {goodCount}</li>
      <li>Neutral: {neutralCount}</li>
      <li>Bad: {badCount}</li>
      <li>Total: {total()}</li>
      <li>Posivive feedback: {positivePerc() || 0}%</li>
    </StatisticsList>
  );
};
