import React, { useState } from 'react';
import { Button, TextField } from '@material-ui/core';
import './CreateFundraiser.css';

const CreateFundraiser = () => {
  const [containerState, setContainerState] = useState({
    title: '',
    description: '',
    profileImage: '',
    QNA: [],
    goal: 0,
    currentStep: 0,
  });
  /**
   * Step 1:
   *   - Ask for title and description
   * Step 2:
   *  - Ask for profile image
   * Step 3:
   * - Ask for QNA
   * Step 4:
   * - Ask for goal
   *
   */
  const resetState = () => {
    setContainerState({
      title: '',
      description: '',
      profileImage: '',
      QNA: [],
      goal: 0,
      currentStep: 0,
    });
  };

  const backState = () => {
    setContainerState(prev => {
      return {
        ...prev,
        currentStep: prev.currentStep - 1,
      };
    });
  };

  const nextStep = () => {
    setContainerState(prev => {
      return {
        ...prev,
        currentStep: prev.currentStep + 1,
      };
    });
  };

  const addQNA = () => {
    setContainerState(prev => {
      return {
        ...prev,
        QNA: [
          ...prev.QNA,
          { question: 'Add a question', answer: 'Add an answer' },
        ],
      };
    });
  };
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  const handleChange = e => {
    setContainerState(prev => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  return (
    <div className="fundraiser-container">
      <h2 className="title-container">
        {containerState.currentStep === 0
          ? 'Create Fundraiser'
          : containerState.currentStep === 1
          ? 'Add Profile Image'
          : containerState.currentStep === 2
          ? 'Add QNA'
          : containerState.currentStep === 3
          ? 'Add Goal'
          : 'Done'}
      </h2>
      {containerState.currentStep === 0 ? (
        <div className="fundraiser-container-content">
          <div className="content-left">
            <TextField
              id="outlined-basic"
              label="Outlined"
              variant="outlined"
              name="title"
              value={containerState.title}
              onChange={handleChange}
            />
            <TextField
              variant="outlined"
              id="outlined-multiline-static"
              label="Multiline"
              multiline
              rows={15}
              maxRows={20}
              defaultValue="Default Value"
              name="description"
              value={containerState.description}
              onChange={handleChange}
              // style={{
              //   border: '1px solid black',
              // }}
            />
          </div>
          <div className="content-right">
            <h3>Title and Description</h3>
            <Button
              variant="contained"
              style={{
                border: '1px solid #648463',
                backgroundColor: '#fff',
                color: '#648463',
              }}
              onClick={resetState}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              color="primary"
              style={{
                backgroundColor: '#648463',
              }}
              onClick={() => {
                setContainerState(prev => {
                  return {
                    ...prev,
                    currentStep: prev.currentStep + 1,
                  };
                });
              }}
            >
              Next
            </Button>
          </div>
        </div>
      ) : containerState.currentStep === 1 ? (
        <div className="fundraiser-container-content">
          <div className="content-left">
            <div className="photoUpload">
              <img src="./upload.svg" alt="" />
            </div>
          </div>
          <div className="content-right">
            <h3>Upload an Image</h3>
            <Button
              variant="contained"
              style={{
                border: '1px solid #648463',
                backgroundColor: '#fff',
                color: '#648463',
              }}
              onClick={() => {
                backState();
              }}
            >
              Back
            </Button>
            <Button
              variant="contained"
              color="primary"
              style={{
                backgroundColor: '#648463',
              }}
              onClick={() => {
                nextStep();
              }}
            >
              Skip
            </Button>
          </div>
        </div>
      ) : containerState.currentStep === 2 ? (
        <div className="fundraiser-container-content">
          <div className="content-left" style={{}}>
            {containerState.QNA.map((item, index) => {
              return (
                <div className="question-answer" key={index}>
                  <div className="question">
                    <TextField
                      id="outlined-basic"
                      label="Question"
                      variant="outlined"
                      name="question"
                      value={item.question}
                      onChange={e => {
                        setContainerState(prev => {
                          return {
                            ...prev,
                            QNA: prev.QNA.map((item, i) => {
                              if (i === index) {
                                return {
                                  ...item,
                                  question: e.target.value,
                                };
                              }
                              return item;
                            }),
                          };
                        });
                      }}
                      fullWidth
                    />
                  </div>
                  <div className="answer">
                    <TextField
                      id="outlined-basic"
                      label="Answer"
                      variant="outlined"
                      name="answer"
                      value={item.answer}
                      onChange={e => {
                        setContainerState(prev => {
                          return {
                            ...prev,
                            QNA: prev.QNA.map((item, i) => {
                              if (i === index) {
                                return {
                                  ...item,
                                  answer: e.target.value,
                                };
                              }
                              return item;
                            }),
                          };
                        });
                      }}
                      fullWidth
                    />
                  </div>
                </div>
              );
            })}

            <div
              className="createQuestionButton"
              onClick={() => {
                addQNA();
              }}
            >
              + Question
            </div>
          </div>
          <div className="content-right">
            <h3>Create QnA</h3>
            <Button
              variant="contained"
              style={{
                border: '1px solid #648463',
                backgroundColor: '#fff',
                color: '#648463',
              }}
              onClick={() => {
                backState();
              }}
            >
              Back
            </Button>
            <Button
              variant="contained"
              color="primary"
              style={{
                backgroundColor: '#648463',
              }}
              onClick={() => {
                nextStep();
              }}
            >
              Next
            </Button>
          </div>
        </div>
      ) : containerState.currentStep === 3 ? (
        <div className="fundraiser-container-content">
          <div className="content-left" style={{}}>
            <div className="question-answer" style={{}}>
              <div className="question">
                <TextField
                  id="outlined-basic"
                  label="Goal"
                  variant="outlined"
                  name="goal"
                  value={containerState.goal}
                  onChange={handleChange}
                  fullWidth
                />
              </div>
            </div>
          </div>
          <div className="content-right">
            <h3>Create QnA</h3>
            <Button
              variant="contained"
              style={{
                border: '1px solid #648463',
                backgroundColor: '#fff',
                color: '#648463',
              }}
              onClick={() => {
                backState();
              }}
            >
              Back
            </Button>
            <Button
              variant="contained"
              color="primary"
              style={{
                backgroundColor: '#648463',
              }}
              onClick={() => {
                nextStep();
              }}
            >
              Next
            </Button>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default CreateFundraiser;
