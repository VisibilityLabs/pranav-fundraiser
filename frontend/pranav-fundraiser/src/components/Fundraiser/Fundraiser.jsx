import React, { useEffect, useState } from 'react';
import { Button, Select, MenuItem, Input, TextField } from '@material-ui/core';
import './Fundraiser.css';
import { UserImage } from '../Common/UserImage';
import { DonationImage } from '../Common/DonationImage';
import CurrencyTextField from '@unicef/material-ui-currency-textfield'
import { ToastContainer, toast } from 'react-toastify';

const Fundraiser = () => {
  const [fundraiserData, setFundraiserData] = useState({
    title: 'Medito Foundation Annual Fundraiser',
    description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation',
    priceTarget: '300',
    image: 'https://source.unsplash.com/random',
    QnAObject: [
      {
        question: 'What is Medito Foundation?',
        answer: 'Medito Foundation is a non-profit organization that aims to make meditation more accessible to everyone. We are a team of volunteers who are passionate about meditation and want to share its benefits with the world. We are currently working on a free meditation app that will be available to everyone.',
      },
      {
        question: 'Why do you require a fundraiser?',
        answer: 'We are a non-profit organization and we rely on donations to keep our services free for everyone.',
      },
      {
        question: 'How will the funds be used?',
        answer: 'The funds will be used to cover the costs of running the organization, including the development of the app, marketing, and other expenses.',
      },
    ],
    raised: '100',
    donations: '3',
  });

  const [raised, setRaised] = useState(0);

  const raisedLerp=()=>{
    let raised=0;
    let interval=setInterval(() => {
      raised+=1;
      setRaised(raised);
      if(raised>=fundraiserData.raised){
        clearInterval(interval);
      }
    }, 10);
    return clearInterval(interval);
  }

  const [value, setValue] = React.useState();
  const [currency, setCurrency] = React.useState('$');

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  const [creatorData, setCreatorData] = useState({
    name: 'Medito Foundation',
    image: 'https://source.unsplash.com/random',
    description: 'Lorem Ipsum, Lorem Ipsum',
  });

  const [donationsData, setDonationsData] = useState([
    {
      name: 'John Doe',
      image: 'https://source.unsplash.com/random',
      amount: '100',
      comment: 'Keep up the good work!',
    },
    {
      name: 'Jane Doe',
      image: 'https://source.unsplash.com/random',
      comment: 'My Mind is calm now. Thank you!',
      amount: '100',
    },
    {
      name: 'Bruce Wayne',
      image: 'https://source.unsplash.com/random',
      comment: 'I\'m Batman',
      amount: '100',
    },
  ]);

  const [topDonation, setTopDonation] = useState({
    name: 'John Doe',
    image: 'https://source.unsplash.com/random',
    amount: '100',
    comment: 'Amazing Work',
  });

  const [recentDonation, setRecentDonation] = useState({
    name: 'Jane Doe',
    image: 'https://source.unsplash.com/random',
    amount: '100',
    comment: 'Lorem Ipsum',
  });

  const [firstDonation, setFirstDonation] = useState({
    name: 'Bruce Wayne',
    image: 'https://source.unsplash.com/random',
    amount: '100',
    comment: 'Lorem Ipsum',
  });
 
  const [activeQna, setActiveQna] = useState(0);

  const toggleQna = (index) => {
    if (activeQna === index) {
      setActiveQna(-1);
    } else {
      setActiveQna(index);
    }
  };

  // create a function that would iteratively send toats using toastify about new donations

  const handleDonationSync = () => {
    let data={
      name:'Lorem Ipsum',
      image: 'https://source.unsplash.com/random',
      amount: '$10',
      comment: 'Lorem Ipsum',
    }
    toast.success(`New Donation of ${data.amount} from ${data.name}!`, {
      position: 'top-center',
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      pauseOnFocusLoss: false,
      });
  }

  useEffect(() => {
    let count=0;
    let interval=setInterval(() => {
    handleDonationSync();
    if(count>=5){
      clearInterval(interval);
    }
    }, 15000);
    return () => {
      clearInterval(interval);
    }
  }, []);
    
  const handleDonationControl=(event, newVal)=>{
    event.preventDefault();
    newVal=parseInt(newVal);
    console.log(event, newVal);
    if(newVal>0){
      setValue(newVal);
    }
    else{
      console.log('here');
      setValue(0);
    }
  }

      

  const onClickDonation = () => {
    let link='https://donate.stripe.com/test_00g6rr03sbcf6lyeUU?locale=en&__embed_source=buy_btn_1OZHTmSDKtgEku0ZUJ66SCrJ';
    window.open(link, '_blank');
  }

  return (
    <div className="fundraiser-container">
     <div className="fundraiser-title">
      {fundraiserData.title}
     </div>
     <div className="fundraiser-split-container">
      <div className="fundraiser-split-left">
        <div className="fundraiser-image">
          <img src={fundraiserData.image} alt={fundraiserData.title} />
        </div>
        <div className="fundraiser-team-description border-bottom">
          <UserImage /> <span>{creatorData.name} is organizing this fundraiser. </span>
        </div>
        <div className="fundraiser-created-date border-bottom">
          Created 3 days ago
        </div>
        <div className="fundraiser-description">
          {fundraiserData.description}
        </div>
        <div className="fundraiser-qna">
          <div className="qna-title">Q&A</div>
          <div className="qna-question">
            {fundraiserData.QnAObject.map((qna, index) => (
              <div className={activeQna==index?'qna-item active':'qna-item'} key={index}>
                <div className="qna-question-question" onClick={()=>toggleQna(index)} >{qna.question}</div>
                <div className="qna-question-answer">{qna.answer}</div>
              </div>
            ))}
            <div className={activeQna=='contact'?"qna-item active contact-us-qna":"qna-item contact-us-qna"}>
              <div className="qna-question-question" onClick={()=>toggleQna('contact')} >I have some other question</div>
              <div className="qna-question-answer">
                {/* <div className="contact-us-qna-title">
                  Contact Us
                  </div> */}
                  <div className="contact-qna-form">
                    <TextField
                      placeholder='Name'
                      label='Name'
                      variant='outlined'
                      className='contact-form-input'
                    />
                    <TextField
                      placeholder='Email'
                      label='Email'
                      variant='outlined'
                      className='contact-form-input'
                    />
                    <TextField
                      placeholder='Message'
                      label='Message'
                      className='contact-form-input'
                      multiline
                      rows={4}
                      variant='outlined'
                    />
                    <Button variant="outlined" color="primary"
                      >
                        Send Your Question
                      </Button>
                  </div>
              </div>
            </div>
            </div>

        </div>
        <div className="post-qna-items border-bottom">
            <Button className='post-qna-item' variant="outlined" color="primary"
            disableElevation
            autoCapitalize='true'
            onClick={onClickDonation}
            >
                          Donate
                          </Button>
                          <Button className='post-qna-item' variant="outlined" color="primary"
            disableElevation
            autoCapitalize='true'
            
            >
                          Share
                          </Button>
        </div>
        {/* <div className="fundraising-tiers border-bottom">
          <div className="fundraising-tiers-title">
            Why Should You Donate?
          </div>
          <div className="fundraising-tiers-wrapper">
            <div className="fundraising-tiers-item">
              <div className="fundraising-tiers-item-price">
                $10
              </div>
              <div className="fundraising-tiers-item-description">
                Bronze
              </div>
            </div>
            <div className="fundraising-tiers-item">
              <div className="fundraising-tiers-item-price">
                $20
              </div>
              <div className="fundraising-tiers-item-description">
                Silver
              </div>
            </div>
            <div className="fundraising-tiers-item">
              <div className="fundraising-tiers-item-price">
                $50
              </div>
              <div className="fundraising-tiers-item-description">
                Gold
              </div>
            </div>
          </div>
        </div> */}
         {/* <div className="right-donations">
            <div className="donations-list-item" >
                <div className="donations-list-item-image">
                  <DonationImage  />
                </div>
                <div className="donations-list-item-description">
                <div className="donations-list-item-name">{recentDonation.name}</div>
                <div className="amount-descriptor-container">
                <div className="donations-list-item-amount">${recentDonation.amount}</div>
                <div className="donation-type">
                  Recent Donation
                </div>
                </div>
                
                </div>
              </div>
              <div className="donations-list-item" >
                <div className="donations-list-item-image">
                  <DonationImage  />
                </div>
                <div className="donations-list-item-description">
                <div className="donations-list-item-name">{topDonation.name}</div>
                <div className="amount-descriptor-container">
                <div className="donations-list-item-amount">${topDonation.amount}</div>
                <div className="donation-type">
                  Top Donation
                </div>
                </div>
                </div>
              </div>
              <div className="donations-list-item" >
                <div className="donations-list-item-image">
                  <DonationImage  />
                </div>
                <div className="donations-list-item-description">
                <div className="donations-list-item-name">{firstDonation.name}</div>
                <div className="amount-descriptor-container">
                <div className="donations-list-item-amount">${firstDonation.amount}</div>
                <div className="donation-type">
                  First Donation
                </div>
                </div>
                </div>
              </div>
            </div> */}
        <div className="donations-list">
          <div className="donations-list-title">
            Recent Donations
          </div>
          <div className="donations-list-subtitle">
            Please donate to share Words of Encouragement
          </div>
          <div className="donations-list-wrapper">
            {donationsData.map((donation, index) => (
              <div className="donations-list-item" key={index}>
                <div className="donations-list-item-image">
                  <DonationImage  />
                </div>
                <div className="donations-list-item-description">
                <div className="donations-list-item-name">{donation.name}</div>
                <div className="donations-list-item-amount">${donation.amount}</div>
                <div className="donations-list-item-comment">
                  {donation.comment}
                </div>
                </div>
              </div>
            ))}
            <Button className='post-qna-item' variant="outlined" color="primary">
              Show More
            </Button>
          </div>
        </div>
      </div>
      <div className="fundraiser-split-right">
        <div className="fundraiser-right-raised">
          <div className="fundraiser-price-progress">
            <div className="fundraiser-price">
             <span className='raised-amount' > ${fundraiserData.raised}</span> raised of ${fundraiserData.priceTarget}
            </div>
          </div>

            <div className="fundraiser-progress">
              <div className="fundraiser-progress-bar" style={{ width: `${(fundraiserData.raised / fundraiserData.priceTarget) * 100}%` }}></div>
            </div>
            <div className="donation-percentage-container">
            <div className="total-donations">
              {fundraiserData.donations} donations
            </div>
            <div className="donation-percentage">
              {Math.round((fundraiserData.raised / fundraiserData.priceTarget) * 100)}%
              </div>
            </div>
            <div className="new-donation-tier-wrapper">
              <div className="new-donation-tier-title">
                Why Should You Donate?
              </div>
            <div className="new-donation-tier-list">
              <div className={value>=20?"new-donation-tier-item active":"new-donation-tier-item"} onClick={()=>setValue(20)}>
                <div className="donation-tier-item-data">
                  <div className="donation-tier-item-title-wrapper">
                    <div className="donation-tier-item-price">
                      $20
                    </div>
                    <div className="donation-tier-item-title">
                      Awesome
                    </div>

                  </div>
                  <div className="donation-tier-item-description">
                    Free Mediation Subscription
                </div>
              </div>
            </div>
            <div className={value>=50?"new-donation-tier-item active":"new-donation-tier-item"} onClick={()=>setValue(50)}>
                <div className="donation-tier-item-data">
                  <div className="donation-tier-item-title-wrapper">
                    <div className="donation-tier-item-price">
                      $50
                    </div>
                    <div className="donation-tier-item-title">
                      Amazing
                    </div>

                  </div>
                  <div className="donation-tier-item-description">
                    Free Mediation Classes
                </div>
              </div>
            </div>
            <div className={value>=100?"new-donation-tier-item active":"new-donation-tier-item"} onClick={()=>setValue(100)} >
                <div className="donation-tier-item-data">
                  <div className="donation-tier-item-title-wrapper">
                    <div className="donation-tier-item-price">
                      $100
                    </div>
                    <div className="donation-tier-item-title">
                      Incredible
                    </div>
                    </div>
                  <div className="donation-tier-item-description">
                    Free Mediation Session
                </div>
              </div>
              </div>
              </div>
            </div>

            <div className="donate-input-container">
              {/* create a dropdown with material-ui for currency selection */}
              <Select 
              value={currency}
              label="Currency"
              onChange={handleChange}
              variant='outlined'
            >
              <MenuItem value={'$'}>USD</MenuItem>
              <MenuItem value={'€'}>EUR</MenuItem>
            </Select>
            <CurrencyTextField
        label="Amount"
        variant="outlined"
        value={value}
        currencySymbol={currency}
        outputFormat="string"
        minimumValue="10"
        
        onChange={(event, value)=> handleDonationControl(event, value)}
    />
            </div>
            <div className="fundraiser-action-buttons">
             
              <Button variant="contained" color="secondary"
              style={
                {
background:'linear-gradient(96deg, #5D885C -11.92%, #87C186 51.6%, #548F52 114%)'
                }
              }
              onClick={()=>{
                onClickDonation()
              }}
              >
                Donate Now
              </Button>
              <Button variant="outlined" color="primary"              
              >Share
              </Button>
            </div>
        </div>
      </div>
     </div>
    </div>
  );
};

export default Fundraiser;
