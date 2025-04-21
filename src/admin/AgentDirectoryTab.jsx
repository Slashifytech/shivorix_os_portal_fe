import React from 'react'
import Header from '../components/dashboardComp/Header'
import AdminSidebar from '../components/dashboardComp/AdminSidebar'
import OfflineAgent from './OfflineAgent';
import AgentDirectory from './AgentDirectory';
import TabBarTwo from '../components/TabBarTwo';

const AgentDirectoryTab = () => {

    
    const tabs = [
       
    
      
        {
          name: "agentDirectory",
          label: "Onboarded Agents",
          component: AgentDirectory,
         
        },
        {
          name: "offlineAgents",
          label: "Offline Agents",
          component: OfflineAgent,
         
        },
       
      ];
  return (
    <>
      <Header customLink="/agent/shortlist" />

    <div>
    <span className="fixed overflow-y-scroll scrollbar-hide  bg-white ">
          <AdminSidebar />
        </span>
        
    </div>
        <div className="sm:ml-[9%] md:ml-0 mt-20">
                  <TabBarTwo tabs={tabs} />
                </div>
    </>
  )
}

export default AgentDirectoryTab