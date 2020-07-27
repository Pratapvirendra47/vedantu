import React, {useState, useEffect} from 'react';
import GitHubData from './dashboardData.json';
import './dashboardStyle.css';

const Dashboard = () => {

  useEffect(() => {
    console.log(GitHubData.userData.login)

  }, [])

  return (
    <div className="container">
      {/* header */}
      <div className="githubHeader">
        <div className="afterImageHeader">
        </div>
        <div className="contentHeader">
          <div className="overview">Overview</div>
          <div className="repositories">Repositories {GitHubData.userData.public_repos}</div> 
          <div className="projects">Projects</div>
        </div>
      </div>
      <div className="mainContentSection">
        {/* left section */}
        <div className="leftIntroSection">
          <div>
            <img src = {GitHubData.userData.avatar_url} />
          </div>
          <div className="namingCredentials">
            <h2>{GitHubData.userData.name}</h2>
            <h3>{GitHubData.userData.login}</h3>
          </div>
          <div className="credentialsDiv" >
            <p className="bioCredentials">{GitHubData.userData.bio}</p>
          </div>
          <div className="followDesign">Follow</div>
          <div className="followersDiv">
            <div><b>{GitHubData.userData.followers}</b><span> Followers </span></div>
            <div><b>{GitHubData.userData.following}</b> <span>Following</span></div>
          </div>
          <p className="companyPara">{GitHubData.userData.company}</p>
          <p className="locationPara">{GitHubData.userData.location}</p>
        </div>
        {/* Right Section  */}
        <div className="rightDetailSection">
          <div>
              <input placeholder="Find a repository"/>
              <select></select>
              <select></select>
          </div>
          <div>
            <div>
              {
                GitHubData.repoData.map((repoValue,index) => {
                  return (
                    <div>
                      <h3>{repoValue.name}</h3>
                      <p>{repoValue.description}</p>
                      <p>{repoValue.language}</p>
                      <p>Updated on {repoValue.updated_at}</p>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard;