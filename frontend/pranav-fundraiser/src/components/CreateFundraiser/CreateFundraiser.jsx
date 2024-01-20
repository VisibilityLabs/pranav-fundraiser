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
          { question: '', answer: '' },
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
      <div className='fundraiser-container-contents'>
        <div className='container-title'>
          <h1>Create Fundraiser</h1>
        </div>
        <div className='fundraiser-content'>
          <div className='fundraiser-left-content'>
            <div className='container-form-controller'>
              
              <TextField
                name='title'
                label='Title'
                variant='outlined'
                value={containerState.title}
                onChange={handleChange}
              />

              <TextField
                name='description'
                label='Description'
                variant='outlined'
                value={containerState.description}
                onChange={handleChange}
                rows={10}
                multiline
              />
              
              <h4> Create QnA </h4>

              {
                containerState.QNA.map((item, index) => {
                  return (
                    <div key={index + "QNA_chip"} className='QnA-chip'>
                      <TextField
                        name='question'
                        label='Question'
                        variant='outlined'
                        value={item.question}
                        onChange={(e) => {
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
                      />
                      <TextField
                        name='answer'
                        label='Answer'
                        variant='outlined'
                        value={item.answer}
                        onChange={(e) => {
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
                      />
                    </div>
                  );
                })  
              }
              <div 
              //className='createQuestionButton'
                            >
              <Button
                variant='contained'
                color='primary'
                onClick={addQNA}
              >
                + Add QnA
              </Button>
              </div>
            </div>
          </div>
          <div className='fundraiser-right-content'>
            <div className='upload-container'>
              <div className='upload-image'>
                <img src="/upload.svg" alt="" />
                <p>Upload Image</p>
              </div>
            </div>
            <div className='goal-container'>
              <h5>How much you would like to raise?</h5>
              <TextField
                name='goal'
                label='Goal'
                variant='outlined'
                value={containerState.goal}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateFundraiser;
