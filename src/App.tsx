import { Routes, Route } from 'react-router-dom'

// 页面组件
import HomePage from './pages/HomePage'
import SelectPlanPage from './pages/SelectPlanPage'
import AgreementPage from './pages/AgreementPage'
import AutoDeductAgreementPage from './pages/AutoDeductAgreementPage'
import PaymentPage from './pages/PaymentPage'
import PaymentResultPage from './pages/PaymentResultPage'
import MemberCenterPage from './pages/MemberCenterPage'

function App() {
  return (
    <div className="min-h-screen bg-neutral-50">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/select-plan" element={<SelectPlanPage />} />
        <Route path="/agreement" element={<AgreementPage />} />
        <Route path="/auto-deduct-agreement" element={<AutoDeductAgreementPage />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/payment-result" element={<PaymentResultPage />} />
        <Route path="/member-center" element={<MemberCenterPage />} />
      </Routes>
    </div>
  )
}

export default App