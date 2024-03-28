import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import DashboardLayout from './components/layout/DashboardLayout';
import NotFound from './pages/NotFound';
import Inward from './pages/Inward';
import Outward from './pages/Outward';
import Vendors from './pages/Vendors';
import Customers from './pages/Customers';
import Expenses from './pages/Expenses';
import Revenue from './pages/Revenue';
import Attendence from './pages/Attendence';
import Materials from './pages/Materials';
import Processes from './pages/Processes';
import Vehicles from './pages/Vehicles';
import ReportsAnalytics from './pages/ReportsAnalytics';
import Settings from './pages/Settings';
import Support from './pages/Support';
import Staff from './pages/Staff';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DashboardLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="/inventory/inward" element={<Inward />} />
            <Route path="/inventory/outward" element={<Outward />} />
            <Route path="/stakeholders/vendors" element={<Vendors />} />
            <Route path="/stakeholders/customers" element={<Customers />} />
            <Route path="/staff/staff" element={<Staff />} />
            <Route path="/staff/attendance" element={<Attendence />} />
            <Route path="/finances/expenses" element={<Expenses />} />
            <Route path="/finances/revenue" element={<Revenue />} />
            <Route path="/materials" element={<Materials />} />
            <Route path="/processes" element={<Processes />} />
            <Route path="/vehicles" element={<Vehicles />} />
            <Route path="/reports-analytics" element={<ReportsAnalytics />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/support" element={<Support />} />
            {/* Add routes for other submenu components */}
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
