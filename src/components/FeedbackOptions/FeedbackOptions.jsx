import { FeedbackOptionsList } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  return (
    <FeedbackOptionsList>
      {options.map(option => {
        return (
          <li key={option}>
            <button onClick={() => onLeaveFeedback(option)}>{option}</button>
          </li>
        );
      })}
    </FeedbackOptionsList>
  );
};
