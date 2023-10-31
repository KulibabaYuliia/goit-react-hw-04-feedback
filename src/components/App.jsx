import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

import React, { useState } from 'react';

export const App = () => {
  const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });
  const { good, neutral, bad } = feedback;

  const feedbankAmountHandler = option => {
    setFeedback(prev => ({ ...prev, [option]: prev[option] + 1 }));
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / countTotalFeedback()) * 100);
  };

  return (
    <div
      style={{
        padding: '20px',
        color: '#010101',
      }}
    >
      <Section title="Please leave feedback">
        <FeedbackOptions
          onLeaveFeedback={feedbankAmountHandler}
          options={Object.keys(feedback)}
        />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            goodCount={good}
            neutralCount={neutral}
            badCount={bad}
            total={countTotalFeedback}
            positivePerc={countPositiveFeedbackPercentage}
          />
        )}
      </Section>
    </div>
  );
};
