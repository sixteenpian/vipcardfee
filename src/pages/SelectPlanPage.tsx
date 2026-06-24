import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

/**
 * 付费周期选择页面 - 改成会员卡类型选择
 */
export default function SelectPlanPage() {
  const navigate = useNavigate()

  const [planType, setPlanType] = useState<'card98' | 'card95' | 'card88'>('card95')
  const [agreementsChecked, setAgreementsChecked] = useState(false)

  // 三种会员卡类型
  const plans = [
    {
      id: 'card98' as const,
      name: '98 卡',
      price: '2 元',
      period: '/月',
      discount: '98 折',
      description: '所有商品 98 折',
      popular: false
    },
    {
      id: 'card95' as const,
      name: '95 卡',
      price: '5 元',
      period: '/月',
      discount: '95 折',
      description: '所有商品 95 折',
      popular: true
    },
    {
      id: 'card88' as const,
      name: '88 卡',
      price: '12 元',
      period: '/月',
      discount: '88 折',
      description: '所有商品 88 折，最优惠',
      popular: false
    }
  ]

  const handleContinue = () => {
    if (!agreementsChecked) {
      alert('请先勾选同意协议')
      return
    }

    const registration = JSON.parse(localStorage.getItem('memberRegistration') || '{}')
    localStorage.setItem('memberRegistration', JSON.stringify({
      ...registration,
      planType,
      agreementsAccepted: true
    }))
    navigate('/payment')
  }

  return (
    <div className="min-h-screen bg-neutral-50 flex flex-col">
      {/* 顶部导航栏 */}
      <header className="bg-white border-b border-neutral-200 px-4 py-3 flex items-center justify-between sticky top-0 z-10">
        <button
          onClick={() => navigate(-1)}
          className="text-neutral-600 hover:text-neutral-900 p-2 -ml-2"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <h1 className="text-lg font-semibold text-neutral-900">选择会员卡类型</h1>
        <div className="w-10" />
      </header>

      {/* 可滚动内容区 */}
      <main className="flex-1 overflow-y-auto p-4 pb-24">
        {/* 提示卡片 */}
        <section className="bg-gradient-to-r from-primary-600 to-primary-500 rounded-xl p-4 mb-6 text-white">
          <div className="flex items-start gap-3">
            <svg className="w-5 h-5 text-white/80 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
              <p className="font-medium mb-1">三种会员卡供您选择</p>
              <p className="text-sm text-primary-100">开通后当月有效，下月可续订或更换其他卡种</p>
            </div>
          </div>
        </section>

        {/* 会员卡类型选项 */}
        <section className="bg-white rounded-xl p-4 mb-6 shadow-sm">
          <h2 className="text-lg font-semibold text-neutral-900 mb-4">绘眼宝盒会员卡类型</h2>

          <div className="space-y-3">
            {plans.map((plan) => (
              <label
                key={plan.id}
                className={`relative flex items-center justify-between p-4 border-2 rounded-xl cursor-pointer transition-all ${
                  planType === plan.id
                    ? 'border-primary-600 bg-primary-50'
                    : 'border-neutral-200 hover:border-neutral-300'
                }`}
              >
                <div className="flex items-center gap-3 flex-1">
                  <input
                    type="radio"
                    name="planType"
                    value={plan.id}
                    checked={planType === plan.id}
                    onChange={(e) => setPlanType(e.target.value as typeof planType)}
                    className="w-5 h-5 text-primary-600 focus:ring-primary-500"
                  />

                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-neutral-900">{plan.name}</span>
                      {plan.popular && (
                        <span className="px-2 py-0.5 bg-primary-100 text-primary-600 text-xs font-medium rounded">
                          推荐
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-neutral-500">{plan.description}</p>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-xl font-bold text-primary-600">{plan.price}</span>
                  <span className="text-sm text-neutral-500">{plan.period}</span>
                </div>
              </label>
            ))}
          </div>
        </section>

        {/* 会员权益对比 */}
        <section className="bg-white rounded-xl p-4 mb-6 shadow-sm">
          <h2 className="text-lg font-semibold text-neutral-900 mb-4">会员权益对比</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-neutral-200">
                  <th className="text-left py-2 text-neutral-500 font-medium">权益</th>
                  <th className="text-center py-2 text-neutral-500 font-medium">98 卡</th>
                  <th className="text-center py-2 text-primary-600 font-semibold">95 卡</th>
                  <th className="text-center py-2 text-neutral-500 font-medium">88 卡</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-neutral-100">
                  <td className="py-3 text-neutral-700">商品折扣</td>
                  <td className="text-center py-3 text-neutral-600">98 折</td>
                  <td className="text-center py-3 text-primary-600 font-medium">95 折</td>
                  <td className="text-center py-3 text-neutral-600">88 折</td>
                </tr>
                <tr className="border-b border-neutral-100">
                  <td className="py-3 text-neutral-700">月费</td>
                  <td className="text-center py-3 text-neutral-600">2 元</td>
                  <td className="text-center py-3 text-primary-600 font-medium">5 元</td>
                  <td className="text-center py-3 text-neutral-600">12 元</td>
                </tr>
                <tr>
                  <td className="py-3 text-neutral-700">24 小时进店</td>
                  <td className="text-center py-3"><svg className="w-5 h-5 text-primary-600 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg></td>
                  <td className="text-center py-3"><svg className="w-5 h-5 text-primary-600 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg></td>
                  <td className="text-center py-3"><svg className="w-5 h-5 text-primary-600 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg></td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 协议勾选区域 */}
        <section className="bg-white rounded-xl p-4 mb-4 shadow-sm">
          <h2 className="text-lg font-semibold text-neutral-900 mb-4">协议确认</h2>

          <div className="flex items-start gap-3 p-3 rounded-lg bg-neutral-50">
            <input
              type="checkbox"
              id="agreements"
              checked={agreementsChecked}
              onChange={(e) => setAgreementsChecked(e.target.checked)}
              className="mt-1 w-4 h-4 text-primary-600 border-neutral-300 rounded focus:ring-primary-500"
            />
            <div className="flex-1">
              <label htmlFor="agreements" className="text-sm text-neutral-700 cursor-pointer">
                我已阅读并同意
                <button
                  type="button"
                  onClick={() => navigate('/agreement')}
                  className="text-primary-600 hover:underline ml-0.5 font-medium"
                >
                  《会员服务协议》
                </button>
                <span className="mx-0.5">和</span>
                <button
                  type="button"
                  onClick={() => navigate('/auto-deduct-agreement')}
                  className="text-primary-600 hover:underline ml-0.5 font-medium"
                >
                  《自动扣费协议》
                </button>
              </label>
              <p className="text-xs text-neutral-500 mt-1">
                点击协议名称可查看详细内容
              </p>
            </div>
            {agreementsChecked && (
              <svg className="w-5 h-5 text-primary-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            )}
          </div>
        </section>

        {/* 温馨提示 */}
        <section className="bg-primary-50 border border-primary-200 rounded-xl p-4">
          <div className="flex items-start gap-3">
            <svg className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div className="text-sm text-primary-800">
              <p className="font-medium mb-1">温馨提示</p>
              <p>请仔细阅读以上两份协议，确认无误后勾选并继续支付流程</p>
            </div>
          </div>
        </section>
      </main>

      {/* 底部固定按钮 */}
      <footer className="bg-white border-t border-neutral-200 px-4 py-4 safe-area-bottom">
        <button
          onClick={handleContinue}
          disabled={!agreementsChecked}
          className={`w-full py-3.5 px-4 rounded-lg text-white font-medium text-base transition-colors ${
            agreementsChecked
              ? 'bg-primary-600 hover:bg-primary-700 active:bg-primary-800'
              : 'bg-neutral-300 cursor-not-allowed'
          }`}
        >
          下一步：去支付
        </button>
      </footer>
    </div>
  )
}