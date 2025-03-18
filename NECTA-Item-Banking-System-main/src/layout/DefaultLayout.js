import React, { useState } from 'react';
import { AppSidebar, AppFooter } from '../components/index';
import Charts from '../views/charts/Charts';
import { useNavigate } from 'react-router-dom';

const ItemBankingDashboard = () => (
  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', padding: '20px' }}>
    {/* Items Overview */}
    <div style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
      <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '15px', color: '#333' }}>Items Overview</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <p style={{ display: 'flex', justifyContent: 'space-between' }}><span>Total Items:</span> <span style={{ fontWeight: 'bold', color: '#3182ce' }}>1,234</span></p>
        <p style={{ display: 'flex', justifyContent: 'space-between' }}><span>Pending Review:</span> <span style={{ fontWeight: 'bold', color: '#d69e2e' }}>56</span></p>
        <p style={{ display: 'flex', justifyContent: 'space-between' }}><span>Approved:</span> <span style={{ fontWeight: 'bold', color: '#38a169' }}>987</span></p>
        <p style={{ display: 'flex', justifyContent: 'space-between' }}><span>Rejected:</span> <span style={{ fontWeight: 'bold', color: '#e53e3e' }}>12</span></p>
      </div>
    </div>

    {/* Recent Activity */}
    <div style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
      <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '15px', color: '#333' }}>Recent Activity</h3>
      <ul style={{ listStyleType: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <li style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span>New item created</span>
          <span style={{ fontSize: '14px', color: '#718096' }}>2 mins ago</span>
        </li>
        <li style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span>Item approved by moderator</span>
          <span style={{ fontSize: '14px', color: '#718096' }}>1 hour ago</span>
        </li>
        <li style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span>Proofreading completed</span>
          <span style={{ fontSize: '14px', color: '#718096' }}>3 hours ago</span>
        </li>
      </ul>
    </div>

    {/* Quick Actions */}
    <div style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
      <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '15px', color: '#333' }}>Quick Actions</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <a href='/src/views/Form/CreateItem.html' button style={{ width: '100%', backgroundColor: '#4299e1', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', padding: '10px', borderRadius: '4px', border: 'none', cursor: 'pointer', transition: 'background-color 0.3s' }}>Create New Item</a>
        <button style={{ width: '100%', backgroundColor: '#48bb78', color: 'white', padding: '10px', borderRadius: '4px', border: 'none', cursor: 'pointer', transition: 'background-color 0.3s' }}>Review Pending Items</button>
        <button style={{ width: '100%', backgroundColor: '#ecc94b', color: 'white', padding: '10px', borderRadius: '4px', border: 'none', cursor: 'pointer', transition: 'background-color 0.3s' }}>Generate Report</button>
      </div>
    </div>

    {/* Workflow Status */}
    <div style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
      <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '15px', color: '#333' }}>Workflow Status</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span>Drafting</span>
          <div style={{ width: '60%', backgroundColor: '#e2e8f0', height: '20px', borderRadius: '10px', overflow: 'hidden' }}>
            <div style={{ width: '70%', backgroundColor: '#4299e1', height: '100%' }}></div>
          </div>
          <span>70%</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span>Review</span>
          <div style={{ width: '60%', backgroundColor: '#e2e8f0', height: '20px', borderRadius: '10px', overflow: 'hidden' }}>
            <div style={{ width: '45%', backgroundColor: '#48bb78', height: '100%' }}></div>
          </div>
          <span>45%</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span>Proofreading</span>
          <div style={{ width: '60%', backgroundColor: '#e2e8f0', height: '20px', borderRadius: '10px', overflow: 'hidden' }}>
            <div style={{ width: '30%', backgroundColor: '#ecc94b', height: '100%' }}></div>
          </div>
          <span>30%</span>
        </div>
      </div>
    </div>

    {/* User Performance */}
    <div style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
      <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '15px', color: '#333' }}>User Performance</h3>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ backgroundColor: '#f7fafc' }}>
            <th style={{ padding: '10px', textAlign: 'left', borderBottom: '1px solid #e2e8f0' }}>User</th>
            <th style={{ padding: '10px', textAlign: 'right', borderBottom: '1px solid #e2e8f0' }}>Items Created</th>
            <th style={{ padding: '10px', textAlign: 'right', borderBottom: '1px solid #e2e8f0' }}>Items Reviewed</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ padding: '10px', borderBottom: '1px solid #e2e8f0' }}>John Doe</td>
            <td style={{ padding: '10px', textAlign: 'right', borderBottom: '1px solid #e2e8f0' }}>45</td>
            <td style={{ padding: '10px', textAlign: 'right', borderBottom: '1px solid #e2e8f0' }}>32</td>
          </tr>
          <tr>
            <td style={{ padding: '10px', borderBottom: '1px solid #e2e8f0' }}>Jane Smith</td>
            <td style={{ padding: '10px', textAlign: 'right', borderBottom: '1px solid #e2e8f0' }}>38</td>
            <td style={{ padding: '10px', textAlign: 'right', borderBottom: '1px solid #e2e8f0' }}>41</td>
          </tr>
          <tr>
            <td style={{ padding: '10px' }}>Bob Johnson</td>
            <td style={{ padding: '10px', textAlign: 'right' }}>29</td>
            <td style={{ padding: '10px', textAlign: 'right' }}>35</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Item Type Distribution */}
    <div style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
      <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '15px', color: '#333' }}>Item Type Distribution</h3>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
        <span>Multiple Choice</span>
        <div style={{ width: '60%', backgroundColor: '#e2e8f0', height: '20px', borderRadius: '10px', overflow: 'hidden' }}>
          <div style={{ width: '65%', backgroundColor: '#4299e1', height: '100%' }}></div>
        </div>
        <span>65%</span>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
        <span>Essay</span>
        <div style={{ width: '60%', backgroundColor: '#e2e8f0', height: '20px', borderRadius: '10px', overflow: 'hidden' }}>
          <div style={{ width: '25%', backgroundColor: '#48bb78', height: '100%' }}></div>
        </div>
        <span>25%</span>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span>Short Answer</span>
        <div style={{ width: '60%', backgroundColor: '#e2e8f0', height: '20px', borderRadius: '10px', overflow: 'hidden' }}>
          <div style={{ width: '10%', backgroundColor: '#ecc94b', height: '100%' }}></div>
        </div>
        <span>10%</span>
      </div>
    </div>

    {/* User Performance */}
    <div style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
      <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '15px', color: '#333' }}>Graphical Representation</h3>
      <Charts />
    </div>
  </div>
);


const CustomHeader = ({ toggleSidebar }) => {
  const navigate = useNavigate();

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '10px 20px',
      background: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)',
      color: 'white',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>

        <h1 style={{
          margin: 0,
          fontSize: '32px',
          fontWeight: 'bold',
          letterSpacing: '1px',
          color: '#ffffff',
          textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
        }}>NECTA - IBS</h1>
      </div>
      <div style={{ display: 'flex', gap: '15px' }}>
        <a href='/src/views/Form/CreateItem.html' rel="noopener noreferrer" style={{
          padding: '8px 16px',
          background: 'linear-gradient(135deg, #43cea2 70%, #185a9d 100%)',
          color: '#1e3c72',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          fontWeight: 'bold',
          textDecoration: 'none',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'transform 0.3s',
        }}>
          Create Item
        </a>
        <a href='https://docs.google.com/spreadsheets/d/1ceNvLPG856p2x7qX1whsLtBPbQGIHmdsPmZYdTDyYGU/edit?resourcekey#gid=1148228698' target="_blank" rel="noopener noreferrer" style={{
          padding: '8px 16px',
          background: 'linear-gradient(135deg, #ffb347 70%, #ffcc33 100%)',
          color: '#1e3c72',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          fontWeight: 'bold',
          transition: 'transform 0.3s',
          ':hover': {
            transform: 'scale(1.05)'
          }
        }}>
          Review Items
        </a>
        <a href='https://docs.google.com/spreadsheets/d/1ceNvLPG856p2x7qX1whsLtBPbQGIHmdsPmZYdTDyYGU/edit?resourcekey#gid=1148228698' target="_blank" rel="noopener noreferrer" style={{
          padding: '8px 16px',
          background: 'linear-gradient(135deg, #ff6e9f 50%, #bfe7ff 100%)',
          color: '#1e3c72',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          fontWeight: 'bold',
          transition: 'transform 0.3s',
          ':hover': {
            transform: 'scale(1.05)'
          }
        }}>
          Reports
        </a>
        <a href='#/login'>
          <img alt="User" style={{
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            cursor: 'pointer',
            border: '2px solid white'
          }} /></a>
      </div>
    </div>
  );
};

const buttonStyle = {
  padding: '8px 16px',
  backgroundColor: '#3498db',
  color: 'white',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer'
};

const DefaultLayout = () => {
  const [sidebarVisible, setSidebarVisible] = useState(true);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <div style={{
        width: sidebarVisible ? '250px' : '0',
        transition: 'width 0.3s',
        overflow: 'hidden',
        backgroundColor: '#2c3e50',
        color: 'white',
      }}>
        <AppSidebar />
      </div>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        <CustomHeader toggleSidebar={toggleSidebar} />
        <div style={{ flex: 1, padding: '20px', overflowY: 'auto', backgroundColor: '#f7fafc' }}>
          <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '20px', color: '#2d3748' }}>Item Banking System Dashboard</h1>
          <ItemBankingDashboard />
        </div>
        <AppFooter />
      </div>
    </div>
  );
};

export default DefaultLayout;
