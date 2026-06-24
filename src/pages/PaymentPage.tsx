import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

/**
 * 支付页面
 */
export default function PaymentPage() {
  const navigate = useNavigate()
  const [paymentMethod, setPaymentMethod] = useState<'wechat' | 'alipay'>('wechat')
  const [processing, setProcessing] = useState(false)

  const registration = JSON.parse(localStorage.getItem('memberRegistration') || '{}')
  const planType = registration.planType || 'card95'

  // 三种会员卡信息
  const planInfo = {
    card98: { name: '98 卡', price: 2, discount: '98 折', description: '所有商品 98 折' },
    card95: { name: '95 卡', price: 5, discount: '95 折', description: '所有商品 95 折' },
    card88: { name: '88 卡', price: 12, discount: '88 折', description: '所有商品 88 折' }
  }[planType] || { name: '95 卡', price: 5, discount: '95 折', description: '所有商品 95 折' }

  const handlePay = () => {
    setProcessing(true)

    setTimeout(() => {
      setProcessing(false)
      navigate('/payment-result', {
        state: {
          success: true,
          amount: planInfo.price,
          paymentMethod,
          planType
        }
      })
    }, 2000)
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
        <h1 className="text-lg font-semibold text-neutral-900">确认支付</h1>
        <div className="w-10" />
      </header>

      {/* 主要内容 */}
      <main className="flex-1 p-4">
        {/* 订单信息卡片 */}
        <section className="bg-white rounded-xl p-4 mb-4 shadow-sm">
          <h2 className="text-sm font-medium text-neutral-500 mb-2">订单信息</h2>
          <div className="flex items-baseline gap-1 mb-4">
            <span className="text-4xl font-bold text-neutral-900">¥{planInfo.price}</span>
            <span className="text-neutral-500">/ 月</span>
          </div>

          <div className="border-t border-neutral-100 pt-3 space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-neutral-600">会员卡类型</span>
              <span className="text-neutral-900 font-medium">绘眼宝盒{planInfo.name}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-neutral-600">商品折扣</span>
              <span className="text-primary-600 font-medium">{planInfo.discount}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-neutral-600">会员姓名</span>
              <span className="text-neutral-900">{registration.memberName || '-'}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-neutral-600">手机号</span>
              <span className="text-neutral-900">{registration.phone || '-'}</span>
            </div>
          </div>
        </section>

        {/* 支付方式选择 */}
        <section className="bg-white rounded-xl p-4 mb-4 shadow-sm">
          <h2 className="text-sm font-medium text-neutral-500 mb-3">支付方式</h2>

          <div className="space-y-3">
            {/* 微信支付 - 绿色 */}
            <label
              className={`flex items-center justify-between p-4 border-2 rounded-xl cursor-pointer transition-all ${
                paymentMethod === 'wechat'
                  ? 'border-green-500 bg-green-50'
                  : 'border-neutral-200 hover:border-neutral-300'
              }`}
            >
              <div className="flex items-center gap-3">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="wechat"
                  checked={paymentMethod === 'wechat'}
                  onChange={() => setPaymentMethod('wechat')}
                  className="w-5 h-5 text-green-600 focus:ring-green-500"
                />
                <div className="flex items-center gap-2">
                  <svg className="w-6 h-6 text-green-600" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
                  </svg>
                  <span className="font-medium text-neutral-900">微信支付</span>
                </div>
              </div>
              <svg className="w-5 h-5 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </label>

            {/* 支付宝 - 蓝色 */}
            <label
              className={`flex items-center justify-between p-4 border-2 rounded-xl cursor-pointer transition-all ${
                paymentMethod === 'alipay'
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-neutral-200 hover:border-neutral-300'
              }`}
            >
              <div className="flex items-center gap-3">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="alipay"
                  checked={paymentMethod === 'alipay'}
                  onChange={() => setPaymentMethod('alipay')}
                  className="w-5 h-5 text-blue-600 focus:ring-blue-500"
                />
                <div className="flex items-center gap-2">
                  <svg className="w-6 h-6 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
                  </svg>
                  <span className="font-medium text-neutral-900">支付宝</span>
                </div>
              </div>
              <svg className="w-5 h-5 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </label>
          </div>
        </section>

        {/* 委托扣费提示 - 橙色系 */}
        <section className="bg-primary-50 border border-primary-200 rounded-xl p-4">
          <div className="flex items-start gap-3">
            <svg className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div className="text-sm text-primary-800">
              <p className="font-medium mb-1">委托扣费说明</p>
              <p>开通自动续费后，会员到期将自动扣费。您可随时取消自动续费。</p>
            </div>
          </div>
        </section>
      </main>

      {/* 底部支付按钮 */}
      <footer className="bg-white border-t border-neutral-200 px-4 py-4 safe-area-bottom">
        <button
          onClick={handlePay}
          disabled={processing}
          className={`w-full py-3.5 px-4 rounded-lg text-white font-medium text-base transition-colors flex items-center justify-center gap-2 ${
            processing
              ? 'bg-neutral-400 cursor-not-allowed'
              : paymentMethod === 'wechat'
              ? 'bg-green-600 hover:bg-green-700 active:bg-green-800'
              : 'bg-blue-600 hover:bg-blue-700 active:bg-blue-800'
          }`}
        >
          {processing ? (
            <>
              <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              <span>支付中...</span>
            </>
          ) : (
            <span>立即支付 ¥{planInfo.price}</span>
          )}
        </button>
      </footer>
    </div>
  )
}