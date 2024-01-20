import React from 'react'
import './Home.css';
import { FundraiserItem } from '../Common/FundraiserItem';

export const Home = () => {

    const [currentFundraisers, setCurrentFundraisers] = React.useState([
        {
            id: 1,
            title: 'Help me get a new laptop',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            image: '/Rectangle.png',
            raised: 100,
            goal: 1000,
            daysLeft: 20,
            category: 'Education',
        }
    ]);

  return (
    <div className="fundraiser-container">
    <div className="section-1">
        <div className="left-image">
            <img src='/Rectangle.png' alt='Rectangle' />
        </div>
        <div className="right-part">
            <div className="section-1-heading">
                Online Fundraising for the Modern Non-Profit
            </div>
            <div className="section-1-button">
                Start a Fundraiser
            </div>
        </div>
    </div>
    <div className="section-2">
        <div className="section-2-title">
            Our Current Campaigns
        </div>
        <div className="current-campaigns-list">
            {currentFundraisers.map((fundraiser) => {
                return(
                    <FundraiserItem data={fundraiser} />

                )
            }
            )}
        </div>
    </div>
    <div className="section-3">
        <div className="section-3-title">
            How it works
        </div>
        <div className="section-3-content">
            <div>
                <div className="step-number">
                    01
                </div>
                <div className="step-heading">
                    Create a Fundraiser
                </div>
                <div className="step-description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
            </div>
            <div>
                <div className="step-number">
                    02
                </div>
                <div className="step-heading">
                    Share with Friends
                </div>
                <div className="step-description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
                </div>
            <div>
                <div className="step-number">
                    03
                </div>
                <div className="step-heading">
                    Collect Donations
                </div>
                <div className="step-description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
            </div>
        </div>
    </div>
    <div className="section-4">
        <div className="section-4-title">
            The Smile Impact
        </div>
        <div className="section-4-content">
            <div className="section-4-text">
            “Join us in making a difference through simple acts of kindness. Your support, big or small, transforms smiles into positive change. Let's unite for a brighter world, one joyful impact at a time!”
            </div>
            <div className="section-4-fundraisers">
                10,000+ Fundraisers
            </div>
        </div>
    </div>
    </div>
  )
}
