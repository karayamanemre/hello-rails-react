import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchGreeting } from '../store';

const Greeting = ({ greeting, dispatch }) => {
  useEffect(() => {
    dispatch(fetchGreeting());
  }, [dispatch]);

  return (
    <div>
      <h1>Greeting</h1>
      <p>{greeting}</p>
    </div>
  );
};

const mapStateToProps = (state) => ({
  greeting: state.greeting,
});

export default connect(mapStateToProps)(Greeting);
