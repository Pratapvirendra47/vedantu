import React, {useState, useEffect} from 'react';
import GitHubData from './dashboardData.json';
import './dashboardStyle.css';

const Dashboard = () => {

  const [searchVariable, setSearchVariable] = useState("");

  useEffect(() => {
    console.log(GitHubData.userData.login)

  }, [])

  const setSearch = (e) => {
    setSearchVariable(e.target.value);
  }

  return (
    <div className="container">
      {/* header */}
      <div>
        {/* <div className="githubHeader">
          <div className="afterImageHeader">
          </div>
          <div className="contentHeader">
            <div className="overview">Overview</div>
            <div className="repositories">Repositories {GitHubData.userData.public_repos}</div> 
            <div className="projects">Projects</div>
          </div>
        </div> */}
        <div className="mainContentSection">
          {/* left section */}
          <div className="githubHeader">
            <div className="afterImageHeader">
            </div>
            <div className="contentHeader">
              <div className="overview">Overview</div>
              <div className="repositories">Repositories {GitHubData.userData.public_repos}</div> 
              <div className="projects">Projects</div>
            </div>
          </div>
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
            <div className="searchSection">
                <div className="searchBox">
                  <input className="inputSearch" placeholder="Find a repository" onChange={(e) => {setSearch(e)}}/>
                </div>
                <div className="selectionType">
                  <select className="SelectionTag">
                    <option> Select Type</option>
                    <option> All </option>  
                    <option> Sources </option>
                    <option> Forked </option>
                    <option> Archived </option>
                    <option> Mirror </option>
                  </select>
                </div>
                <div className="selectLanguage">
                  <select className="languageTag">
                    <option>All</option>
                  </select>
                </div>
            </div>
            <div>
              <div>
                {
                  GitHubData.repoData.map((repoValue,index) => {
                    return (
                      // <div key = {index}>
                        // {
                          // searchVariable != null ?
                            // searchVariable == repoValue.name ?
                              <div key= {index} className="repoDataStyling">
                                <h2 className="repoValueName">{repoValue.name}</h2>
                                <p className="repoDescription">{repoValue.description}</p>
                                <p className="repoLanguage">{repoValue.language}</p>
                                <p className="repoUpdatedStatus">Updated on {repoValue.updated_at}</p>
                              </div>
                              // :
                        //       <div className="repoDataStyling">
                        //         <h2 className="repoValueName">{repoValue.name}</h2>
                        //         <p className="repoDescription">{repoValue.description}</p>
                        //         <p className="repoLanguage">{repoValue.language}</p>
                        //         <p className="repoUpdatedStatus">Updated on {repoValue.updated_at}</p>
                        //       </div>:
                        //   null
                        // }
                        
                      // </div>
                    )
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard;