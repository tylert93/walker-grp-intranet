import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { db } from '../../../services/firebase';
import Wrapper from '../../partials/Wrapper';
import { useParams, useHistory } from 'react-router-dom';
import { useAuth } from '../../../contexts/AuthContext';
import ViewHeader from '../../misc/ViewHeader';
import '../../../css/goals/create.css';

const CreateGoals = (props) => {
  const [goalText, setGoalText] = useState();
  const { _userId } = useParams();
  const history = useHistory();

  const onGoalChange = (value) => {
    setGoalText(value);
  };

  const createNewGoal = () => {
    try {
      db.collection('goals').add({
        userId: _userId,
        created: new Date(),
        text: goalText,
        rating: null,
        comments: {
          author: '',
          supervisor: '',
        },
        complete: false,
      });

      history.push(`/${_userId}/goals`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Wrapper>
      <ViewHeader title="Set Goals" />

      <div className="row">
        <div className="d-flex justify-content-end w-100 mb-3">
          <Link to={`/${_userId}/goals`}>
            <button type="button" className="btn btn-success">
              <i className="fas fa-arrow-left mr-2"></i>
              Back to goals
            </button>
          </Link>
        </div>

        <div className="form-container col-10 mx-auto">
          <form>
            <div className="form-group">
              <label htmlFor="goal-1">
                <strong>Goal</strong>
              </label>
              <textarea
                className="form-control"
                id="goal-1"
                aria-describedby="goal-1"
                value={goalText}
                onChange={(e) => {
                  onGoalChange(e.target.value);
                }}
              ></textarea>
            </div>
          </form>

          <div className="d-flex justify-content-end">
            <button
              type="submit"
              className="btn btn-primary"
              onClick={createNewGoal}
            >
              Create
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default CreateGoals;
