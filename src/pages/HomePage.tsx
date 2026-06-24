import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

/**
 * 首页 - 仅会员登记
 */
export default function HomePage() {
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    memberName: '',
    phone: ''
  })

  // 表单验证
  const isFormValid = formData.memberName.trim() !== '' && /^1[3-9]\d{9}$/.test(formData.phone)

  const handleSubmit = () => {
    if (!isFormValid) {
      if (!formData.memberName.trim()) {
        alert('请输入姓名')
        return
      }
      if (!/^1[3-9]\d{9}$/.test(formData.phone)) {
        alert('请输入正确的手机号')
        return
      }
    }

    localStorage.setItem('memberRegistration', JSON.stringify(formData))
    navigate('/select-plan')
  }

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '') // 只允许数字
    setFormData({ ...formData, phone: value })
  }

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* 顶部横幅 - 橙色渐变 */}
      <header className="bg-gradient-to-r from-primary-600 to-primary-500 text-white px-4 pt-12 pb-8">
        <h1 className="text-2xl font-bold mb-2">绘眼宝盒会员登记</h1>
        <p className="text-primary-100 text-sm">填写信息，开启绘眼宝盒会员之旅</p>
      </header>

      {/* 主要内容 */}
      <main className="px-4 -mt-4">
        {/* 会员登记表单 */}
        <section className="bg-white rounded-xl p-4 mb-6 shadow-sm">
          <h2 className="text-lg font-semibold text-neutral-900 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-primary-600 rounded"></span>
            填写会员信息
          </h2>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-1">
                姓名 <span className="text-primary-600">*</span>
              </label>
              <input
                type="text"
                value={formData.memberName}
                onChange={(e) => setFormData({ ...formData, memberName: e.target.value })}
                placeholder="请输入您的姓名"
                className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-1">
                手机号 <span className="text-primary-600">*</span>
              </label>
              <input
                type="tel"
                value={formData.phone}
                onChange={handlePhoneChange}
                placeholder="请输入您的手机号"
                maxLength={11}
                className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all"
              />
            </div>
          </div>
        </section>

        {/* 功能说明 */}
        <section className="bg-white rounded-xl p-4 shadow-sm">
          <h3 className="text-sm font-medium text-neutral-700 mb-3">绘眼宝盒会员权益</h3>
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm text-neutral-600">
              <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>24 小时无障碍进店购物</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-neutral-600">
              <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>会员专属商品及优惠价格</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-neutral-600">
              <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>绘眼宝盒会员专属活动参与资格</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-neutral-600">
              <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>积分累积及兑换服务</span>
            </div>
          </div>
        </section>
      </main>

      {/* 底部提交按钮 */}
      <footer className="fixed bottom-0 left-0 right-0 bg-white border-t border-neutral-200 px-4 py-4 safe-area-bottom">
        <button
          onClick={handleSubmit}
          disabled={!isFormValid}
          className={`w-full py-3.5 px-4 rounded-lg text-white font-medium text-base transition-colors ${
            isFormValid
              ? 'bg-primary-600 hover:bg-primary-700 active:bg-primary-800'
              : 'bg-neutral-300 cursor-not-allowed'
          }`}
        >
          下一步
        </button>
      </footer>

      {/* 底部占位 */}
      <div className="h-20"></div>
    </div>
  )
}